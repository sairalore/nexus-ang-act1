import {Component, OnInit} from '@angular/core';
import {LibroM} from '../libro.model';
import {App} from '../../../app';
import {ActivatedRoute} from '@angular/router';
import {LibroService} from '../../services/libro-service';

@Component({
  selector: 'app-libro-detalle',
  imports: [],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css'
})
export class LibroDetalle implements OnInit{
  libro = new LibroM(0,'','', 0,'','','',2025,0);
  constructor(private libroService: LibroService,
              private  route: ActivatedRoute,
              private app: App) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const libroId= params.get('id');
      if(libroId){
        this.libro = this.libroService.obtenerLibroId(Number(libroId));
      }
    })
  }
}
