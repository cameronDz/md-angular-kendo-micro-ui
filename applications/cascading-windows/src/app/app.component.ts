import { Component, OnInit} from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';
import * as _package from '../../package.json';

@Component({
  selector: 'mdak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public footerHref: string = _package.repository.url + _package.repository.directory;
  public points: Array<string> = null;
  public subtitle: string = '';
  public title: string = '';

  constructor(private overviewTextService: OverviewTextService) {}

  ngOnInit(): void {
    this.points = this.overviewTextService.getOverviewPoints();
    this.subtitle = this.overviewTextService.getOverviewSubtitle();
    this.title = this.overviewTextService.getOverviewTitle();
  }
}
