import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NumericTextBoxModule, TextBoxModule } from '@progress/kendo-angular-inputs';

import { FooterComponent } from '@nssd/ng-footer';
import { HeaderComponent } from '@nssd/ng-header';
import { OverviewTextComponent } from '@nssd/ng-overview-text';

import { AnalyticButtonTrackerDirective } from './utilities/analytic-button-tracker.directive';
import { AnalyticInputTrackerDirective } from './utilities/analytic-input-tracker.directive';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NumbericBoxComponent } from './components/inputs/numberic-box/numberic-box.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { TextBoxComponent } from './components/inputs/text-box/text-box.component';
import { DataLayerDisplayComponent } from './components/data-layer-display/data-layer-display.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AnalyticButtonTrackerDirective,
        AnalyticInputTrackerDirective,
        AppComponent,
        ButtonComponent,
        FooterComponent,
        HeaderComponent,
        NumbericBoxComponent,
        OverviewTextComponent,
        SimpleFormComponent,
        TextBoxComponent,
        DataLayerDisplayComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        NumericTextBoxModule,
        TextBoxModule
    ]
})
export class AppModule {}
