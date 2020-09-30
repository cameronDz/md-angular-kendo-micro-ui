import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mdak-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() date: Date;

  @Output() onValueChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {}

  ngOnInit(): void {}

  public handleValueChange(event: Date): void {
    if (this.onValueChange) {
      this.onValueChange.emit(event);
    }
  }
}
