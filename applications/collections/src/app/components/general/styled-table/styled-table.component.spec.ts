import { waitForAsync, ComponentFixture, TestBed, TestModuleMetadata} from '@angular/core/testing';

import { StyledTableComponent } from './styled-table.component';

describe('StyledTableComponent', () => {
  let component: StyledTableComponent;
  let fixture: ComponentFixture<StyledTableComponent>;
  const config: TestModuleMetadata = {
    declarations: [
      StyledTableComponent
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
