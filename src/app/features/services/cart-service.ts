import { Injectable } from '@angular/core';
import {LibroM} from '../libro/libro.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<LibroM[]> = new BehaviorSubject<LibroM[]>([]);
  public cartItems$: Observable<LibroM[]> = this.cartItemsSubject.asObservable();
  constructor() { }

  addToCart(libro: LibroM): void {
    const currentItems = this.cartItemsSubject.getValue();
    if (!this.cartItemsSubject.getValue().find(item => item.id === libro.id)) {
      this.cartItemsSubject.next([...currentItems, libro]);
      console.log('Libro agregado al carrito:', libro);
      console.log('Artículos actuales en el carrito:', this.cartItemsSubject.getValue());
    } else {
      alert(`${libro.nombre} ya está en el carrito.`);
    }
  }

  getCartItems(): LibroM[] {
    return this.cartItemsSubject.getValue();
  }
  removeFromCart(libro:LibroM){
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.id !== libro.id);
    this.cartItemsSubject.next(updatedItems); // Emitimos la nueva lista al BehaviorSubject
    console.log(`Libro con ID ${libro.id} removido del carrito.`);
    console.log('Artículos actuales en el carrito:', this.cartItemsSubject.getValue());
  }
}
