import { Injectable } from '@angular/core';
import { OverviewTextType } from './overview-text-type.model';
import * as overviewPayload from '../../assets/overviewPayload.json';

@Injectable({ providedIn: 'root' })
export class OverviewTextService {

    private currentText: { points: Array<string>, subtitle: string, title: string } = overviewPayload.payload.staticWindow;

    constructor() {}

    public getOverviewTitle(type: OverviewTextType = OverviewTextType.NONE): string {
        return this.currentText.title;
    }

    public getOverviewSubtitle(type: OverviewTextType = OverviewTextType.NONE): string {
        return this.currentText.subtitle;
    }

    public getOverviewPoints(type: OverviewTextType = OverviewTextType.NONE): Array<string> {
        return this.currentText.points;
    }
}
