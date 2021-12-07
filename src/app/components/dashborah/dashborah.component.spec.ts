import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborahComponent } from './dashborah.component';

describe('DashborahComponent', () => {
  let component: DashborahComponent;
  let fixture: ComponentFixture<DashborahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashborahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashborahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
