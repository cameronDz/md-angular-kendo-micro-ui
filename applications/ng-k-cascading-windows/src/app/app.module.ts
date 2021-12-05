import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AppComponent } from './app.component';
import { CascadeWindowsButtonComponent } from './components/windows/window-buttons/cascade-windows-button/cascade-windows-button.component';
import { OpenWindowButtonComponent } from './components/windows/window-buttons/open-window-button/open-window-button.component';
import { WindowRefTrackerService } from './components/windows/window-ref-tracker.service';

@NgModule({
  declarations: [
    AppComponent,
    CascadeWindowsButtonComponent,
    FooterComponent,
    HeaderComponent,
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
