import {by, element} from 'protractor';

export class MenuPage {
  private listarButton = element(by.id('lista'));
  private reservarButton = element(by.id('reservar'));
  private listarReservasButton = element(by.id('lista reservas'));

  getTitleFirstText() {
    return this.listarButton.getText() as Promise<string>;
  }

  getTitleSecondText() {
    return this.reservarButton.getText() as Promise<string>;
  }

  getTitleThirdText() {
    return this.listarReservasButton.getText() as Promise<string>;
  }

  async clickListarButton() {
    await this.listarButton.click();
  }

  async clickReservarButton() {
    await this.reservarButton.click();
  }

  async clickListarReservasButtonButton() {
    await this.listarReservasButton.click();
  }


}
