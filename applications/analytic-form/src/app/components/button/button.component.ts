import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventModel } from '../../models/event.model';

@Component({
    selector: 'nssd-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() id: string = '';
    @Input() isDisabled: boolean = true;
    @Input() isPrimary: boolean = false;
    @Input() label: string = '';

    @Output() buttonClick: EventEmitter<EventModel> = new EventEmitter<EventModel>();

    constructor() {}

    ngOnInit(): void {}

    public handleClick(event: MouseEvent): void {
        this.buttonClick.emit(new EventModel(event, this.id));
    }
}
