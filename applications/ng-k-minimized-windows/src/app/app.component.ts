import { Component } from '@angular/core';
import { OverviewTextService } from './overview-text-service/overview-text.service';
import * as _package from '../../package.json';

@Component({
    selector: 'nssd-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public footerHref: string = '';

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

    private setFooterHref(): void {
      if (!!_package && !!_package.repository) {
        const url: string = !!_package.repository.url ? _package.repository.url : '';
        const directory: string = !!_package.repository.directory ? '/tree/master/' + _package.repository.directory : '';
        this.footerHref = url + directory;
      }
    }
}
