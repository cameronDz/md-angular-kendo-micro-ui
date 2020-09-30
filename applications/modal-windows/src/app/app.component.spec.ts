import { waitForAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { FooterComponent } from '../../../../libraries/projects/footer/src/lib/footer.component';
import { HeaderComponent } from '../../../../libraries/projects/header/src/lib/header.component';
import { OverviewTextComponent } from '../../../../libraries/projects/overview-text/src/lib/overview-text.component';

describe('AppComponent', (): void => {
  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        OverviewTextComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', (): void => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
