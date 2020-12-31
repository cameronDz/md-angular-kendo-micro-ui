import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OverviewTextService {

    constructor() {}

    public getOverviewPoints(): Array<string> {
        return [
            'Using directives and custom outputs that intercept blur, click, and focus events to track form actions.',
            'Sets a dataLayer object against the global window.',
            'Tracked Form is connected to analytics.',
            'DataLayer View allows you to view current dataLayer object.'
        ];
    }

    public getOverviewSubtitle(): string {
        return 'Custom DataLayer implementation in Kendo Inputs';
    }

    public getOverviewTitle(): string {
        return 'Form Analytics Tracker: ';
    }

}
