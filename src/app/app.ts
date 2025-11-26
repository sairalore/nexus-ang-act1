import {Component, signal, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LibroM} from './features/libro/libro.model';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
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

  // Este método será llamado por el componente Checkout (a través de Checkout.eERegresarInicio)
  regresarInicio(): void {
    this.cartItems = [];
    this.router.navigate(['']);
    alert('¡Gracias por tu compra! Tu pedido ha sido confirmado.');
  }

}
