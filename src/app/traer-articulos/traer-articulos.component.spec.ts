import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerArticulosComponent } from './traer-articulos.component';

describe('TraerArticulosComponent', () => {
  let component: TraerArticulosComponent;
  let fixture: ComponentFixture<TraerArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
