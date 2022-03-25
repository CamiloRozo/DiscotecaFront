import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {ListarUsuariosComponent} from './listar-usuarios.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Usuario} from '../../shared/model/usuario';
import {RegistrarUsuarioComponent} from '../registrar-usuario/registrar-usuario.component';
import {UsuarioService} from '../../shared/service/usuario.service';
import {of} from 'rxjs';
import {DatePipe} from '@angular/common';

describe('ListarUsuariosComponent', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;
  const nacimiento: Date = new Date();
  const reserva: DatePipe = RegistrarUsuarioComponent.getDate();
  let usuarioService: UsuarioService;
  const listaUsuarios: Usuario[] = [new Usuario('camilo', 1234, nacimiento, reserva, 1),
    new Usuario('juan', 1234, nacimiento, reserva, 2)];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarUsuariosComponent],
      providers: [UsuarioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'consultar').and.returnValue(
      of(listaUsuarios)
    );
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaUsuarios.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
