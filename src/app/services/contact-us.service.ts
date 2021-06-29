import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from "../models/contact.model";
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor( private http: HttpClient ) { }

  saveContact( contact: ContactModel ) {
    const endpoint = config.baseUrl + '/contactenos';

    return this.http.post( endpoint, contact);
  }

}
