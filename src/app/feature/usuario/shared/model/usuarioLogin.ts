export class UsuarioLogin {
  nombre: string;
  clave: number | string;


  constructor(nombre: string, clave: number) {
    this.nombre = nombre;
    this.clave = clave;
  }

}
