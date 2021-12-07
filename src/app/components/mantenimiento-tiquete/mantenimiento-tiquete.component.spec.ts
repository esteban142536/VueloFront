import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoTiqueteComponent } from './mantenimiento-tiquete.component';

describe('MantenimientoTiqueteComponent', () => {
  let component: MantenimientoTiqueteComponent;
  let fixture: ComponentFixture<MantenimientoTiqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoTiqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
