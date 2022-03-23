import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../shared/service/usuario.service";
import {UsuarioLogin} from "../../shared/model/usuarioLogin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verificar-usuario',
  templateUrl: './verificar-usuario.component.html',
  styleUrls: ['./verificar-usuario.component.scss']
})
export class VerificarUsuarioComponent implements OnInit {

  private usuarioLogin: UsuarioLogin
  private idUser: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {

  }

  async onClickSubmit(data: any) {
    try {
      this.usuarioLogin = {
        nombre: data.name,
        clave: data.password
      }
      if (this.isValidLength(this.usuarioLogin.clave)) {
        await this.isValidUser();
      } else {
        alert('la contraseña debe contener minimo 4 caracteres');
      }

    } catch (error) {
      alert('Contraseña o usuario incorrecto');
      console.log('something has failed');
    }
  }

  isValidLength(password: any): boolean {
    return (password.length >= 4);
  }

  async isValidUser():Promise<void> {
    let response = await this.usuarioService.consultarCredenciales(this.usuarioLogin).toPromise();
    this.idUser = response.valor as { valor: number };
    sessionStorage.setItem('id', this.idUser);
    sessionStorage.setItem('nombre', this.usuarioLogin.nombre);
    await this.router.navigate(['menu']);
  }

  goToRegisterComponent(): void {
    this.router.navigate(['menu']);
  }

}
