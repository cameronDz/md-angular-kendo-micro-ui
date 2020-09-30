import { Component, OnInit } from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';
import * as _package from '../../package.json';

@Component({
    selector: 'mdak-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    public footerHref: string = _package.repository.url + '/tree/master' + _package.repository.directory;
    public opened = false;

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
