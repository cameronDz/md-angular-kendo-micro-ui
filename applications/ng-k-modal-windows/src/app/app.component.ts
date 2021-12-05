import { Component, OnInit } from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';
import * as _package from '../../package.json';

@Component({
    selector: 'nssd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    public footerHref: string = '';
    public opened = false;

    public overviewPoints: Array<string> = [];
    public overviewSubtitle: string = '';
    public overviewTitle: string = '';

    constructor(private overviewTextService: OverviewTextService) {}

    ngOnInit(): void {
        this.overviewPoints = this.overviewTextService.getOverviewPoints();
        this.overviewSubtitle = this.overviewTextService.getOverviewSubtitle();
        this.overviewTitle = this.overviewTextService.getOverviewTitle();
        this.setFooterHref();
    }

    public close() {
        this.opened = false;
    }

    public open() {
        this.opened = true;
    }

    private setFooterHref(): void {
      if (!!_package && !!_package.repository) {
        const treeRoute: string = '/tree/master';
        const url: string = !!_package.repository.url ? _package.repository.url + treeRoute : '';
        const directory: string = !!_package.repository.directory ? _package.repository.directory : '';
        this.footerHref = url + directory;
      }
    }
}
