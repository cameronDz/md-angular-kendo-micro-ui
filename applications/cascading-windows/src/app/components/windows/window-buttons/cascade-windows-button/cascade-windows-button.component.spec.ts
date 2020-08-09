import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { DialogModule, WindowContainerService, WindowService } from '@progress/kendo-angular-dialog';

import { WindowRefTrackerService } from '../../window-ref-tracker.service';
import { CascadeWindowsButtonComponent } from './cascade-windows-button.component';

describe('CascadeWindowsButtonComponent', () => {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule(config).compileComponents();
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
