import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private url = 'http://localhost:1337';

  constructor( private http: HttpClient ) { }

  saveContact( contact: ContactModel ) {
    return this.http.post( `${ this.url }/contactenos`, contact);
  }

}
