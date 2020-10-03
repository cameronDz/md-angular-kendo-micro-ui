import { Component, OnInit } from '@angular/core';
import * as _data from '../../../../assets/component-data/treeview.json';

@Component({
  selector: 'nssd-kendo-tree-view',
  templateUrl: './kendo-tree-view.component.html',
  styleUrls: ['./kendo-tree-view.component.scss']
})
export class KendoTreeViewComponent implements OnInit {
  public payload: any = _data.list;
  public expandedKeys: any[] = [];
  public selectedKeys: any[] = [];

  constructor() {}

  ngOnInit() {}

  public hasSelectedNode(): boolean {
    return Array.isArray(this.selectedKeys) &&  this.selectedKeys.length > 0;
  }

  public hasExpandedNodes(): boolean {
    return Array.isArray(this.expandedKeys) &&  this.expandedKeys.length > 0;
  }

  public onTreeButtonClick(): void {
    if (this.hasSelectedNode()) {
      this.selectedKeys = [];
    } else if (this.hasExpandedNodes()) {
      this.expandedKeys = [];
    }
  }

  public generateTreeText(): string {
    let text: string = _data.button.noActionText;
    if (this.hasSelectedNode()) {
      text = _data.button.clearNodeText;
    } else if (this.hasExpandedNodes()) {
      text = _data.button.collapseNodesText;
    }
    return text;
  }
}
