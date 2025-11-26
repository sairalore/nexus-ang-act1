import {Component, inject} from '@angular/core';
import {Card} from '../card/card';
import {LibroM} from '../../features/libro/libro.model';
import {LibroService} from '../../features/services/libro-service';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [
    NgOptimizedImage,
    FormsModule,
    CommonModule
  ],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {
  libroService= inject(LibroService)
  libros : LibroM[] = this.libroService.obtenerLibros();
  librosFiltrados: LibroM[] = [...this.libros];
  terminoBusqueda: string = '';
  categoriaSeleccionada: string = 'todas';

  categorias: string[] = [
    'todas',
    ...Array.from(new Set(this.libros.map(libro => libro.categoria)))
  ];

  buscarLibros(): void {
    let resultado = [...this.libros];

    // Filtrar por categoría
    if (this.categoriaSeleccionada !== 'todas') {
      resultado = resultado.filter(libro => 
        libro.categoria === this.categoriaSeleccionada
      );
    }

    // Filtrar por término de búsqueda
    if (this.terminoBusqueda.trim() !== '') {
      const termino = this.terminoBusqueda.toLowerCase().trim();
      resultado = resultado.filter(libro => 
        libro.nombre.toLowerCase().includes(termino) ||
        libro.autor.toLowerCase().includes(termino) ||
        libro.categoria.toLowerCase().includes(termino)
      );
    }

    this.librosFiltrados = resultado;
  }

  limpiarBusqueda(): void {
    this.terminoBusqueda = '';
    this.categoriaSeleccionada = 'todas';
    this.librosFiltrados = [...this.libros];
  }
}
