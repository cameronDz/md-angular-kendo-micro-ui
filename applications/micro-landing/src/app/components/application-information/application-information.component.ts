import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectInformationService } from '../../services/project-information.service';

@Component({
    selector: 'nssd-application-information',
    templateUrl: './application-information.component.html',
    styleUrls: ['./application-information.component.scss']
})
export class ApplicationInformationComponent implements OnChanges, OnInit {

    @Input() description: string = '';
    @Input() name: string = '';
    @Input() subdirectory: string = '';

    public applicationUrl: string = '';
    public codeRepositoryUrl: string = '';

    constructor(private projectInformationService: ProjectInformationService) {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (!!changes) {
            this.applicationUrl = '/' + this.subdirectory;
            this.codeRepositoryUrl = this.projectInformationService.getProjectRepositoryUrl(this.subdirectory);
        }
    }

}
