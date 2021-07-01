import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from "../models/contact.model";
import { config } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }

  sendContact(contact: ContactModel) {
    const endpoint = config.baseUrl + '/contactenos';

    return this.http.post(endpoint, contact).pipe(
      map(
        (response) => {
          return response;
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
