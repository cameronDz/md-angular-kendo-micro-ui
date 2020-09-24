import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed, TestModuleMetadata} from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

@Component({ template:
`<div *ngIf="showComponent">
  <md-nav-bar></md-nav-bar>
</div>`})
class TestWrapperComponent {
  public showComponent: boolean = false;
}

describe('NavBarComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      NavBarComponent,
      TestWrapperComponent
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.showComponent = true;
    fixture.detectChanges();

    const navBar: HTMLElement = fixture.nativeElement.querySelector('div.kendo-title-bar.nav-bar svg');
    expect(navBar).toBeTruthy();
  });
});
