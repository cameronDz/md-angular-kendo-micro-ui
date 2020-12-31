import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventModel } from '../../../models/event.model';

@Component({
    selector: 'nssd-text-box',
    templateUrl: './text-box.component.html',
    styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

    @Input() public hasClearButton: boolean = false;
    @Input() public id: string = '';
    @Input() public isReadOnly: boolean = false;
    @Input() public label: string = '';
    @Input() public placeholder: string = '';
    @Input() public value: string = '';

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
