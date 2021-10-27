import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAsientoComponent } from './create-asiento.component';

describe('CreateAsientoComponent', () => {
  let component: CreateAsientoComponent;
  let fixture: ComponentFixture<CreateAsientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAsientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
