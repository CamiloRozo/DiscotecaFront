import {AppPage} from '../app.po';
import {UsuarioPage} from '../page/usuario/usuario.po';
import {browser, protractor} from 'protractor';

describe('workspace-project Usuario', () => {
  let page: AppPage;
  let usuario: UsuarioPage;

  beforeEach(() => {
    page = new AppPage();
    usuario = new UsuarioPage();
  });


  it('Deberia ir a registrarse', () => {
    page.navigateTo();
    usuario.ingresarNombre('test');
    usuario.registrar();
    expect(browser.getCurrentUrl()).toContain('/registro');
  });

  it('Deberia no iniciar sesion (credenciales incorrectas)', () => {
    const timeoutInMilliseconds = 10000;
    const NOMBRE = 'camilo';
    const CLAVE = 12345;
    page.navigateTo();
    usuario.ingresarNombre(NOMBRE);
    usuario.ingresarClave(CLAVE);
    usuario.login().then((alertText: any) => {
      browser.wait(() => browser.switchTo().alert().then(
        () => true,
        () => false
      ), timeoutInMilliseconds); // Wait timeout;
      const popupAlert = browser.switchTo().alert();
      alertText = popupAlert.getText();
      expect(alertText).toMatch('Contraseña o usuario incorrecto');
      // Close alert
      popupAlert.dismiss();
    });
  });

});
