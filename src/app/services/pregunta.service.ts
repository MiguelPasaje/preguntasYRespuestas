import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta = {
    nombre: '',
    esCorrecta: 2,
  };

  deshabilitarBtn: boolean = true;
  pregconfirmada:boolean = false


  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Argentina', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Bogota', 0),
      new Respuesta('Pasto', 0),
    ]),
    new Pregunta('Cual es la capital de Francia', [
      new Respuesta('Roma', 1),
      new Respuesta('Paris', 0),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('Cual es la capital de Egipto', [
      new Respuesta('Londres', 1),
      new Respuesta('Berlin', 0),
      new Respuesta('el Cairo', 0),
      new Respuesta('Casablanca', 0),
    ]),
  ];

  constructor() {}

  getPreguntas() {
    return this.preguntas.slice();
  }
}
