import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservaUsuarioComponent } from './listar-reserva-usuario.component';
import {HttpClientModule} from '@angular/common/http';

describe('ListarReservaUsuarioComponent', () => {
  let component: ListarReservaUsuarioComponent;
  let fixture: ComponentFixture<ListarReservaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarReservaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
