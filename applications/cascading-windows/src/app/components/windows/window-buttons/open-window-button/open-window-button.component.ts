import { Component, OnInit } from '@angular/core';
import { WindowCloseResult, WindowRef, WindowService, WindowSettings } from '@progress/kendo-angular-dialog';
import { WindowRefTrackerService } from '../../window-ref-tracker.service';

@Component({
  selector: 'mdak-open-window-button',
  templateUrl: './open-window-button.component.html'
})
export class OpenWindowButtonComponent implements OnInit {

  private buttonCreationCount: number = 0;

  constructor(private windowRefTrackerService: WindowRefTrackerService, private windowService: WindowService) {}

  ngOnInit(): void {}

  public handleButtonClick(): void {
    this.buttonCreationCount++;
    const settings: WindowSettings = this.getWindowSettings();
    const windowRef: WindowRef = this.windowService.open(settings);
    this.windowRefTrackerService.addWindowRef(windowRef);
    this.subscribeToCloseWindowRef(windowRef);
  }

  private closeCallback(self: OpenWindowButtonComponent, windowRef: WindowRef, result: WindowCloseResult): void {
    if (result instanceof WindowCloseResult) {
      console.log('Window was closed!');
    }
    self.closeWindow(windowRef);
  }

  private closeWindow(windowRef: WindowRef): void {
    if (windowRef) {
      this.windowRefTrackerService.clearEmptyWindowRefs(windowRef);
      windowRef.close();
      windowRef = null;
    }
  }

  private getWindowSettings(): WindowSettings {
    const content: string = 'My Content!';
    const height: number = 200;
    const title: string = 'My Window ' + this.buttonCreationCount;
    const width: number = 450;
    return { content, height, title, width };
  }

  private subscribeToCloseWindowRef(windowRef: WindowRef): void {
    if (windowRef) {
      windowRef.result.subscribe((result: WindowCloseResult) => {
        this.closeCallback(this, windowRef, result);
      });
    }
  }
}
