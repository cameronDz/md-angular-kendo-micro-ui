import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

enum InputProperty {
    COUNT = 'count',
    TITLE = 'title'
}

@Component({
    selector: 'md-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnChanges, OnInit {

    public readonly NO_CLICK_CLASS: string = 'no-click';

    @Input() height: number = 400;
    @Input() isOpen: boolean = false;
    @Input() minHeight: number = 200;
    @Input() minWidth: number = 200;
    @Input() title: string = 'Parent Window';
    @Input() width: number = 600;
    @Input() windowCount: number = 0;

    @Output() handleWindowClose: EventEmitter<void> = new EventEmitter<void>();

    public displayTitle: string = '';
    public isChildOpen: boolean = false;

    constructor() {}

    ngOnInit(): void {
        this.setDisplayTitle();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && (changes[InputProperty.TITLE] || changes[InputProperty.COUNT])) {
            this.setDisplayTitle();
        }
    }

    public closeWindow(): void {
        if (this.handleWindowClose) {
            this.handleWindowClose.emit();
        }
    }

    public openChildWindow(): void {
        this.isChildOpen = true;
    }

    public closeChildWindow(): void {
        this.isChildOpen = false;
    }

    private setDisplayTitle(): void {
        const countDisplay = !!this.windowCount ? ' ' + this.windowCount : '';
        this.displayTitle = this.title + countDisplay;
    }
}
