import { Component } from '@angular/core';
import * as _package from '../../package.json';

@Component({
  selector: 'mdak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public footerHref: string = _package.repository.url + '/test/master' + _package.repository.directory;
  public date: Date = new Date();
  public title: string = 'MDAK Datepick Test';

  public handleDateChange(newDate: Date): void {
    this.date = newDate;
  }
}
