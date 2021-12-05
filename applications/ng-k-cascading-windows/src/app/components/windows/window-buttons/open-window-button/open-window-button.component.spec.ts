import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { DialogModule, WindowContainerService, WindowService } from '@progress/kendo-angular-dialog';

import { WindowRefTrackerService } from '../../window-ref-tracker.service';
import { OpenWindowButtonComponent } from './open-window-button.component';

describe('OpenWindowButtonComponent', (): void => {
  let component: OpenWindowButtonComponent;
  let fixture: ComponentFixture<OpenWindowButtonComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      OpenWindowButtonComponent
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
    fixture = TestBed.createComponent(OpenWindowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
