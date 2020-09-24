import { Component, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { POPUP_CONTAINER } from '@progress/kendo-angular-popup';

import { DatePickerComponent } from './date-picker.component';

@Component({ selector: 'md-test-wrapper', template:
`<div *ngIf="showComponent">
  <md-date-picker
    [date]="date"
    (onValueChange)="handleValueChange($event)">
  </md-date-picker>
</div>`})
class TestWrapperComponent {
  public showComponent: boolean = false;
  public date: Date = new Date('06/15/2010');
  public handleValueChange(event: Date): void {
    this.date = event;
  }
}

describe('DatePickerComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      DatePickerComponent,
      TestWrapperComponent
    ],
    imports: [
      BrowserAnimationsModule,
      DateInputsModule
    ],
    providers: [{
      provide: POPUP_CONTAINER,
      useFactory: () => {
         return { nativeElement: document.body } as ElementRef;
      }
    }]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.showComponent = true;
    fixture.detectChanges();

    const container: HTMLElement = fixture.nativeElement.querySelector('div.date-picker-container');
    expect(container).toBeTruthy();
  });

  it('click new date, date is updated', () => {
    component.showComponent = true;
    fixture.detectChanges();

    // open calendar
    const container: HTMLElement = fixture.nativeElement.querySelector('div.date-picker-container kendo-datepicker .k-picker-wrap .k-select');
    container.click();

    // click month
    const months: any = document.querySelectorAll('kendo-popup kendo-calendar kendo-calendar-navigation ul li')[4];
    months.click();

    // click day
    const days: any = document.querySelectorAll('kendo-popup kendo-calendar kendo-calendar-viewlist td span.k-link')[1];
    days.click();
    fixture.detectChanges();

    const actual: Date = new Date(component.date.getMonth() + 1 + '/' + component.date.getDate() + '/' + component.date.getFullYear());
    const expected: Date = new Date('05/02/2010');
    expect(actual).toEqual(expected);
  });
});
