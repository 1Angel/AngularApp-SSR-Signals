import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { Character } from '../../models/Character-response-interface';
import { CharacterService } from '../../services/character.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterCardComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent implements OnInit{
  ngOnInit(): void {
    this.GetCharacter();

    this.title.setTitle("Character List - Angular");
    this.meta.updateTag({name: "description",content: "Principal page"});
    this.meta.updateTag({name: "og:description",content: "Principal page"});
    this.meta.updateTag({name:"og:title",content:this.title.getTitle()})
  }

  private readonly service = inject(CharacterService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  characters = signal<Character[]>([]);

  GetCharacter(){
    this.service.GetCharacters().subscribe(response=>{
      this.characters.set(response.results);
    })
  }

}
