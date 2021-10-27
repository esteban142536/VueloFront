import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRutaIDComponent } from './find-ruta-id.component';

describe('FindRutaIDComponent', () => {
  let component: FindRutaIDComponent;
  let fixture: ComponentFixture<FindRutaIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRutaIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRutaIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
