import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLayerDisplayComponent } from './data-layer-display.component';

xdescribe('DataLayerDisplayComponent', () => {
    let component: DataLayerDisplayComponent;
    let fixture: ComponentFixture<DataLayerDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ DataLayerDisplayComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DataLayerDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
