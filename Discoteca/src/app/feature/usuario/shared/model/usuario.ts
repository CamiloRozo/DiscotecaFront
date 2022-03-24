import {DatePipe} from '@angular/common';

export class Usuario {
  id: number | undefined;
  nombre: string;
  clave: number;
  fechaNacimiento: Date;
  fecha: DatePipe;

  constructor(nombre: string, clave: number, fechaNacimiento: Date, fecha: DatePipe, id?: number) {
    this.id = id;
    this.nombre = nombre;
    this.clave = clave;
    this.fechaNacimiento = fechaNacimiento;
    this.fecha = fecha;
  }

}
