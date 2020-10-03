import { waitForAsync, TestBed, TestModuleMetadata} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

fdescribe('AppComponent', () => {
  const config: TestModuleMetadata = {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nssd-ng-k-collections-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('nssd-ng-k-collections-app');
  });
});
