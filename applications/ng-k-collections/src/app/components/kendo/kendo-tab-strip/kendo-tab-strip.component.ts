import { Component, OnInit, ViewChild } from '@angular/core';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import * as _tabInfo from '../../../../assets/component-data/tabStrip.json';

@Component({
  selector: 'nssd-kendo-tab-strip',
  templateUrl: './kendo-tab-strip.component.html',
  styleUrls: ['./kendo-tab-strip.component.scss']
})
export class KendoTabStripComponent implements OnInit {

  private readonly DISABLED_TAB_INDEX: number = 2;

  @ViewChild('kendoTabStripSelector')
  public kendoTabStrip: TabStripComponent;

  // tab content
  public tabOneTitle: string = _tabInfo.data.names[0];
  public tabTwoTitle: string = _tabInfo.data.names[1];
  public tabThreeTitle: string = _tabInfo.data.names[2];
  public tabFourTitle: string = _tabInfo.data.names[3];
  public tabOneParagraph: string = _tabInfo.data.content.informationParagraph;
  public tabStripButtonText: string = _tabInfo.data.button.text;

  // tab details
  public isTabEnabled: boolean = false;
  public selectedTab: number = 3;
  public selectedValue: string = "DoKg";

  // dropdown data
  public data: Array<{ dataValue: string, displayValue: string }> = [
    { dataValue: "A", displayValue: "Choice A" },
    { dataValue: "B", displayValue: "Choice B" },
    { dataValue: "Dog", displayValue: "Choice Dog" },
    { dataValue: "", displayValue: "Choice nil" }
  ];

  public handleEvent(event: any, name: string = 'NA'): void {
    console.log('event: ', event, ', name: ', name, ', value: ', this.selectedValue);
  }

  constructor() {}

  ngOnInit(): void {
    this.selectedTab = 3;
    if (this.kendoTabStrip) {
      this.kendoTabStrip.selectTab(this.selectedTab);
    }
  }

  public onTabSelect(event: any): void {
    this.selectedTab = event.index;
  }

  public onTabButtonClick(): void {
    this.isTabEnabled = !this.isTabEnabled;
    if (this.selectedTab === this.DISABLED_TAB_INDEX && !this.isTabEnabled) {
      this.kendoTabStrip.selectTab(0);
    }
  }
}
