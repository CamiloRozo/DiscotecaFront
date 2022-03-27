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
    page.navigateToListarReservas();
    reserva.getTitleColumnFechaReserva();
    reserva.getTitleColumnPrecio();
    reserva.getTitleColumnCategoria();
    reserva.getTitleColumnIdt();
    reserva.getTitleColumnIdUsuario();
    reserva.getTitleColumnNombre();
    reserva.getTitleColumnObsequio();
    expect(browser.getCurrentUrl()).toContain('/listar-reservas');
  });

  it('Deberia ir atras', () => {
    page.navigateToListarReservas();
    reserva.clickButtonGoBack();
    expect(browser.getCurrentUrl()).toContain('/menu');
  });



});
