import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoAvionComponent } from './mantenimiento-avion.component';

describe('MantenimientoAvionComponent', () => {
  let component: MantenimientoAvionComponent;
  let fixture: ComponentFixture<MantenimientoAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
