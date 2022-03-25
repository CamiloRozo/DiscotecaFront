import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { HacerReservaComponent } from './hacer-reserva.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {ReservaService} from '../../shared/service/reserva.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';


describe('HacerReservaComponent', () => {
  let component: HacerReservaComponent;
  let fixture: ComponentFixture<HacerReservaComponent>;
  const reservaServiceSpy = jasmine.createSpyObj('ReservaService', ['hacerReserva']);
  const httpClientSpy = jasmine.createSpyObj('httpClient', ['post']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  const validReserve = {
    nombre: 'camiloObsequioSi',
    categoria: 'vip' ,
    fechaReserva: '2022-03-15',
    idUsuario: '2'
  };

  const invalidReserve = {
    nombre: null,
    categoria: null ,
    fechaReserva: '2022-03-15',
    idUsuario: '2'
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      declarations: [ HacerReservaComponent ],
      providers: [{provider: ReservaService , useValue: reservaServiceSpy}, {provide: HttpClient, useValue: httpClientSpy} ,
        {provide: Router, useValue: routerSpy}]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(HacerReservaComponent);
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

  it('wrong reservation',  () => {
    spyOn(window, 'alert');
    component.onClickSubmit(invalidReserve);
    expect(window.alert).toHaveBeenCalledOnceWith('something went wrong with the reserve');
  }, 20000);

  it('successful reservation', () => {
    httpClientSpy.post.and.returnValue(of({valor: '3'}));
    component.onClickSubmit(validReserve);
    expect(component.modal).toBeTruthy();
  });

  it('successful router', () => {
    component.goBack();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['menu']);
  });




});
