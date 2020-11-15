import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWindowGenerateComponent } from './button-window-generate.component';

describe('ButtonWindowGenerateComponent', () => {
  let component: ButtonWindowGenerateComponent;
  let fixture: ComponentFixture<ButtonWindowGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWindowGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWindowGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
