import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nssd-markdown-input-display',
    templateUrl: './markdown-input-display.component.html',
    styleUrls: ['./markdown-input-display.component.scss']
})
export class MarkdownInputDisplayComponent implements OnInit {

    public inputData: string = '';
    public markdownData: string = '';

    constructor() {}

    ngOnInit(): void {}

    public handleChangeInputArea(event: Event): void {
        const value: string = !!event && !!event.target && !!event.target['value'] ? event.target['value'] : '';
        this.inputData = value;
    }

    public handleButtonClearClick(): void {
        this.markdownData = '';
    }

    public handleButtonPreviewClick(): void {
        this.markdownData = this.inputData;
    }
}
