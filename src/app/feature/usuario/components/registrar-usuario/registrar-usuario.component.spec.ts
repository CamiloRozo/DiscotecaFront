import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {RegistrarUsuarioComponent} from './registrar-usuario.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {of} from 'rxjs';
import {UsuarioService} from '../../shared/service/usuario.service';
import {Router} from '@angular/router';

const usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', ['registrarUsuario']);
const routerServiceSpy = jasmine.createSpyObj('Router', ['navigate']);
describe('RegistrarUsuarioComponent', () => {
  let component: RegistrarUsuarioComponent;
  let fixture: ComponentFixture<RegistrarUsuarioComponent>;
  const validUserMock = {
    name: 'Carlossad',
    clave: '1234',
    password: '2022-03-22 11:54:15',
    trip: '2022-03-16'
  };
  const invalidUserMock = {
    name: 'Carlossad',
    clave: null,
    password: '2022-03-22 11:54:15',
    trip: '2022-03-16'
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      declarations: [RegistrarUsuarioComponent],
      providers: [{provide: UsuarioService, useValue: usuarioServiceSpy}, {provide: Router, useValue: routerServiceSpy}]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(RegistrarUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('it should register a user', fakeAsync(() => {
    usuarioServiceSpy.registrarUsuario.and.returnValue(of({valor: '2'}));
    component.onClickSubmit(validUserMock);
    tick();
    expect(routerServiceSpy.navigate).toHaveBeenCalledWith(['menu']);
  }));

  it('it generate error  registering a user', fakeAsync(() => {
    spyOn(window, 'alert');
    component.onClickSubmit(invalidUserMock);
    tick();
    expect(window.alert).toHaveBeenCalledOnceWith('something went wrong trying to register a user');
  }));


});
