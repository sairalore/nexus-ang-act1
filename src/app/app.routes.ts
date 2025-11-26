import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {About} from './features/about/about';
import {Contact} from './features/contact/contact';
import {NotFound} from './features/not-found/not-found';
import {Libro} from './features/libro/libro';
import {Mailing} from './features/contact/mailing/mailing';
import {Mapping} from './features/contact/mapping/mapping';
import {CardList} from './shared/card-list/card-list';
import {LibroCheckout} from './features/libro/libro-checkout/libro-checkout';
import {LibroCart} from './features/libro/libro-cart/libro-cart';
import {LibroDetalle} from './features/libro/libro-detalle/libro-detalle';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About },
  {path: 'contact', component: Contact,
  children: [
    {path: '', component: Mailing},
    {path: 'mapping', component: Mapping},
  ]},
  {path: 'libroNexus', component: Libro},
  {path: 'cardList/:id', component: LibroCart},
  {path: 'cardList', component: CardList},
  {path: 'checkout', component: LibroCheckout},
  {path: 'cart', component: LibroCart},
  {path: '**', redirectTo: 'about'},
];
