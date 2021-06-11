import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor(private http: HttpClient) { }

  getIntro() {
    const endpoint = 'http://192.168.1.1:1337' + '/introduccion';
    return this.http.get(endpoint);
  }
}
