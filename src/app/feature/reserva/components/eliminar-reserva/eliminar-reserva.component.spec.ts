import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {EliminarReservaComponent} from './eliminar-reserva.component';
import {HttpClientModule} from '@angular/common/http';
import {ReservaService} from '../../shared/service/reserva.service';
import {of} from 'rxjs';
import {Location} from '@angular/common';
import {InjectionToken} from '@angular/core';


export const WINDOW = new InjectionToken('Window');
const reservaServiceSpy = jasmine.createSpyObj('ReservaService', ['eliminarReserva']);
const locationSpy = jasmine.createSpyObj('location', ['reload']);

const windowMock = {
  location: {
    reload: jasmine.createSpy('reload')
  }
};

describe('EliminarReservaComponent', () => {
  let component: EliminarReservaComponent;
  let fixture: ComponentFixture<EliminarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [EliminarReservaComponent],
      providers: [{provide: ReservaService, useValue: reservaServiceSpy}, {provide: WINDOW, useValue: windowMock}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be successful', fakeAsync(() => {
    window.onbeforeunload = () => {
      reservaServiceSpy.eliminarReserva.and.returnValue(of(''));
      component.onClick();
      expect(locationSpy.reload).toHaveBeenCalled();
    };
  }));

  it('should be something went wrong', fakeAsync(() => {
    spyOn(window, 'alert');
    component.onClick();
    expect(window.alert).toHaveBeenCalledOnceWith('something went wrong');
  }));
});
