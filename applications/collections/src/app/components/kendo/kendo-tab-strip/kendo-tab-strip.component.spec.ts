import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTabStripComponent } from './kendo-tab-strip.component';

describe('KendoTabStripComponent', () => {
  let component: KendoTabStripComponent;
  let fixture: ComponentFixture<KendoTabStripComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTabStripComponent ]
    })
    .compileComponents();
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
