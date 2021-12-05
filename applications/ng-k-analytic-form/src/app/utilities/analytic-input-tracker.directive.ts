import { Directive, HostListener } from '@angular/core';

import { AnalyticDataModel } from '../models/analytic-data.model';
import { AnalyticService } from '../services/analytic.service';
import { EventModel } from '../models/event.model';
import { EventType } from '../models/event.enum';

@Directive({ selector: '[nssdAnalyticInputTracker]' })
export class AnalyticInputTrackerDirective {

    constructor(private analyticService: AnalyticService) {}

    @HostListener('inputBlur', ['$event'])
    public handleBlur(event: EventModel): void {
        this.logEventData(event, EventType.INPUT_BLUR);
    }

    @HostListener('inputFocus', ['$event'])
    public handleFocus(event: EventModel): void {
        this.logEventData(event, EventType.INPUT_FOCUS);
    }

    @HostListener('valueChange', ['$event'])
    public handleValueChange(event: EventModel): void {
        this.logEventData(event, EventType.INPUT_VALUE_CHANGE);
    }

    private logEventData(event: EventModel, type: EventType): void {
        if (event instanceof EventModel) {
            const id: string = !!event ? event.id : '';
            this.analyticService.logEvent(new AnalyticDataModel(id, new Date(), type));
        }
    }
}
