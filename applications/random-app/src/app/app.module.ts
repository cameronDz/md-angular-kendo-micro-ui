import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { AppComponent } from './app.component';
import { BoxListComponent } from './components/general/box-list/box-list.component';
import { CloudsFooterComponent } from './components/images/clouds-footer/clouds-footer.component';
import { KendoGridComponent } from './components/kendo/kendo-grid/kendo-grid.component';
import { KendoSplitterComponent } from './components/kendo/kendo-splitter/kendo-splitter.component';
import { KendoTabStripComponent } from './components/kendo/kendo-tab-strip/kendo-tab-strip.component';
import { KendoTreeViewComponent } from './components/kendo/kendo-tree-view/kendo-tree-view.component';
import { StyledTableComponent } from './components/general/styled-table/styled-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxListComponent,
    CloudsFooterComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
