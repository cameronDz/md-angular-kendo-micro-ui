import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTreeViewComponent } from './kendo-tree-view.component';

describe('KendoTreeViewComponent', () => {
  let component: KendoTreeViewComponent;
  let fixture: ComponentFixture<KendoTreeViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTreeViewComponent ]
    })
    .compileComponents();
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
