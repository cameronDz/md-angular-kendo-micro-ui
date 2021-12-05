import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AppComponent } from './app.component';
import { MarkdownInputDisplayComponent } from './components/markdown-input-display/markdown-input-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MarkdownInputDisplayComponent,
    OverviewTextComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonsModule,
    InputsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    MarkdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
