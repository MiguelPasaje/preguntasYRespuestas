import { Component } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {
  btnString:string = 'Aceptar'
  constructor(public preguntaService: PreguntaService){

  }
  siguiente(){
    switch (this.btnString) {
      case 'Aceptar':
        this.preguntaService.pregconfirmada = true
        this.btnString = 'Siguiente'
        break;
      default:
        break;
    }

  }

}
