import { Feature } from './../models/feature.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) { }

  getFeatures() {
    const endpoint = config.baseUrl + '/caracteristica';
    return this.http.get<Feature>(endpoint).pipe(map(resp => {
      resp.stage_1.image.url = config.baseUrl + resp.stage_1.image.url;
      resp.stage_2.image.url = config.baseUrl + resp.stage_2.image.url;
      resp.stage_3.image.url = config.baseUrl + resp.stage_3.image.url;

      resp.Contenido?.forEach(content => {
        content.image.url = config.baseUrl + content.image.url;
      });

      return resp;
    }));
  }
}
