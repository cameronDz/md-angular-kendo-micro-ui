import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWindowButtonComponent } from './open-window-button.component';

describe('OpenWindowButtonComponent', () => {
  let component: OpenWindowButtonComponent;
  let fixture: ComponentFixture<OpenWindowButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenWindowButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWindowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
