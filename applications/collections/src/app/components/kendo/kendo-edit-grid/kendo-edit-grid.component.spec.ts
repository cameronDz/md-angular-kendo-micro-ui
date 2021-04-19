import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoEditGridComponent } from './kendo-edit-grid.component';

xdescribe('KendoEditGridComponent', () => {
  let component: KendoEditGridComponent;
  let fixture: ComponentFixture<KendoEditGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoEditGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoEditGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
