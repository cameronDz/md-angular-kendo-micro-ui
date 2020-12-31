import { Injectable } from '@angular/core';
import { AnalyticDataLayer, AnalyticDataModel } from '../models/analytic-data.model';

@Injectable({ providedIn: 'root' })
export class AnalyticService {

    public static readonly dataLayerName: string = 'nssdDataLayer';

    constructor() {}

    public logEvent(data: AnalyticDataModel): void {
        if (!!window) {
            this.initializeDataLayer();
            window[AnalyticService.dataLayerName].events.push(data);
        }
    }

    public getDataLayer(): AnalyticDataLayer {
        return !!window ? AnalyticDataLayer.clone(window[AnalyticService.dataLayerName]) : null;
    }

    private initializeDataLayer(): void {
        if ((!!window) && (!window[AnalyticService.dataLayerName])) {
            window[AnalyticService.dataLayerName] = new AnalyticDataLayer();
        }
    }
}
