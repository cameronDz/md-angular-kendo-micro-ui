import { Component, OnInit } from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';

@Component({
    selector: 'md-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public opened = false;

    public footerHref: string = 'https://github.com/cameronDz/md-angular-kendo-micro-ui/applications/modal-windows';

    public overviewPoints: Array<string> = [];
    public overviewSubtitle: string = '';
    public overviewTitle: string = '';

    constructor(private overviewTextService: OverviewTextService) {}

    ngOnInit(): void {
        this.overviewPoints = this.overviewTextService.getOverviewPoints();
        this.overviewSubtitle = this.overviewTextService.getOverviewSubtitle();
        this.overviewTitle = this.overviewTextService.getOverviewTitle();
    }

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }
}
