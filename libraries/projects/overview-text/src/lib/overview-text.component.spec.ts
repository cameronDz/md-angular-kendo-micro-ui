import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTextComponent } from './overview-text.component';

describe('OverviewTextComponent', () => {
  let component: OverviewTextComponent;
  let fixture: ComponentFixture<OverviewTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
