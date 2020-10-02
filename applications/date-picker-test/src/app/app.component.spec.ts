import { waitForAsync, TestBed, TestModuleMetadata, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';

import { AppComponent } from './app.component';

import { DatePickerComponent } from './date-picker/date-picker.component';

@Component({ template:
`<div *ngIf="showComponent">
  <nssd-root></nssd-root>
</div>`})
class TestWrapperComponent {
  public showComponent: boolean = false;
}

describe('AppComponent', (): void => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      DatePickerComponent,
      TestWrapperComponent
    ],
    imports: [
      DateInputsModule
    ]
  };

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', (): void => {
    component.showComponent = true;
    fixture.detectChanges();

    const app: HTMLElement = fixture.nativeElement.querySelector('nssd-root');
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NSSD Datepick Test'`, (): void => {
    component.showComponent = true;
    fixture.detectChanges();

    const app: HTMLElement = fixture.nativeElement.querySelector('nssd-root .content .jumbotron');
    const title: string = app.innerHTML.trim();
    expect(title).toEqual('NSSD Datepick Test');
  });
});
