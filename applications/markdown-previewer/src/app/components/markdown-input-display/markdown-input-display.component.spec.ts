import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownInputDisplayComponent } from './markdown-input-display.component';

xdescribe('MarkdownInputDisplayComponent', () => {
    let component: MarkdownInputDisplayComponent;
    let fixture: ComponentFixture<MarkdownInputDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ MarkdownInputDisplayComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MarkdownInputDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
