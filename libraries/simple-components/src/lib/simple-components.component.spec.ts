import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponentsComponent } from './simple-components.component';

describe('SimpleComponentsComponent', () => {
  let component: SimpleComponentsComponent;
  let fixture: ComponentFixture<SimpleComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
