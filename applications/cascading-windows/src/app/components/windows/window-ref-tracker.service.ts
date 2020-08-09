import { Injectable } from '@angular/core';
import { WindowRef } from '@progress/kendo-angular-dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { WindowOffsetSetting } from '@progress/kendo-angular-dialog/dist/es2015/window/window-settings';

@Injectable()
export class WindowRefTrackerService {

  private readonly LEFT: WindowOffsetSetting = 'left';
  private readonly LEFT_START: number = 50;
  private readonly LEFT_INCREMENT: number = 50;
  private readonly TOP: WindowOffsetSetting = 'top';
  private readonly TOP_START: number = 200;
  private readonly TOP_INCREMENT: number = 50;

  private windowRefCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private windowRefList: Array<WindowRef> = [];

  constructor() {}

  /**
   * get count behavior subject - used to set up subsriptions to know when refs open/close
   */
  public getWindowRefCount(): BehaviorSubject<number> {
    return this.windowRefCount;
  }

  /**
   * get the current count of the window ref list and update the current count Behavior Subject
   */
  private updateWindowRefCount(): void {
    const count: number = (this.windowRefList) ? this.windowRefList.length : 0;
    this.windowRefCount.next(count);
  }

  /**
   * adds a window ref to list and update Subject count - should be called after window ref is open()
   * @param windowRef ref to be added to list
   */
  public addWindowRef(windowRef: WindowRef): void {
    if (this.windowRefList) {
      this.windowRefList.push(windowRef);
      this.updateWindowRefCount();
    }
  }

  /**
   * removes a window ref from list and update current list count Subject - should be called after a window ref is closed() and nulled
   * @param windowRef ref to be removed from list
   */
  public clearEmptyWindowRefs(windowRef: WindowRef): void {
    if (this.windowRefList) {
      const index: number = this.windowRefList.indexOf(windowRef);
      if (index > -1) {
        this.windowRefList.splice(index, 1);
        this.updateWindowRefCount();
      }
    }
  }

  /**
   * go through list of window refs and re-positions each according to order in list; will sort list by z-index before casacading
   */
  public cascadeWindowRefs(): void {
    let windowRef: WindowRef = null;
    const length: number = (this.windowRefList) ? this.windowRefList.length : 0;
    this.orderWindowRefByZIndex();
    for (let idx: number = 0; idx < length; idx++) {
      windowRef = this.windowRefList[idx];
      if (windowRef) {
        const left: number = (this.LEFT_START) + (this.LEFT_INCREMENT * idx);
        const top: number = (this.TOP_START) + (this.TOP_INCREMENT * idx);
        windowRef.window.instance.setOffset(this.TOP, top);
        windowRef.window.instance.setOffset(this.LEFT, left);
      }
    }
  }

  /**
   * sort window ref list by z-index value of window. lower z-index values put at the beginning of the list
   */
  private orderWindowRefByZIndex(): void {
    if (this.windowRefList) {
      this.windowRefList.sort((refOne: WindowRef, refTwo: WindowRef): number => {
        const zIndexOne: number = this.getRefZIndex(refOne);
        const zIndexTwo: number = this.getRefZIndex(refTwo);
        let value: number = 0;
        if (zIndexOne !== zIndexTwo) {
          value = (zIndexOne > zIndexTwo) ? 1 : -1;
        }
        return value;
      });
    }
  }

  /**
   * get window reference current z-index value
   * @param windowRef window ref to extract z-index value
   */
  private getRefZIndex(windowRef: WindowRef): number {
    let value: number = -1;
    const style: string = 'style';
    const zIndex: string = 'z-index';
    if (windowRef && windowRef.window && windowRef.window.location) {
      const { nativeElement } = windowRef.window.location;
      if (nativeElement && nativeElement[style] && nativeElement[style][zIndex]) {
        value = nativeElement[style][zIndex];
      }
    }
    return value;
  }
}
