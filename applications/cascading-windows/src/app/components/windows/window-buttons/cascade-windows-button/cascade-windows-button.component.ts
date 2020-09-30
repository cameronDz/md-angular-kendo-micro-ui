import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowRefTrackerService } from '../../window-ref-tracker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nssd-cascade-windows-button',
  templateUrl: './cascade-windows-button.component.html'
})
export class CascadeWindowsButtonComponent implements OnDestroy, OnInit {

  private windowRefCountSubscription: Subscription = null;
  public isEnabled: boolean = false;

  constructor(private windowRefTrackerService: WindowRefTrackerService) {}

  ngOnInit(): void {
    this.subscribeToWindowRefCount();
  }

  ngOnDestroy(): void {
    this.unsubscribeFromWindowRefCount();
  }

  public handleButtonClick(): void {
    this.windowRefTrackerService.cascadeWindowRefs();
  }

  private subscribeToWindowRefCount(): void {
    this.windowRefCountSubscription = this.windowRefTrackerService.getWindowRefCount().pipe().subscribe(
      (count: number) => this.succesfulWindowRefCountCallback(count),
      (error: any): void => this.errorWindowRefCountCallback(error));
  }

  private succesfulWindowRefCountCallback(count: number): void {
    this.isEnabled = (count && count > 0);
  }

  private errorWindowRefCountCallback(error: any): void {
    alert('this was a window ref error');
    console.log('window ref error: ', error);
  }

  private unsubscribeFromWindowRefCount(): void {
    if (this.windowRefCountSubscription) {
      this.windowRefCountSubscription.unsubscribe();
    }
  }
}
