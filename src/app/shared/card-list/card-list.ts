import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LibroM} from '../../features/libro/libro.model';
import {LibroService} from '../../features/services/libro-service';
import {NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {CartService} from '../../features/services/cart-service';

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
  cartService= inject(CartService)
  libros : LibroM[] = this.libroService.obtenerLibros();

  addToCart(item:LibroM) {
    this.cartService.addToCart(item);
  }
}
