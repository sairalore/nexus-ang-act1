import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafeteria-landing',
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class CafeteriaLanding {
  servicios = [
    {
      titulo: 'Café de Especialidad',
      descripcion: 'Granos seleccionados de las mejores regiones cafeteras del mundo.',
      icono: '☕'
    },
    {
      titulo: 'Repostería Artesanal',
      descripcion: 'Pasteles, galletas y postres elaborados diariamente en nuestra cocina.',
      icono: '🧁'
    },
    {
      titulo: 'Espacio Coworking',
      descripcion: 'Mesas cómodas con WiFi de alta velocidad para estudiar o trabajar.',
      icono: '💻'
    }
  ];
}
