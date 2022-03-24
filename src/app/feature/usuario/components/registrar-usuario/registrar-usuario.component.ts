import {Component} from '@angular/core';
import {UsuarioService} from '../../shared/service/usuario.service';
import {Usuario} from '../../shared/model/usuario';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent {
  usuario: Usuario;

  private static getDate(): any {
    const datePipeEn = new DatePipe('en-US');
    return datePipeEn.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
  }

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  public async onClickSubmit(data: any): Promise<void> {
    try {
      this.setUser(data);
      const idUser = await this.usuarioService.registrarUsuario(this.usuario).toPromise();
      sessionStorage.setItem('id', idUser.valor);
      sessionStorage.setItem('nombre', this.usuario.nombre);
      await this.router.navigate(['menu']);
    } catch (e: any) {
      alert('something went wrong trying to register a user');
    }
  }


  private setUser(data: any): void {
    this.usuario = {
      id: undefined,
      nombre: data.name,
      clave: data.password,
      fecha: RegistrarUsuarioComponent.getDate(),
      fechaNacimiento: data.trip,
    };
  }

}
