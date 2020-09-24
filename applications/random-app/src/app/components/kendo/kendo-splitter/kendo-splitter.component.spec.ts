import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoSplitterComponent } from './kendo-splitter.component';

describe('KendoSplitterComponent', () => {
  let component: KendoSplitterComponent;
  let fixture: ComponentFixture<KendoSplitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoSplitterComponent ]
    })
    .compileComponents();
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
