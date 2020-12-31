import { Component, OnInit } from '@angular/core';

import { AnalyticDataModel } from '../../models/analytic-data.model';
import { AnalyticService } from '../../services/analytic.service';
import { EventModel } from '../../models/event.model';
import { EventType } from '../../models/event.enum';

@Component({
    selector: 'nssd-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

    public messagePlaceholder: string = 'Enter message here..';
    public messageValue: string = '';

    public numberMax: number = 1000;
    public numberMin: number = 0;
    public numberPlaceholder: string = 'Enter number value here..';
    public numberValue: number;

    public isFormDirty: boolean = false;
    public isReadOnly: boolean = false;

    constructor(private analyticService: AnalyticService) {}

    ngOnInit(): void {
        this.logFormOpenAnalytic();
    }

    public handleValueChange(changeEvent: EventModel, fieldName: string): void {
        if (fieldName === 'message') {
            this.messageValue = !!changeEvent ? changeEvent.event : '';
        } else if (fieldName === 'number') {
            this.numberValue = !!changeEvent ? changeEvent.event : null;
        }
        this.setIsFormDirty();
    }

    public clickedButtonClear(): void {
        this.isReadOnly = false;
        this.messageValue = '';
        this.numberValue = null;
        this.setIsFormDirty();
    }

    public clickedButtonSubmit(): void {
        this.isReadOnly = true;
    }

    private logFormOpenAnalytic(): void {
        this.analyticService.logEvent(new AnalyticDataModel('N/A', new Date(), EventType.FORM_INITIALIZE));
    }

    private setIsFormDirty(): void {
        this.isFormDirty = (!!this.messageValue || (!!this.numberValue || this.numberValue === 0) || (this.isReadOnly));
    }
}
