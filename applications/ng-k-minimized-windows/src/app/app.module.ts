import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AppComponent } from './app.component';
import { ButtonWindowGenerateComponent } from './button-window-generate/button-window-generate.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ButtonWindowGenerateComponent,
        FooterComponent,
        HeaderComponent,
        OverviewTextComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ButtonsModule,
        WindowModule
    ],
    providers: []
})
export class AppModule {}
