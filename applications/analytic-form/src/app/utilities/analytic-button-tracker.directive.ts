import { Directive, HostListener } from '@angular/core';

import { AnalyticDataModel } from '../models/analytic-data.model';
import { AnalyticService } from '../services/analytic.service';
import { EventModel } from '../models/event.model';
import { EventType } from '../models/event.enum';

@Directive({ selector: '[nssdAnalyticButtonTracker]' })
export class AnalyticButtonTrackerDirective {

    constructor(private analyticService: AnalyticService) {}

    @HostListener('buttonClick', ['$event'])
    public handleClick(event: EventModel): void {
        if (event instanceof EventModel) {
            const id: string = !!event ? event.id : '';
            this.analyticService.logEvent(new AnalyticDataModel(id, new Date(), EventType.BUTTON_CLICK ));
        }
    }
}
