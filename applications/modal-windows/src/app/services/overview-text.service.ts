import { Injectable } from '@angular/core';
import * as overviewPayload from '../../assets/overviewPayload.json';

@Injectable({ providedIn: 'root' })
export class OverviewTextService {

    private currentText: { points: Array<string>, subtitle: string, title: string } = overviewPayload.payload.staticWindow;

    constructor() {}

    public getOverviewTitle(): string {
        return this.currentText.title;
    }

    public getOverviewSubtitle(): string {
        return this.currentText.subtitle;
    }

    public getOverviewPoints(): Array<string> {
        return this.currentText.points;
    }
}
