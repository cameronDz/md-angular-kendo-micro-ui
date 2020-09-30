import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowComponent } from './modal-window.component';

describe('ModalWindowComponent', (): void => {
  let component: ModalWindowComponent;
  let fixture: ComponentFixture<ModalWindowComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(ModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
