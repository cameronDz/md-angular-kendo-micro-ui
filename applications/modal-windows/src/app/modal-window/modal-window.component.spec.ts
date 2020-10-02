import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { ModalWindowComponent } from './modal-window.component';

describe('ModalWindowComponent', (): void => {
  let component: ModalWindowComponent;
  let fixture: ComponentFixture<ModalWindowComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      ModalWindowComponent
    ],
    imports: [
      WindowModule
    ]
  };

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule(config).compileComponents();
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
