import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeWindowsButtonComponent } from './cascade-windows-button.component';

describe('CascadeWindowsButtonComponent', () => {
  let component: CascadeWindowsButtonComponent;
  let fixture: ComponentFixture<CascadeWindowsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadeWindowsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeWindowsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
