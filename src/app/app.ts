import { Component, signal } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LibroM} from './features/libro/libro.model';
import {LibroCart} from './features/libro/libro-cart/libro-cart';
import {CardList} from './shared/card-list/card-list';
import {LibroCheckout} from './features/libro/libro-checkout/libro-checkout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LibroCart, CardList, LibroCheckout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Actividad uno');
  footerUrl = 'https://getbootstrap.com/';
  footerLink = 'www.getbootstrap.com';
  cartItems: LibroM[] = [];
  currentView: 'landing'|'search' | 'cart' | 'checkout' = 'landing';
  constructor(private router: Router) { } // Inyectar Router

  agregarLibroCarrito(book: LibroM) {
    // Evitar duplicados si un libro ya está en el carrito
    if (!this.cartItems.find(item => item.id === book.id)) {
      this.cartItems.push(book);
      alert(`${book.nombre} ha sido añadido al carrito.`);
    } else {
      alert(`${book.nombre} ya está en el carrito.`);
    }
  }

  removerDelCarrito(book: LibroM){
    this.cartItems.filter(item => item.id !== book.id);
    alert('Libro eliminado del carrito.');
  }

  irAlCheckout(): void {
    if (this.cartItems.length > 0) {
      this.currentView = 'checkout';
      this.router.navigate(['checkout']);
    } else {
      alert('Tu carrito está vacío. ¡Añade libros antes de proceder!');
    }
  }
  // Este método será llamado por el componente Checkout (a través de Checkout.eERegresarInicio)
  regresarInicio(): void {
    this.cartItems = [];
    this.currentView = 'landing';
    this.router.navigate(['']);
    alert('¡Gracias por tu compra! Tu pedido ha sido confirmado.');
  }
  irSeguirComprando(){
    this.router.navigate(['cardList']);
    alert('¡Gracias por seguir comprando!.');
  }
}
