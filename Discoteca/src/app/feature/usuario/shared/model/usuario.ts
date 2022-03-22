export class Usuario {
  id: number;
  nombre: string;
  clave: number;
  fechaNacimiento: Date;
  fechaCreacion: Date;

  constructor(id: number, nombre: string, clave: number, fechaNacimiento: Date, fechaCreacion: Date) {
    this.id = id;
    this.nombre = nombre;
    this.clave = clave;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaCreacion = fechaCreacion;
  }

}
