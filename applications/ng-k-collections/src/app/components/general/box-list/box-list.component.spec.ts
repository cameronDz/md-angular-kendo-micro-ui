import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { BoxListComponent } from './box-list.component';

describe('BoxListComponent', () => {
  let component: BoxListComponent;
  let fixture: ComponentFixture<BoxListComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      BoxListComponent
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
