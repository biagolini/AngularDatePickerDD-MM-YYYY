import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

/** @title Datepicker with custom date classes */
@Component({
  selector: 'datepicker-date-class-example',
  templateUrl: 'datepicker-date-class-example.html',
  styleUrls: ['datepicker-date-class-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerDateClassExample {
  selectedDate = new FormControl();
}
