import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) { }

  getFeatures() {
    const endpoint = 'http://192.168.1.1:1337/caracteristica';
    return this.http.get(endpoint);
  }
}
