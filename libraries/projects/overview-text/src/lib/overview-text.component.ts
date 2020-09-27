import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'md-overview-text',
  templateUrl: './overview-text.component.html',
  styleUrls: [ './overview-text.component.scss']
})
export class OverviewTextComponent implements OnChanges, OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() points: Array<string> = [];

  public hasPoints: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
      this.hasPoints = this.points && !!this.points.length;
  }
}
