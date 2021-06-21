import { Carousel } from './../models/carousel.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getSliders() {
    const endpoint = config.baseUrl + '/galeria';

    return this.http.get<Carousel>(endpoint).pipe(map(resp => {
      resp.slider_content?.forEach(content => {
        content.desktop.url = config.baseUrl + content.desktop.url;
        content.mobile.url = config.baseUrl + content.mobile.url;
      });

      return resp;
    }));

  }
}
