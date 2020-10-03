import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { BoxListComponent } from '../../general/box-list/box-list.component';
import { KendoGridComponent } from '../kendo-grid/kendo-grid.component';
import { KendoSplitterComponent } from './kendo-splitter.component';
import { StyledTableComponent } from '../../general/styled-table/styled-table.component';

describe('KendoSplitterComponent', () => {
  let component: KendoSplitterComponent;
  let fixture: ComponentFixture<KendoSplitterComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      BoxListComponent,
      KendoSplitterComponent,
      KendoGridComponent,
      StyledTableComponent
    ],
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      GridModule,
      LayoutModule
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
