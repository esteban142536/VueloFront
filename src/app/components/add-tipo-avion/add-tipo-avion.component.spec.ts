import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoAvionComponent } from './add-tipo-avion.component';

describe('AddTipoAvionComponent', () => {
  let component: AddTipoAvionComponent;
  let fixture: ComponentFixture<AddTipoAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
