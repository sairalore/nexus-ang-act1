import { Injectable } from '@angular/core';
import { ProductoCafeteria } from '../cafeteria/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {
  private productos: ProductoCafeteria[] = [
    {
      id: 1,
      nombre: 'Espresso',
      categoria: 'cafe',
      precio: 2.50,
      descripcion: 'Café espresso italiano, intenso y aromático',
      imagen: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Cappuccino',
      categoria: 'cafe',
      precio: 3.50,
      descripcion: 'Espresso con leche vaporizada y espuma cremosa',
      imagen: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 3,
      nombre: 'Latte Vainilla',
      categoria: 'cafe',
      precio: 4.00,
      descripcion: 'Café latte con sirope de vainilla natural',
      imagen: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 4,
      nombre: 'Americano',
      categoria: 'cafe',
      precio: 2.80,
      descripcion: 'Espresso alargado con agua caliente',
      imagen: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 5,
      nombre: 'Mocha',
      categoria: 'cafe',
      precio: 4.50,
      descripcion: 'Espresso con chocolate y crema batida',
      imagen: 'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 6,
      nombre: 'Té Verde',
      categoria: 'bebida',
      precio: 2.00,
      descripcion: 'Té verde orgánico con antioxidantes',
      imagen: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 7,
      nombre: 'Chocolate Caliente',
      categoria: 'bebida',
      precio: 3.50,
      descripcion: 'Chocolate belga con crema batida',
      imagen: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 8,
      nombre: 'Smoothie de Fresa',
      categoria: 'bebida',
      precio: 4.50,
      descripcion: 'Batido natural de fresas frescas y yogurt',
      imagen: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 9,
      nombre: 'Limonada Natural',
      categoria: 'bebida',
      precio: 2.50,
      descripcion: 'Limonada recién exprimida con menta',
      imagen: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f74?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 10,
      nombre: 'Croissant',
      categoria: 'pastel',
      precio: 2.80,
      descripcion: 'Croissant francés de mantequilla',
      imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 11,
      nombre: 'Brownie de Chocolate',
      categoria: 'pastel',
      precio: 3.20,
      descripcion: 'Brownie casero con nueces',
      imagen: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 12,
      nombre: 'Cheesecake',
      categoria: 'pastel',
      precio: 4.50,
      descripcion: 'Tarta de queso con frutos rojos',
      imagen: 'https://images.unsplash.com/photo-1533134242116-8c5e93b66fa4?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 13,
      nombre: 'Muffin de Arándanos',
      categoria: 'pastel',
      precio: 2.50,
      descripcion: 'Muffin esponjoso con arándanos frescos',
      imagen: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 14,
      nombre: 'Tarta de Zanahoria',
      categoria: 'pastel',
      precio: 3.80,
      descripcion: 'Tarta de zanahoria con frosting de queso crema',
      imagen: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 15,
      nombre: 'Sandwich Club',
      categoria: 'sandwich',
      precio: 5.50,
      descripcion: 'Pan multicereales con pollo, bacon, lechuga y tomate',
      imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 16,
      nombre: 'Wrap Vegetariano',
      categoria: 'sandwich',
      precio: 4.80,
      descripcion: 'Tortilla integral con verduras asadas y hummus',
      imagen: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 17,
      nombre: 'Bagel con Salmón',
      categoria: 'sandwich',
      precio: 6.50,
      descripcion: 'Bagel con queso crema, salmón ahumado y alcaparras',
      imagen: 'https://images.unsplash.com/photo-1603046891726-36bfd957f955?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 18,
      nombre: 'Galletas Artesanales',
      categoria: 'snack',
      precio: 2.00,
      descripcion: 'Pack de 3 galletas de avena con chips de chocolate',
      imagen: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 19,
      nombre: 'Mix de Frutos Secos',
      categoria: 'snack',
      precio: 3.50,
      descripcion: 'Almendras, nueces, arándanos y anacardos',
      imagen: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop',
      disponible: true
    },
    {
      id: 20,
      nombre: 'Yogurt Griego con Granola',
      categoria: 'snack',
      precio: 3.80,
      descripcion: 'Yogurt griego natural con granola casera y miel',
      imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
      disponible: true
    }
  ];

  constructor() { }

  obtenerProductos(): ProductoCafeteria[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): ProductoCafeteria | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  obtenerProductosPorCategoria(categoria: string): ProductoCafeteria[] {
    return this.productos.filter(producto => producto.categoria === categoria);
  }

  obtenerProductosDisponibles(): ProductoCafeteria[] {
    return this.productos.filter(producto => producto.disponible);
  }
}
