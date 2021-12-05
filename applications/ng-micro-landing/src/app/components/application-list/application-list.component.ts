import { Component, OnInit } from '@angular/core';

import { ApplicationDetailModel } from '../../models/application-detail.model';
import { ProjectInformationService } from '../../services/project-information.service';

@Component({
    selector: 'nssd-application-list',
    templateUrl: './application-list.component.html',
    styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

    public applicationList: Array<ApplicationDetailModel> = [];

    constructor(private projectInformationService: ProjectInformationService) {}

    ngOnInit(): void {
        this.applicationList = this.projectInformationService.getApplicationList();
    }

}
