import { Component, OnInit } from '@angular/core';
import { StyledTableModel } from './style-table.model';
import * as _mockedTableData from '../../../../assets/component-data/table.json';

@Component({
  selector: 'md-tutorial-styled-table',
  templateUrl: './styled-table.component.html',
  styleUrls: ['./styled-table.component.scss']
})
export class StyledTableComponent implements OnInit {

  public readonly SEPARATOR_BAR: string = '|';

  public tableData: Array<StyledTableModel> = _mockedTableData.payload;

  constructor() { }

  ngOnInit() {
  }

}
