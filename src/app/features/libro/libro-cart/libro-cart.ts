import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {LibroM} from '../libro.model';
import {CurrencyPipe} from '@angular/common';
import {Libro} from '../libro';
import {LibroService} from '../../services/libro-service';
import {CartService} from '../../services/cart-service';
import {App} from '../../../app';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-libro-cart',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './libro-cart.html',
  styleUrl: './libro-cart.css'
})
export class LibroCart implements OnInit, OnChanges, OnDestroy{
  cartService:CartService = inject(CartService);
  private cartSubscription!: Subscription;
  librosSeleccionados: LibroM[] = [];
  precioTotal: number = 0;

  constructor( private router: Router
  ) { }
  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.librosSeleccionados = items;
      console.log('CartComponent: Elementos actualizados en el carrito:', this.librosSeleccionados);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Escuchar cambios en selectedBooks para recalcular el total
    if (changes['librosSeleccionados']) {
      this.calcularTotal();
    }
  }

  calcularTotal(): number {
    this.precioTotal = this.librosSeleccionados.reduce((sum, book) => sum + book.precio, 0);
    return this.precioTotal;
  }

  removeFromCart(book: LibroM): void {
    this.cartService.removeFromCart(book);
  }

  checkout(): void {
    if (this.librosSeleccionados.length > 0) {
      this.router.navigate(['checkout']);
    } else {
      alert('Tu carrito está vacío. ¡Añade libros antes de proceder!');
    }
  }

  seguirComprando(){
    this.router.navigate(['cardList']);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
