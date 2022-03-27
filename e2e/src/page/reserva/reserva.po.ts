import {by, element} from 'protractor';

export class ReservaPage {

  private columnNombre = element(by.id('nombre'));
  private columnId = element(by.id('id'));
  private columnCategoria = element(by.id('categoria'));
  private columnFechaReserva = element(by.id('fechaReserva'));
  private columnIdUsuario = element(by.id('idUsuario'));
  private columnObsequio = element(by.id('obsequio'));
  private columnPrecio = element(by.id('precio'));
  private emailText = element(by.id('email'));
  private columnEliminar = element(by.id('eliminar'));
  private buttonGoback = element(by.id('back'));
  private inputStateText = element(by.id('inputState'));
  private selectGeneral = element(by.cssContainingText('option', 'General'));
  private reservar = element(by.id('reservar'));


  getTitleColumnNombre() {
    return this.columnNombre.getText() as Promise<string>;
  }

  getTitleColumnIdt() {
    return this.columnId.getText() as Promise<string>;
  }

  getTitleColumnCategoria() {
    return this.columnCategoria.getText() as Promise<string>;
  }

  getTitleColumnFechaReserva() {
    return this.columnFechaReserva.getText() as Promise<string>;
  }

  getTitleColumnIdUsuario() {
    return this.columnIdUsuario.getText() as Promise<string>;
  }

  getTitleColumnObsequio() {
    return this.columnObsequio.getText() as Promise<string>;
  }

  getTitleColumnPrecio() {
    return this.columnPrecio.getText() as Promise<string>;
  }

  getTitleColumnEliminar() {
    return this.columnEliminar.getText() as Promise<string>;
  }

  getTitleEmail() {
    return this.emailText.getText() as Promise<string>;
  }

  getInputText() {
    return this.inputStateText.getText() as Promise<string>;
  }
  async selectGeneralClick(){
   await this.selectGeneral.click();
  }

  async reservarClick(){
    await this.reservar.click();
  }

  async clickButtonGoBack(){
    await this.buttonGoback.click();
  }


}
