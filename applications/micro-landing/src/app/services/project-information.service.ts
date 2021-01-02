import { Injectable } from '@angular/core';
import { ApplicationDetailModel } from '../models/application-detail.model';

import * as _applicationList from '../../assets/applicationListData.json';
import * as _package from '../../../package.json';

@Injectable({ providedIn: 'root' })
export class ProjectInformationService {

    constructor() {}

    public getApplicationList(): Array<ApplicationDetailModel> {
        return _applicationList.payload;
    }

    public getCurrectProjectRepositoryUrl(): string {
        const directory: string = ((!!_package) && (!!_package.repository)) ? _package.repository.directory : '';
        return this.getProjectRepositoryUrl(directory, false);
    }

    public getProjectRepositoryUrl(directory: string = '', addApplcationPath: boolean = true): string {
        let url: string = '';
        if ((!!_package) && (!!_package.repository) && (!!_package.repository.url)) {
            const appPath: string = addApplcationPath ? 'applications/' : '';
            const dirPath: string = !!directory ? directory : '';
            url = _package.repository.url + '/tree/master/' + appPath + dirPath;
        }
        return url;
    }
}
