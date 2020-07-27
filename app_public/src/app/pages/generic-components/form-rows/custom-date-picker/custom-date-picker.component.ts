import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/**
 * CustomDatePicker component is among the custom form-input components family.
 * As one can notice, components of this family implements the ControlValueAccessor interface
 * which makes them an element of a form control which is a part of ReactiveForms Angular
 * template for to handle form validation, in generic way. 
 * 
 * This violets this form, because of one specific (and stupid) reason: There is another bug, (or 
 * I am not sure if it's a bug.) which is, date picker component in angular gives the desired day,
 * by off-by-one. I've read that it's about the, time-offset stuff, or idk; and I've heard lots of complains
 * about it online. Some approaches exist, with the use of host time & local time adapter etc;
 * but their approaches doesn't apply on this specific nb-date-picker component I use.
 * 
 * Rather instead, I've find a pretty straight forward work-around to get the desired date (not off-by-one), which
 * caused me to violate above mentioned form. If I use the generic form here (which is the desired), there is a direct
 * binding happening to form control key, which prevents me to handle & fix off-by-one error. This small details,
 * doesn't effect the end-user whatsoever. It's just preventing my generic approach, breaking my coding pattern; which
 * is making it ugly.
 */

@Component({
  selector: 'ngx-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss']
})
export class CustomDatePickerComponent implements OnInit {
  public dateSelect: Date;
  @Output() dateSelectChange: EventEmitter<String> = new EventEmitter<String>();

  public today: Date;
  @Input() rowName: string;

  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
  }

  public onDateSelectChange(date: Date) {
    this.dateSelectChange.emit(date.toLocaleString());
  }

}
