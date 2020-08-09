import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { DialogModule, WindowContainerService, WindowService } from '@progress/kendo-angular-dialog';

import { WindowRefTrackerService } from '../../window-ref-tracker.service';
import { OpenWindowButtonComponent } from './open-window-button.component';

describe('OpenWindowButtonComponent', () => {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule(config).compileComponents();
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
