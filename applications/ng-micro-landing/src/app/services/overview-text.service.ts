import { Injectable } from '@angular/core';
import * as _data from '../../assets/overviewData.json';

@Injectable({ providedIn: 'root' })
export class OverviewTextService {

    constructor() {}

    public getOverviewPoints(): Array<string> {
        return _data.payload.points;
    }

    public getOverviewSubtitle(): string {
        return _data.payload.subtitle;
    }

    public getOverviewTitle(): string {
        return _data.payload.title;
    }
}
