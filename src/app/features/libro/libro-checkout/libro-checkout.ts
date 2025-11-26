import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LibroM} from '../libro.model';
import {CurrencyPipe} from '@angular/common';
import {Router} from '@angular/router';
import {App} from '../../../app';

@Component({
  selector: 'app-libro-checkout',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './libro-checkout.html',
  styleUrl: './libro-checkout.css'
})
export class LibroCheckout implements OnInit{
  //@Input() librosAgregados: LibroM []=[];
  //@Output() eERegresarInicio = new EventEmitter<void>();

  precioTotal: number = 0;
  numeroFactura: string = '';
  fechaEntrega: string = '';

  constructor(
    private appComponent: App, // Inyectar AppComponent
    private router: Router // Inyectar Router
  ) { }

  get librosAgregados(): LibroM[] {
    return this.appComponent.cartItems; // Obtener los libros directamente del AppComponent
  }

  ngOnInit(){
    this.calcularTotal();
    this.generarDetallesFactura();
  }

  calcularTotal(): void {
    this.precioTotal = this.librosAgregados.reduce((sum, book) => sum + book.precio, 0);
  }

  generarDetallesFactura(): void {
    this.numeroFactura = 'NEXUS-' + Math.floor(Math.random() * 1000000);
    const date = new Date();
    date.setDate(date.getDate() + 3); // Entrega en 3 días
    this.fechaEntrega = date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  enviarRegresarInicio(){
    //this.eERegresarInicio.emit();
    this.appComponent.regresarInicio();
  }
}
