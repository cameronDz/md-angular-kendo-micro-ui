import { Component, OnInit } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import * as _gridData from '../../../../assets/component-data/grid.json';

@Component({
  selector: 'nssd-kendo-edit-grid',
  templateUrl: './kendo-edit-grid.component.html',
  styleUrls: ['./kendo-edit-grid.component.scss']
})
export class KendoEditGridComponent implements OnInit {

  public gridData: any = _gridData.payload;
  // dropdown data
  public selectData: Array<{ dataValue: string, displayValue: string }> = [
    { dataValue: "A", displayValue: "Choice A" },
    { dataValue: "B", displayValue: "Choice B" },
    { dataValue: "Dog", displayValue: "Choice Dog" },
    { dataValue: "", displayValue: "Choice nil" }
  ];

  private currentId: string = '';
  public currentValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  public onStateChange(event: any): void {
    console.log('onStateChange:', event);
  }

  public cellClickHandler(event: GridClickEvent): void {
    const id: string = event?.dataItem?.id;
    if (!!id) {
      this.currentId = id;
    }
    if (!!event && !event.isEdited) {
      event.sender.editCell(event.rowIndex, event.columnIndex);
    }
  }

  public cellCloseHandler(event: any): void {
    this.currentId = '';
  }

  public handleGridEvent(event: any): void {
    const index: number = (!Array.isArray(this.gridData)) ? -1 : this.gridData.findIndex((item: any) => {
      return ((item) && (item.id) && (item.id === this.currentId));
    });
    if ((event?.displayValue) && (index > -1)) {
      this.gridData[index].name = event.displayValue;
    }
  }
}

class GridClickEvent {
  constructor(
    public sender: GridComponent,
    public rowIndex: number,
    public columnIndex: number,
    public dataItem: any,
    public isEdited: boolean) {}
}
