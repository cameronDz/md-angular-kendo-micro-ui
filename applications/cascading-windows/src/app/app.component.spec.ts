import { Component } from '@angular/core';
import { TestBed, async, TestModuleMetadata, ComponentFixture } from '@angular/core/testing';
import { DialogModule, WindowContainerService, WindowService } from '@progress/kendo-angular-dialog';

import { WindowRefTrackerService } from './components/windows/window-ref-tracker.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CascadeWindowsButtonComponent } from './components/windows/window-buttons/cascade-windows-button/cascade-windows-button.component';
import { OpenWindowButtonComponent } from './components/windows/window-buttons/open-window-button/open-window-button.component';
import { OverviewTextComponent } from './components/overview-text/overview-text.component';

@Component({ template:
`<div *ngIf="showComponent">
  <md-root></md-root>
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
      NavBarComponent,
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

  beforeEach(async((): void => {
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
