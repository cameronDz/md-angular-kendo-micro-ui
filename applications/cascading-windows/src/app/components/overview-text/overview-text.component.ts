import { Component, OnInit } from '@angular/core';
import { OverviewTextService } from './overview-text.service';

@Component({
  selector: 'md-overview-text',
  templateUrl: './overview-text.component.html',
  styleUrls: ['./overview-text.component.scss']
})
export class OverviewTextComponent implements OnInit {

  public title: string = '';
  public subtitle: string = '';
  public points: Array<string> = [];

  public hasPoints: boolean = false;

  constructor(private overviewTextService: OverviewTextService) {}

  ngOnInit(): void {
    this.title = this.overviewTextService.getOverviewTitle();
    this.subtitle = this.overviewTextService.getOverviewSubtitle();
    this.points = this.overviewTextService.getOverviewPoints();
    this.hasPoints = (this.points && this.points.length > 0);
  }
}
