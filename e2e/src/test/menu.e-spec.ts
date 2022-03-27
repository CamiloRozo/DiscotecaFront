import {AppPage} from '../app.po';
import {UsuarioPage} from '../page/usuario/usuario.po';
import {browser, protractor} from 'protractor';
import {MenuPage} from '../page/menu/menu.po';

describe('workspace-project Usuario', () => {
  let page: AppPage;
  let menu: MenuPage;

  beforeEach(() => {
    page = new AppPage();
    menu = new MenuPage();
  });


  it('Deberia redenrizarse correctamente', () => {
    page.navigateToMenu();
    menu.getTitleFirstText();
    menu.getTitleSecondText();
    menu.getTitleThirdText();
    expect(browser.getCurrentUrl()).toContain('/menu');
  });

  it('Deberia redirigir a listar', () => {
    page.navigateToMenu();
    menu.clickListarButton();
    expect(browser.getCurrentUrl()).toContain('/listar-reservas');
  });

  it('Deberia redirigir a reservar', () => {
    page.navigateToMenu();
    menu.clickReservarButton();
    expect(browser.getCurrentUrl()).toContain('/reservar');
  });

  it('Deberia redirigir a listar las reservas del usuario', () => {
    page.navigateToMenu();
    menu.clickListarReservasButtonButton();
    expect(browser.getCurrentUrl()).toContain('/reserva-usuario');
  });


});
