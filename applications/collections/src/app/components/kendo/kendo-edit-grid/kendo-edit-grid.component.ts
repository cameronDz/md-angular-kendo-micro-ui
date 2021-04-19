import { Component, OnInit } from '@angular/core';
import * as _gridData from '../../../../assets/component-data/grid.json';

@Component({
  selector: 'nssd-kendo-edit-grid',
  templateUrl: './kendo-edit-grid.component.html',
  styleUrls: ['./kendo-edit-grid.component.scss']
})
export class KendoEditGridComponent implements OnInit {

  public gridData: any = _gridData.payload;
  constructor() {}

  ngOnInit(): void {}

  public onStateChange(event: any): void {
    console.log('onStateChange:', event);
  }

  public cellClickHandler(event: any): void {
    console.log('cellClickHandler:', event);
  }

  public cellCloseHandler(event: any): void {
    console.log('cellCloseHandler:', event);
  }
}
