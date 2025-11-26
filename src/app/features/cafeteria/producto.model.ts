export interface ProductoCafeteria {
  id: number;
  nombre: string;
  categoria: 'cafe' | 'bebida' | 'pastel' | 'sandwich' | 'snack';
  precio: number;
  descripcion: string;
  imagen: string;
  disponible: boolean;
}
