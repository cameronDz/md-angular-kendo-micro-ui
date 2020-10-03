import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { BoxListComponent } from '../../general/box-list/box-list.component';
import { KendoGridComponent } from '../kendo-grid/kendo-grid.component';
import { KendoSplitterComponent } from '../kendo-splitter/kendo-splitter.component';
import { KendoTabStripComponent } from './kendo-tab-strip.component';
import { KendoTreeViewComponent } from '../kendo-tree-view/kendo-tree-view.component';
import { StyledTableComponent } from '../../general/styled-table/styled-table.component';

describe('KendoTabStripComponent', () => {
  let component: KendoTabStripComponent;
  let fixture: ComponentFixture<KendoTabStripComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      BoxListComponent,
      KendoGridComponent,
      KendoSplitterComponent,
      KendoTabStripComponent,
      KendoTreeViewComponent,
      StyledTableComponent
    ],
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      GridModule,
      LayoutModule,
      TreeViewModule
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTabStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
