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
  libro = new LibroM(0,'','', 0,'','','',2025,0);
  submitted = false;
  textoEtiqueta: string = 'una categoría';
  textoCardLibro: string ='Libro Card';
  itemsDisponibles: string[] = ['Ficción', 'Ciencia', 'Historia', 'Novela', 'Programación']; // Tus categorías disponibles
  booke= new LibroM(0,'','', 0,'','','',0,0);
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
      id:0,
      nombre: '',
      autor: '',
      votos: 0,
      imagen: '',
      url:'',
      categoria: this.itemsDisponibles.length > 0 ? this.itemsDisponibles[0] : '',
      anio: 0,
      precio: 0
    };
    this.libroForm.resetForm(this.libro);
  }
  onItemSelected(item: string): void {
    this.libro.categoria = item;
    console.log('Categoría seleccionada:', item);
  }
}
