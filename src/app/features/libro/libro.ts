import {Component, ViewChild} from '@angular/core';
import {LibroM} from './libro.model';
import {FormsModule, NgForm} from '@angular/forms';
import {LibroCard} from "./libro-card/libro-card";
import {List} from '../../shared/list/list';
@Component({
  selector: 'app-libro',
  imports: [FormsModule, List, LibroCard],
  templateUrl: './libro.html',
  styleUrl: './libro.css'
})
export class Libro {
  libro = new LibroM('','','','','');
  submitted = false;
  textoEtiqueta: string = 'una categoría';
  textoCardLibro: string ='Libro Card';
  itemsDisponibles: string[] = ['Ficción', 'Ciencia', 'Historia', 'Novela', 'Programación']; // Tus categorías disponibles
  booke= new LibroM('','','','','');
  @ViewChild('libroForm') libroForm!: NgForm; // Para resetear el formulario

  enviarLibro(libroA:NgForm ){
    this.submitted = true;
    console.log('Formulario enviado:',libroA);
    console.log('Libro enviado:',this.libro);
    console.log('Libro enviado2:',libroA.value);
    this.booke = libroA.value;
    this.booke.categoria=this.libro.categoria;
  }

  nuevoLibro() {
    this.submitted = false;
    this.libro = {
      nombre: '',
      autor: '',
      imagen: '',
      categoria: this.itemsDisponibles.length > 0 ? this.itemsDisponibles[0] : '',
      anio: ''};
    this.libroForm.resetForm(this.libro);
  }
  onItemSelected(item: string): void {
    this.libro.categoria = item;
    console.log('Categoría seleccionada:', item);
  }
}
