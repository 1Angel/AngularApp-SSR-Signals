import { Component, input } from '@angular/core';
import { Character } from '../../models/Character-response-interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details-card',
  imports: [DatePipe],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {

  character = input.required<Character | undefined>();

}
