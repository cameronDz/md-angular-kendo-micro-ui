import { waitForAsync, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

describe('AppComponent', (): void => {
  const config: TestModuleMetadata = {
    declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      ModalWindowComponent,
      OverviewTextComponent
    ],
    imports: [
      WindowModule
    ]
  };

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule(config).compileComponents();
  }));

  it('should create the app', (): void => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
