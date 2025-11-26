import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mailing',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './mailing.html',
  styleUrl: './mailing.css'
})
export class Mailing {
  contactForm: FormGroup;
  mensajeEnviado = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      this.mensajeEnviado = true;
      setTimeout(() => {
        this.mensajeEnviado = false;
        this.contactForm.reset();
      }, 3000);
    }
  }

  get nombre() { return this.contactForm.get('nombre'); }
  get email() { return this.contactForm.get('email'); }
  get asunto() { return this.contactForm.get('asunto'); }
  get mensaje() { return this.contactForm.get('mensaje'); }
}
