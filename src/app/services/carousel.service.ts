import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  url = 'http://192.168.1.1:1337';

  getSliders() {
    let endpoint = this.url + '/galeria';
    return this.http.get(endpoint);
  }
}
