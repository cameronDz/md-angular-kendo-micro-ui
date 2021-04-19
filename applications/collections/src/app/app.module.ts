import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AppComponent } from './app.component';
import { BoxListComponent } from './components/general/box-list/box-list.component';
import { KendoGridComponent } from './components/kendo/kendo-grid/kendo-grid.component';
import { KendoSplitterComponent } from './components/kendo/kendo-splitter/kendo-splitter.component';
import { KendoTabStripComponent } from './components/kendo/kendo-tab-strip/kendo-tab-strip.component';
import { KendoTreeViewComponent } from './components/kendo/kendo-tree-view/kendo-tree-view.component';
import { StyledTableComponent } from './components/general/styled-table/styled-table.component';
import { KendoEditGridComponent } from './components/kendo/kendo-edit-grid/kendo-edit-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxListComponent,
    FooterComponent,
    HeaderComponent,
    KendoGridComponent,
    KendoSplitterComponent,
    KendoTabStripComponent,
    KendoTreeViewComponent,
    OverviewTextComponent,
    StyledTableComponent,
    KendoEditGridComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DropDownsModule,
    FormsModule,
    GridModule,
    LayoutModule,
    ReactiveFormsModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
