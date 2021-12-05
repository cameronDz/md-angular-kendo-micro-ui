import { Component } from '@angular/core';
import * as _package from '../../package.json';

@Component({
  selector: 'nssd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public footerHref: string = _package.repository.url + '/tree/master' + _package.repository.directory;

}
