import { Component } from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';
import * as _package from '../../package.json';

@Component({
    selector: 'nssd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public footerHref: string = _package.repository.url + '/tree/master/' + _package.repository.directory;
    public overviewPoints: Array<string> = [];
    public overviewSubtitle: string = '';
    public overviewTitle: string = '';

    constructor(overviewTextService: OverviewTextService) {
        this.overviewPoints = overviewTextService.getOverviewPoints();
        this.overviewSubtitle = overviewTextService.getOverviewSubtitle();
        this.overviewTitle = overviewTextService.getOverviewTitle();
    }

}
