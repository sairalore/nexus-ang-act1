import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Card} from '../card/card';
import {LibroM} from '../../features/libro/libro.model';
import {LibroService} from '../../features/services/libro-service';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-list',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {
  libroService= inject(LibroService)
  libros : LibroM[] = this.libroService.obtenerLibros();
  //libroSeleccionado  = new LibroM(0,'','', 0,'','','',2025,0); // item seleccionado actualmente
  @Output() eEAgregarLibroCarrito = new EventEmitter<LibroM>();

  enviarAgregarLibroCarrito(item: LibroM): void {
    //this.libroSeleccionado = item;
    this.eEAgregarLibroCarrito.emit(item);
    console.log('Libro comprado:', item);
  }
}
