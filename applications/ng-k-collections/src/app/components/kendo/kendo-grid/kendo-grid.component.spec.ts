import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { KendoGridComponent } from './kendo-grid.component';

describe('KendoGridComponent', () => {
  let component: KendoGridComponent;
  let fixture: ComponentFixture<KendoGridComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      KendoGridComponent
    ],
    imports: [
      BrowserAnimationsModule,
      BrowserModule,
      GridModule
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
