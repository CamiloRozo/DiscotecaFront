import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../shared/service/usuario.service";
import {Usuario} from "../../shared/model/usuario";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
  }

  public async onClickSubmit(data: any): Promise<void> {
    try {
      this.setUser(data);
     let idUser = await this.usuarioService.registrarUsuario(this.usuario).toPromise();
      sessionStorage.setItem('id', idUser.valor);
      console.log('el id asignado es '+ idUser.valor);

    } catch (e : any) {
      console.log(' something went wrong trying to register a user');
    }
  }

  private getDate(): any {
    let datePipeEn = new DatePipe('en-US')
   return datePipeEn.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
  }

  private setUser(data:any): void {
    this.usuario = {
      id: undefined,
      nombre: data.name,
      clave: data.password,
      fecha: this.getDate(),
      fechaNacimiento: data.trip,

    }
  }

}
