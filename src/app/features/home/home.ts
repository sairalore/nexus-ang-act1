import { Component } from '@angular/core';
import {LibroM} from '../libro/libro.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'my-bookstore';
  currentView: 'landing' | 'search' | 'cart' = 'landing';
  cartItems: LibroM[] = [];

  onBookSelected(book: LibroM) {
    // Evitar duplicados si un libro ya está en el carrito
    if (!this.cartItems.find(item => item.id === book.id)) {
      this.cartItems.push(book);
      alert(`${book.nombre} ha sido añadido al carrito.`);
    } else {
      alert(`${book.nombre} ya está en el carrito.`);
    }
  }

  onRemoveFromCart(bookId: number) {
    this.cartItems = this.cartItems.filter(book => book.id !== bookId);
    alert('Libro eliminado del carrito.');
  }

}
