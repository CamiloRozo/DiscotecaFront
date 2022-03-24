import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        // @ts-ignore
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        // @ts-ignore
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        // @ts-ignore
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(sessionStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('recovery session storage', () => {
    sessionStorage.setItem('id', '5');
    sessionStorage.setItem('nombre', 'camilo');
    component.ngOnInit();
    expect(component.id).toEqual('5');
    expect(component.nombre).toEqual('camilo');
  });
});
