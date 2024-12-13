import { Component, input } from '@angular/core';
import { Character } from '../../models/Character-response-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  imports: [RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  character = input.required<Character>();

}
