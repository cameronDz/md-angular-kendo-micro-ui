import { Component } from '@angular/core';
import { OverviewTextService } from './services/overview-text.service';
import { ProjectInformationService } from './services/project-information.service';

@Component({
    selector: 'nssd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public footerHref: string = '';
    public overviewPoints: Array<string> = [];
    public overviewSubtitle: string = '';
    public overviewTitle: string = '';

    constructor(private overviewTextService: OverviewTextService, private projectInformationService: ProjectInformationService) {
        this.footerHref = this.projectInformationService.getCurrectProjectRepositoryUrl();
        this.overviewPoints = this.overviewTextService.getOverviewPoints();
        this.overviewSubtitle = this.overviewTextService.getOverviewSubtitle();
        this.overviewTitle = this.overviewTextService.getOverviewTitle();
    }
}
