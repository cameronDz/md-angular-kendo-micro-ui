import { Component, OnInit } from '@angular/core';
import { WindowCloseResult, WindowRef, WindowService, WindowSettings, WindowState } from '@progress/kendo-angular-dialog';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nssd-button-window-generate',
    templateUrl: './button-window-generate.component.html'
})
export class ButtonWindowGenerateComponent implements OnInit {

    constructor(private windowService: WindowService) {}

    ngOnInit(): void {}

    public handleButtonClick(): void {
        const settings: WindowSettings = this.getWindowSettings();
        const windowRef: WindowRef = this.windowService.open(settings);
        const stateSubscription: Subscription = this.subscribeToStateChangeWindowRef(windowRef);
        let closeSubscription: Subscription = null;
        closeSubscription = this.subscribeToCloseWindowRef(windowRef, [stateSubscription, closeSubscription]);
    }

    private getWindowSettings(): WindowSettings {
        const content: string = 'My Content!';
        const height: number = 200;
        const title: string = 'My Window';
        const width: number = 450;
        return { content, height, title, width };
    }

    private subscribeToStateChangeWindowRef(windowRef: WindowRef): Subscription {
        let subscription: Subscription = null;
        if (!!windowRef) {
            subscription = windowRef.window.instance.stateChange.subscribe((state: WindowState): void => {
                const minClass: string = 'nssd-minimized-window';
                const minTitle: string = ' MINIMIZED';
                if (state === 'minimized') {
                    windowRef.window.instance.setOffset('top', 80)
                    windowRef.window.instance.setOffset('left', 50)
                    windowRef.window.instance.setDimension('width', 300);
                    windowRef.window.instance.title = windowRef.window.instance.title + minTitle;
                    windowRef.window.location.nativeElement.className = windowRef.window.location.nativeElement.className + ' ' + minClass;
                } else {
                    let { title } = windowRef.window.instance;
                    if (title.endsWith(minTitle)) {
                        windowRef.window.instance.title = title.substring(0, title.length - minTitle.length);
                    }
                    windowRef.window.instance.setDimension('width', 450);
                    windowRef.window.location.nativeElement.className = windowRef.window.location.nativeElement.className.replace(minClass, ' ');
                }
            });
        }
        return subscription;
    }

    private subscribeToCloseWindowRef(windowRef: WindowRef, subscriptions: Array<Subscription>): Subscription {
        let subscription: Subscription = null;
        if (!!windowRef) {
            subscription = windowRef.result.subscribe((result: WindowCloseResult) => {
                this.closeCallback(this, windowRef, result, subscriptions);
            });
        }
        return subscription;
    }

    private closeCallback(
            self: ButtonWindowGenerateComponent,
            windowRef: WindowRef,
            result: WindowCloseResult,
            subscriptions: Array<Subscription>): void {
        if (result instanceof WindowCloseResult) {
            console.log('Window was closed!');
        }
        self.closeWindow(windowRef);
        const lenght: number = Array.isArray(subscriptions) ? subscriptions.length : 0;
        for (let inc: number = 0; inc < lenght; inc++) {
            if (!!subscriptions[inc]) {
                subscriptions[inc].unsubscribe();
            }
        }
    }

    private closeWindow(windowRef: WindowRef): void {
        if (windowRef) {
            windowRef.close();
            windowRef = null;
        }
    }
}
