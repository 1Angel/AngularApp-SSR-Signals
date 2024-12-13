import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Character, Response } from '../models/Character-response-interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  private readonly http = inject(HttpClient);
  private readonly apiUrl: string = environment.apiUrl;


  GetCharacters(): Observable<Response>{
    return this.http.get<Response>(`${this.apiUrl}/character`);
  }

  GetCharacterById(id: number): Observable<Character>{
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

}
