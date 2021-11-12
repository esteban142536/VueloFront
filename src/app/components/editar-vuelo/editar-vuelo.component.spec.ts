import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVueloComponent } from './editar-vuelo.component';

describe('EditarVueloComponent', () => {
  let component: EditarVueloComponent;
  let fixture: ComponentFixture<EditarVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
