import { Advantage } from './../models/advantge.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvantageService {

  constructor(private http: HttpClient) { }

  getAdvantages() {
    const endpoint = config.baseUrl + '/ventajas'
    return this.http.get<Advantage>(endpoint).pipe(map(resp => {
      resp.Contenido.forEach((content) => {
        if (content.modal_image) content.modal_image.url = config.baseUrl + content.modal_image?.url;
      })

      return resp;
    }))
  }
}
