import { Component, OnInit } from '@angular/core';
import * as _gridData from '../../../../assets/component-data/grid.json';

@Component({
  selector: 'md-tutorial-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss']
})
export class KendoGridComponent implements OnInit {

  public gridData: any = _gridData.payload;
  constructor() { }

  ngOnInit() {
  }

}
