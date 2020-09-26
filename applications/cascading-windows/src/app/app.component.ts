import { Component, OnInit} from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public footerHref: string = 'https://github.com/cameronDz/md-angular-kendo-micro-ui/applications/cascading-windows';
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
