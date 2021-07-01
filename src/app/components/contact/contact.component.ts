import { ContactUsService } from './../../services/contact-us.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm?: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactUsService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.contactForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submit() {
    if (this.contactForm?.valid) {
      const formData = this.contactForm.value;
      this.contactService.sendContact(formData).subscribe(
        resp => {
          console.log(JSON.stringify(resp));
          Swal.fire({
            title: `Gracias por contactarnos, ${formData.name.split(' ')[0]}`,
            text: `Tu mensaje ha sido enviado`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            customClass: {
              confirmButton: 'confirm-button'
            }
          });
        },
        error => {
          console.log(JSON.stringify(error));
          Swal.fire({
            title: `Lo sentimos`,
            text: `Hubo un error al enviar tu mensaje, intenta nuevemente más tarde`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    }
  }

  validateForm() {
    console.log(this.contactForm?.value);

    if (this.contactForm?.invalid) {
      return Object.values(this.contactForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    } else {
      this.submit();
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
