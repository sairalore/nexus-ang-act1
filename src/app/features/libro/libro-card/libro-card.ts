import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LibroM} from '../libro.model';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-libro-card',
  imports: [FormsModule, RouterLink],
  templateUrl: './libro-card.html',
  styleUrl: './libro-card.css'
})
export class LibroCard {
  @Input() titulo: string ='';
  @Input() book: LibroM = new LibroM(0,'','',0,'','','',0,0);
  @Input() submittedH = false;
  @Output() eventEmitLibro = new EventEmitter<LibroM>();

  enviarBook(){
    this.eventEmitLibro.emit(this.book);
  }
}
