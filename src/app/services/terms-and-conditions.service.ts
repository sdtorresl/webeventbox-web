import { Terms, Policy } from './../models/terms.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TermsAndConditionsService {

  constructor(private http: HttpClient) { }

  getTerms() {
    const endpoint = config.baseUrl + '/t-y-c';
    return this.http.get<Terms>(endpoint);
  }

  getPolicy() {
    const endpoint = config.baseUrl + '/politica-privacidad';
    return this.http.get<Policy>(endpoint);
  }
}
