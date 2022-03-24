import {DatePipe} from '@angular/common';

export class Reserva {

  id: any | undefined;
  nombre: string | any;
  categoria: string;
  fechaReserva: DatePipe | any;
  idUsuario: number | any;
  precio: number | undefined;
  obsequio: boolean | undefined;


  constructor(nombre: string, categoria: string, fechaReserva: DatePipe, idUsuario: number, precio?: number, obsequio?: boolean, id?: any) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.fechaReserva = fechaReserva;
    this.idUsuario = idUsuario;
    this.precio = precio;
    this.obsequio = obsequio;
  }
}
