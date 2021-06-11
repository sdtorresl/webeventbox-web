import { Intro, Contenido } from './../models/intro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor(private http: HttpClient) { }

  getIntro() {
    const endpoint = config.baseUrl + '/introduccion';
    return this.http.get<Intro>(endpoint).pipe(map(resp => {
      resp.contenido?.forEach(content => {
        content.image.url = config.baseUrl + content.image.url;
      });

      return resp;
    }));
  }
}
