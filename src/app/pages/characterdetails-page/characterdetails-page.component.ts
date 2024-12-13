import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/Character-response-interface';
import { switchMap, tap } from 'rxjs';
import { DetailsCardComponent } from "../../components/details-card/details-card.component";
import { Meta, Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-characterdetails-page',
  imports: [DetailsCardComponent],
  templateUrl: './characterdetails-page.component.html',
  styleUrl: './characterdetails-page.component.css'
})
export class CharacterdetailsPageComponent implements OnInit{

  
  private readonly service = inject(CharacterService);
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly destroyRef = inject(DestroyRef);
  
  character = signal<Character | undefined>(undefined);
  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params)=>{
        return this.service.GetCharacterById(Number(params.get('id')))
      }),
      tap(results=>{
        this.title.setTitle(`${results.name} - Angular`)
        this.meta.updateTag({name:"og:title", content: `${results.name} - Angular`});
        this.meta.updateTag({name: "description", content: `Details page of character ${results.name}`});
        this.meta.updateTag({name: "og:description", content: `Details page of character ${results.name}`});
        this.meta.updateTag({name: "og:image", content: `${results.image}`})
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(response=>{
      this.character.set(response)
    })
  }
  
  
}
