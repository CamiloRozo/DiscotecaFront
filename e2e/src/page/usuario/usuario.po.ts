import {by, element} from 'protractor';

export class UsuarioPage {

  private inputNombre = element(by.id('name'));
  private inputClave = element(by.id('password'));
  private linkIniciarSesion = element(by.id('start'));
  private linkRegistrarse = element((by.id('register')));


  async ingresarNombre(nombre: any) {
    await this.inputNombre.sendKeys(nombre);
  }

  async ingresarClave(clave: any) {
    await this.inputClave.sendKeys(clave);
  }
  async login(){
    await this.linkIniciarSesion.click();
  }

  async registrar(){
    await this.linkRegistrarse.click();
  }


}
