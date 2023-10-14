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
  respuestaSeleccionada(respuesta: Respuesta) {
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
  }

  AddClassOption(respuesta: Respuesta):string {
    if (respuesta === this.preguntaService.opcionSeleccionada) {
      return 'active text.light';
    }else{
      return ''
    }
  }
}
