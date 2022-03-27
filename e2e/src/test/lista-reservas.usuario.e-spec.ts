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
    page.navigateToListarReservasUsuario();
    reserva.getTitleColumnFechaReserva();
    reserva.getTitleColumnPrecio();
    reserva.getTitleColumnCategoria();
    reserva.getTitleColumnIdt();
    reserva.getTitleColumnIdUsuario();
    reserva.getTitleColumnNombre();
    reserva.getTitleColumnObsequio();
    reserva.getTitleColumnEliminar();
    expect(browser.getCurrentUrl()).toContain('/reserva-usuario');
  });

  it('Deberia ir atras', () => {
    page.navigateToListarReservasUsuario();
    reserva.clickButtonGoBack();
    expect(browser.getCurrentUrl()).toContain('/menu');
  });



});
