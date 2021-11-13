import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTiqueteComponent } from './editar-tiquete.component';

describe('EditarTiqueteComponent', () => {
  let component: EditarTiqueteComponent;
  let fixture: ComponentFixture<EditarTiqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTiqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
