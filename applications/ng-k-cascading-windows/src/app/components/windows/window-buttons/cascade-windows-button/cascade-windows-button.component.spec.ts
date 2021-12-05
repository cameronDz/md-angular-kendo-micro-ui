import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { DialogModule, WindowContainerService, WindowService } from '@progress/kendo-angular-dialog';

import { WindowRefTrackerService } from '../../window-ref-tracker.service';
import { CascadeWindowsButtonComponent } from './cascade-windows-button.component';

describe('CascadeWindowsButtonComponent', (): void => {
  let component: CascadeWindowsButtonComponent;
  let fixture: ComponentFixture<CascadeWindowsButtonComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      CascadeWindowsButtonComponent
    ],
    imports: [
      DialogModule
    ],
    providers: [
      WindowContainerService,
      WindowRefTrackerService,
      WindowService
    ]
  };

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(CascadeWindowsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
