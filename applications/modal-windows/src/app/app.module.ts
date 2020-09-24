import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewTextComponent } from './overview-text/overview-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent,
    NavBarComponent,
    FooterComponent,
    OverviewTextComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      WindowModule,
      ButtonsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
