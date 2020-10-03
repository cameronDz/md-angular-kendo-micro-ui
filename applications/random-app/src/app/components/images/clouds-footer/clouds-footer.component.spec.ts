import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsFooterComponent } from './clouds-footer.component';

describe('CloudsFooterComponent', () => {
  let component: CloudsFooterComponent;
  let fixture: ComponentFixture<CloudsFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
