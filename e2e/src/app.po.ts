import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToMenu() {
    return browser.get(browser.baseUrl + '/menu') as Promise<any>;
  }

  navigateToListarReservas() {
    return browser.get(browser.baseUrl + '/listar-reservas') as Promise<any>;
  }

  navigateToListarReservasUsuario() {
    return browser.get(browser.baseUrl + '/reserva-usuario') as Promise<any>;
  }

  navigateToReservar() {
    return browser.get(browser.baseUrl + '/reservar') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-verificar-usuario h2')).getText() as Promise<string>;
  }

  currentUrl() {
    return browser.getCurrentUrl();
  }
}
