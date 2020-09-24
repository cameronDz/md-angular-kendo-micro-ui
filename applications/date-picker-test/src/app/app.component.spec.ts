import {  async, TestBed, TestModuleMetadata, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@Component({ template:
`<div *ngIf="showComponent">
  <md-root></md-root>
</div>`})
class TestWrapperComponent {
  public showComponent: boolean = false;
}

describe('AppComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  const testConfig: TestModuleMetadata = {
    declarations: [
      AppComponent,
      DatePickerComponent,
      NavBarComponent,
      TestWrapperComponent
    ],
    imports: [
      DateInputsModule
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    component.showComponent = true;
    fixture.detectChanges();

    const app: HTMLElement = fixture.nativeElement.querySelector('md-root');
    expect(app).toBeTruthy();
  });

  it(`should have as title 'md-angular-kendo-datepicker'`, () => {
    component.showComponent = true;
    fixture.detectChanges();

    const app: HTMLElement = fixture.nativeElement.querySelector('md-root .content .jumbotron');
    const title: string = app.innerHTML.trim();
    expect(title).toEqual('md-angular-kendo-datepicker');
  });
});
