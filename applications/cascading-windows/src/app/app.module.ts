import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { AppComponent } from './app.component';
import { CascadeWindowsButtonComponent } from './components/windows/window-buttons/cascade-windows-button/cascade-windows-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OpenWindowButtonComponent } from './components/windows/window-buttons/open-window-button/open-window-button.component';
import { WindowRefTrackerService } from './components/windows/window-ref-tracker.service';

import { FooterComponent } from '../../../../libraries/footer/src/lib/footer.component';
import { OverviewTextComponent } from '../../../../libraries/overview-text/src/lib/overview-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CascadeWindowsButtonComponent,
    FooterComponent,
    NavBarComponent,
    OpenWindowButtonComponent,
    OverviewTextComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonsModule,
    WindowModule
  ],
  providers: [WindowRefTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
