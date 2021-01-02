import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AppComponent } from './app.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationInformationComponent } from './components/application-information/application-information.component';

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ApplicationListComponent,
        ApplicationInformationComponent,
        FooterComponent,
        HeaderComponent,
        OverviewTextComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class AppModule {}
