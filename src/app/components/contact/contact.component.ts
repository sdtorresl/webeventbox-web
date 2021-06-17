import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm?: FormGroup;

  constructor( private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.contactForm = this.fb.group({
      comment: ['',[Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  validateForm() {
    console.log(this.contactForm);

    if (this.contactForm?.invalid) {
      return Object.values(this.contactForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
  }

  get invalidComment() {
    return this.contactForm?.get('comment')?.invalid && this.contactForm.get('comment')?.touched;
  }
  get invalidName() {
    return this.contactForm?.get('name')?.invalid && this.contactForm.get('name')?.touched;
  }
  get invalidEmail() {
    return this.contactForm?.get('email')?.invalid && this.contactForm.get('email')?.touched;
  }
  get invalidPhone() {
    return this.contactForm?.get('phone')?.invalid && this.contactForm.get('phone')?.touched;
  }
  get invalidCompany() {
    return this.contactForm?.get('company')?.invalid && this.contactForm.get('company')?.touched;
  }

}
