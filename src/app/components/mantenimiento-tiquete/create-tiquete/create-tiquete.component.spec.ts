import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTiqueteComponent } from './create-tiquete.component';

describe('CreateTiqueteComponent', () => {
  let component: CreateTiqueteComponent;
  let fixture: ComponentFixture<CreateTiqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTiqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
