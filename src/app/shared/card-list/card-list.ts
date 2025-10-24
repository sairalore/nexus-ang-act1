import {Component, inject} from '@angular/core';
import {Card} from '../card/card';
import {LibroM} from '../../features/libro/libro.model';
import {LibroService} from '../../features/services/libro-service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {
  libroService= inject(LibroService)
  libros : LibroM[] = this.libroService.obtenerLibros();
}
