import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from './../../services/pregunta.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent implements OnInit {
  listPreguntas: Pregunta[] = [];

  constructor(public preguntaService: PreguntaService) {}
  ngOnInit(): void {
    this.listPreguntas = this.preguntaService.getPreguntas();
  }
  obtenerPregunta() {
    return this.listPreguntas[this.preguntaService.indexPregunta]
      .descripcionPregunta;
  }
  respuestaSeleccionada(respuesta: Respuesta, indexRespuesta:number) {
    if (this.preguntaService.pregconfirmada === true) {
      return
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.idexRespuesta = indexRespuesta
  }

  AddClassOption(respuesta: Respuesta): string {
    //pregunta seleccionada y no esta confirmada
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      !this.preguntaService.pregconfirmada
    ) {
      return 'active text.light';
    }
   /*  } else {
      return '';
    } */
    //respuesta es correcta y esta confirmada
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregconfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return 'list-group-item-success'
    }
    // respuesta es incorrecta y esta confirmada
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregconfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return 'list-group-item-danger'
    }


    return ''
  }
  iconCorrecta(respuesta:Respuesta):boolean{
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregconfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return true
    }else{
      return false
    }

  }
  iconIncorrecta(respuesta:Respuesta):boolean{
    if (
      respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregconfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return true
    }else{
      return false
    }

  }
}
