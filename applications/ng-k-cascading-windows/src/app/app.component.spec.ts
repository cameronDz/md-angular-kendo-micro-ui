import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { DialogModule, WindowContainerService, WindowService } from '@progress/kendo-angular-dialog';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { WindowRefTrackerService } from './components/windows/window-ref-tracker.service';

import { AppComponent } from './app.component';
import { CascadeWindowsButtonComponent } from './components/windows/window-buttons/cascade-windows-button/cascade-windows-button.component';
import { OpenWindowButtonComponent } from './components/windows/window-buttons/open-window-button/open-window-button.component';

@Component({ template:
`<div *ngIf="showComponent">
  <nssd-root></nssd-root>
</div>` })
class TestWrapperComponent {
  public showComponent: boolean = false;
}

describe('AppComponent', (): void => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      AppComponent,
      CascadeWindowsButtonComponent,
      FooterComponent,
      HeaderComponent,
      OpenWindowButtonComponent,
      OverviewTextComponent,
      TestWrapperComponent
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
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', (): void => {
    component.showComponent = true;
    fixture.detectChanges();

    const container: HTMLElement = fixture.nativeElement.querySelector('div.example-wrapper');
    expect(container).toBeTruthy();
  });
});
