import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {
  btnString:string = 'Aceptar'
  constructor(public preguntaService: PreguntaService,private router:Router){

  }
  siguiente(){
    switch (this.btnString) {
      case 'Aceptar':
        this.preguntaService.pregconfirmada = true
        this.btnString = 'Siguiente'
        if (this.preguntaService.preguntas.length -1 === this.preguntaService.indexPregunta) {
          this.btnString = 'Finalizar'
        }
        break;
      case 'Siguiente':
        this.preguntaService.indexPregunta++
        this.preguntaService.respuestasUsuario.push(this.preguntaService.idexRespuesta!)
        this.preguntaService.deshabilitarBtn = true
        this.preguntaService.pregconfirmada = false
        this.btnString = 'Aceptar'
        break;
        case 'Finalizar':
          this.preguntaService.respuestasUsuario.push(this.preguntaService.idexRespuesta!)
          this.preguntaService.opcionSeleccionada = null
          this.preguntaService.pregconfirmada = false
          this.preguntaService.indexPregunta = 0
          this.router.navigate(['/respuesta'])
        break;
      default:
        break;
    }

  }

}
