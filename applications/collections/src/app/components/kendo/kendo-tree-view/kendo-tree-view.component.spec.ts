import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { KendoTreeViewComponent } from './kendo-tree-view.component';

describe('KendoTreeViewComponent', () => {
  let component: KendoTreeViewComponent;
  let fixture: ComponentFixture<KendoTreeViewComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      KendoTreeViewComponent
    ],
    imports: [
      BrowserAnimationsModule,
      TreeViewModule
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
