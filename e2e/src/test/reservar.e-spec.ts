import {AppPage} from '../app.po';
import {UsuarioPage} from '../page/usuario/usuario.po';
import {browser, protractor} from 'protractor';
import {MenuPage} from '../page/menu/menu.po';
import {ReservaPage} from '../page/reserva/reserva.po';

describe('workspace-project Reserva', () => {
  let page: AppPage;
  let reserva: ReservaPage;

  beforeEach(() => {
    page = new AppPage();
    reserva = new ReservaPage();
  });


  it('Deberia renderizarse correctamente', () => {
    page.navigateToReservar();
    reserva.getTitleColumnIdt();
    reserva.getTitleColumnNombre();
    reserva.getTitleEmail();
    reserva.getInputText();
    expect(browser.getCurrentUrl()).toContain('/reservar');
  });



  it('Deberia ir atras', () => {
    page.navigateToReservar();
    reserva.clickButtonGoBack();
    expect(browser.getCurrentUrl()).toContain('/menu');
  });

  it('Deberia dar alert', () => {
    const timeoutInMilliseconds = 10000;
    page.navigateToReservar();
    reserva.selectGeneralClick();
    reserva.reservarClick().then((alertText: any) => {
      browser.wait(() => browser.switchTo().alert().then(
        () => true,
        () => false
      ), timeoutInMilliseconds); // Wait timeout;
      const popupAlert = browser.switchTo().alert();
      alertText = popupAlert.getText();
      expect(alertText).toMatch('');
      // Close alert
      popupAlert.dismiss();
    });
  });



});
