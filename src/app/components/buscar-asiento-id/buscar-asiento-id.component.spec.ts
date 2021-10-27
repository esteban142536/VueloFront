import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAsientoIDComponent } from './buscar-asiento-id.component';

describe('BuscarAsientoIDComponent', () => {
  let component: BuscarAsientoIDComponent;
  let fixture: ComponentFixture<BuscarAsientoIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAsientoIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAsientoIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
