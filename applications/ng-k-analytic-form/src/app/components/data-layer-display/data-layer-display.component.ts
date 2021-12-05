import { Component, OnInit } from '@angular/core';
import { AnalyticDataLayer } from '../../models/analytic-data.model';
import { AnalyticService } from '../../services/analytic.service';

@Component({
    selector: 'nssd-data-layer-display',
    templateUrl: './data-layer-display.component.html',
    styleUrls: ['./data-layer-display.component.scss']
})
export class DataLayerDisplayComponent implements OnInit {

    public dataLayerJson: AnalyticDataLayer = null;

    constructor(private analyticSerivce: AnalyticService) {}

    ngOnInit(): void {}

    public handleClickedButtonClearDataLayerView(): void {
        this.dataLayerJson = null;
    }

    public handleClickedButtonUpdateDataLayerView(): void {
        this.dataLayerJson = this.analyticSerivce.getDataLayer();
    }
}
