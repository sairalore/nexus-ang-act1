import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class CafeteriaCheckout {
  checkoutForm: FormGroup;
  pedidoEnviado = false;
  datosPedido: any = null;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      nombreCliente: ['', [Validators.required, Validators.minLength(3)]],
      emailCliente: ['', [Validators.required, Validators.email]],
      telefonoCliente: ['', [Validators.required, Validators.pattern(/^[0-9]{9,10}$/)]],
      tipoEntrega: ['mostrador', Validators.required],
      numeroMesa: [''],
      notasEspeciales: [''],
      aceptaTerminos: [false, Validators.requiredTrue]
    });

    // Validación condicional para número de mesa
    this.checkoutForm.get('tipoEntrega')?.valueChanges.subscribe(value => {
      const numeroMesaControl = this.checkoutForm.get('numeroMesa');
      if (value === 'coworking') {
        numeroMesaControl?.setValidators([Validators.required, Validators.pattern(/^[0-9]+$/)]);
      } else {
        numeroMesaControl?.clearValidators();
      }
      numeroMesaControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.datosPedido = this.checkoutForm.value;
      this.pedidoEnviado = true;
      console.log('Pedido enviado:', this.datosPedido);
      
      // Resetear formulario después de 5 segundos
      setTimeout(() => {
        this.pedidoEnviado = false;
        this.datosPedido = null;
        this.checkoutForm.reset({ tipoEntrega: 'mostrador' });
      }, 5000);
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.checkoutForm.controls).forEach(key => {
        this.checkoutForm.get(key)?.markAsTouched();
      });
    }
  }

  get nombreCliente() { return this.checkoutForm.get('nombreCliente'); }
  get emailCliente() { return this.checkoutForm.get('emailCliente'); }
  get telefonoCliente() { return this.checkoutForm.get('telefonoCliente'); }
  get tipoEntrega() { return this.checkoutForm.get('tipoEntrega'); }
  get numeroMesa() { return this.checkoutForm.get('numeroMesa'); }
  get notasEspeciales() { return this.checkoutForm.get('notasEspeciales'); }
  get aceptaTerminos() { return this.checkoutForm.get('aceptaTerminos'); }
}
