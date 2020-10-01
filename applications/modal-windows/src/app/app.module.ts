import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

// import { FooterComponent } from '../../../../libraries/projects/footer/src/lib/footer.component';
// import { HeaderComponent } from '../../../../libraries/projects/header/src/lib/header.component';
// import { OverviewTextComponent } from '../../../../libraries/projects/overview-text/src/lib/overview-text.component';

@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
    // HeaderComponent,
    ModalWindowComponent,
    // OverviewTextComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonsModule,
    WindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
