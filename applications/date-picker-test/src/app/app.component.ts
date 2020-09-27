import { Component } from '@angular/core';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public footerHref: string = 'https://github.com/cameronDz/md-angular-kendo-micro-ui/applications/date-picker-test';
  public date: Date = new Date();
  public title: string = 'md-angular-kendo-datepicker';

  public handleDateChange(newDate: Date): void {
    this.date = newDate;
  }
}
