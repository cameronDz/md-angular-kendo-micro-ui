import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbericBoxComponent } from './numberic-box.component';

xdescribe('NumbericBoxComponent', () => {
    let component: NumbericBoxComponent;
    let fixture: ComponentFixture<NumbericBoxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ NumbericBoxComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NumbericBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
