import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [
    FormsModule
  ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  @Input() textLabel:string ='';
  @Input() items: string[] = []; // Recibe la lista de items
  @Input({ required: true }) itemSeleccionado: string=''; // item seleccionado actualmente
  @Output() eventEmitter = new EventEmitter<string>(); // Emite el item seleccionado

  enviarItemSeleccionado(item: string): void {
    this.itemSeleccionado = item;
    console.log("this.itemSeleccionado: ",this.itemSeleccionado);
    this.eventEmitter.emit(item);
  }

}
