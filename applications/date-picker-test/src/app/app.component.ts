import { Component } from '@angular/core';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'md-angular-kendo-datepicker';
  public date: Date = new Date();

  public handleDateChange(newDate: Date): void {
    this.date = newDate;
  }
}
