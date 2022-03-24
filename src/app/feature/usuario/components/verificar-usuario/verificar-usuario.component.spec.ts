import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { VerificarUsuarioComponent } from './verificar-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {UsuarioService} from '../../shared/service/usuario.service';
import {Router} from '@angular/router';
import { of} from 'rxjs';

describe('VerificarUsuarioComponent', () => {
  let component: VerificarUsuarioComponent;
  let fixture: ComponentFixture<VerificarUsuarioComponent>;
  const usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['consultarCredenciales']);
  const routerServiceSpy = jasmine.createSpyObj('Router', ['navigate']);
  const invalidUserMock = {
    name: 'camilo' ,
    password: '123'
  };
  const nullUserMock = {
    name: 'camilo' ,
    password: null
  };
  const validUser = {
    name: 'camilo' ,
    password: '1234'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,       RouterTestingModule, FormsModule],
      declarations: [ VerificarUsuarioComponent ],
      providers: [{provide: UsuarioService, useValue: usuarioServiceSpy }, {provide: Router, useValue: routerServiceSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('it should show alert for invalid length', () => {
    spyOn(window, 'alert');
    component.onClickSubmit(invalidUserMock);
    expect(window.alert).toHaveBeenCalledOnceWith('la contraseña debe contener minimo 4 caracteres');
  });

  it ('it should go catch for invalid password', () => {
    spyOn(window, 'alert');
    component.onClickSubmit(nullUserMock);
    expect(window.alert).toHaveBeenCalledOnceWith('Contraseña o usuario incorrecto');
  });

  it ('it should go to menu with success status', fakeAsync(() => {
    usuarioServiceSpy.consultarCredenciales.and.returnValue(of({valor: '2'}));
    component.onClickSubmit(validUser);
    tick();
    expect(routerServiceSpy.navigate).toHaveBeenCalledWith(['menu']);
  }));


});
