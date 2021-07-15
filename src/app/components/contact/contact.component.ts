import { ContactUsService } from './../../services/contact-us.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { OnExecuteData, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  contactForm?: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactUsService, private recaptchaV3Service: ReCaptchaV3Service) {
    this.buildForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.recaptchaV3Service.onExecute
      .subscribe((data: OnExecuteData) => {
        //console.log('Data: ', data);
      });
  }

  buildForm() {
    this.contactForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      recaptcha: ['']
    });
  }

  submit() {
    if (this.contactForm?.valid) {
      const formData = this.contactForm.value;
      this.contactService.sendContact(formData).subscribe(
        resp => {
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

    this.recaptchaV3Service.execute('submit').subscribe((token) => {
      this.contactForm?.patchValue({
        recaptcha: token
      });

      if (this.contactForm?.invalid) {
        return Object.values(this.contactForm.controls).forEach(control => {
          control.markAllAsTouched();
        });
      } else {
        this.submit();
      }
    }, (error) => {
      Swal.fire({
        title: `Ups`,
        text: `Al parecer se produjo un error al validar tu identidad`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
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
