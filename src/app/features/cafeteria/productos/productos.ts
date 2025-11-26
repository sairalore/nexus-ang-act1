import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CafeteriaService } from '../../services/cafeteria-service';
import { ProductoCafeteria } from '../producto.model';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class CafeteriaProductos implements OnInit {
  productos: ProductoCafeteria[] = [];
  categoriaSeleccionada: string = 'todas';
  productosFiltrados: ProductoCafeteria[] = [];

  categorias = [
    { id: 'todas', nombre: 'Todas' },
    { id: 'cafe', nombre: 'Cafés' },
    { id: 'bebida', nombre: 'Bebidas' },
    { id: 'pastel', nombre: 'Pasteles' },
    { id: 'sandwich', nombre: 'Sandwiches' },
    { id: 'snack', nombre: 'Snacks' }
  ];

  constructor(private cafeteriaService: CafeteriaService) {}

  ngOnInit(): void {
    this.productos = this.cafeteriaService.obtenerProductos();
    this.productosFiltrados = this.productos;
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    if (categoria === 'todas') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.cafeteriaService.obtenerProductosPorCategoria(categoria);
    }
  }

  obtenerNombreCategoria(categoria: string): string {
    const categoriaMap: { [key: string]: string } = {
      'cafe': 'Café',
      'bebida': 'Bebida',
      'pastel': 'Pastel',
      'sandwich': 'Sandwich',
      'snack': 'Snack'
    };
    return categoriaMap[categoria] || categoria;
  }
}
