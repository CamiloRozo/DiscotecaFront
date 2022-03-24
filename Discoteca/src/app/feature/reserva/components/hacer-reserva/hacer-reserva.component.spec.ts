import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerReservaComponent } from './hacer-reserva.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('HacerReservaComponent', () => {
  let component: HacerReservaComponent;
  let fixture: ComponentFixture<HacerReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      declarations: [ HacerReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerReservaComponent);
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
