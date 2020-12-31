import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventModel } from '../../../models/event.model';

@Component({
    selector: 'nssd-numberic-box',
    templateUrl: './numberic-box.component.html',
    styleUrls: ['./numberic-box.component.scss']
})
export class NumbericBoxComponent implements OnInit {

    @Input() public id: string = '';
    @Input() public isReadOnly: boolean = false;
    @Input() public label: string = '';
    @Input() public max: number;
    @Input() public min: number;
    @Input() public placeholder: string = '';
    @Input() public value: number;

    @Output() public inputBlur: EventEmitter<EventModel> = new EventEmitter<EventModel>();
    @Output() public inputFocus: EventEmitter<EventModel> = new EventEmitter<EventModel>();
    @Output() public valueChange: EventEmitter<EventModel> = new EventEmitter<EventModel>();

    constructor() {}

    ngOnInit(): void {}

    public handleBlur(): void {
        this.inputBlur.emit(new EventModel(null, this.id));
    }

    public handleFocus(): void {
        this.inputFocus.emit(new EventModel(null, this.id));
    }

    public handleValueChange(event: any): void {
        this.valueChange.emit(new EventModel(event, this.id));
    }
}
