import { Component, computed, input, OnInit } from '@angular/core';
import { Character } from '../../models/Character-response-interface';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent{

  character = input.required<Character>();

  episodesAppears = computed(()=>this.character().episode.length);

}
