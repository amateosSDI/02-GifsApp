import { Component,} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';


@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent  {

  get historial() {
    return this.GifsService.historial;
  }

  borrarHistorial () {
    return this.GifsService.borrarHistorial();
  }

  buscar(termino:string) {
    return this.GifsService.buscarGifs(termino);
  }

  constructor (private GifsService:GifsService) {}


}
