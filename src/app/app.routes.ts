import { Routes } from '@angular/router';
import {Home} from './features/home/home';
import {About} from './features/about/about';
import {Contact} from './features/contact/contact';
import {NotFound} from './features/not-found/not-found';
import {Libro} from './features/libro/libro';
import {Mailing} from './features/contact/mailing/mailing';
import {Mapping} from './features/contact/mapping/mapping';
import {CardList} from './shared/card-list/card-list';
import {CafeteriaLanding} from './features/cafeteria/landing/landing';
import {CafeteriaProductos} from './features/cafeteria/productos/productos';
import {CafeteriaCheckout} from './features/cafeteria/checkout/checkout';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About },
  {path: 'contact', component: Contact,
  children: [
    {path: '', component: Mailing},
    {path: 'mapping', component: Mapping},
  ]},
  {path: 'libroNexus', component: Libro},
  {path: 'cardList', component: CardList},
  {path: 'cafeteria', component: CafeteriaLanding},
  {path: 'cafeteria/productos', component: CafeteriaProductos},
  {path: 'cafeteria/checkout', component: CafeteriaCheckout},
  {path: '**', component: NotFound},
];
