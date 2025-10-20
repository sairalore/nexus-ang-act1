import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LibroM} from '../libro.model';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-libro-card',
  imports: [FormsModule],
  templateUrl: './libro-card.html',
  styleUrl: './libro-card.css'
})
export class LibroCard {
  @Input() titulo: string ='';
  @Input() book: LibroM = new LibroM('','','','','');
  @Input() submittedH = false;
  @Output() eventEmitLibro = new EventEmitter<LibroM>();

  enviarBook(){
    this.eventEmitLibro.emit(this.book);
  }
}
