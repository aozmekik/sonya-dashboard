import { Component, OnInit, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * CustomDatePicker component is among the custom form-input components family.
 * As one can notice, components of this family implements the ControlValueAccessor interface
 * which makes them an element of a form control which is a part of ReactiveForms Angular
 * template for to handle form validation, in generic way. 
 * 
 * This violets this form (in a way), because of one specific (and stupid) reason: There is another bug, (or 
 * I am not sure if it's a bug.) which is, date picker component in angular gives the desired day,
 * by off-by-one. I've read that it's about the time-offset stuff, or idk; and I've heard lots of complains
 * about it online. Some approaches exist, with the use of host time & local time adapter etc;
 * but their approaches doesn't apply on this specific nb-date-picker component I use.
 * 
 * Rather instead, I've find a pretty straight forward work-around to get the desired date (not off-by-one), which
 * caused me to violate above mentioned form. If I use the generic form here (which is the desired), there is a direct
 * binding happening to form control key, which prevents me to handle & fix off-by-one error. This small details,
 * don't effect the end-user whatsoever. It's just preventing my generic approach, breaking my coding pattern; which
 * is making it ugly.
 */

@Component({
  selector: 'ngx-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomDatePickerComponent),
    }
  ]

})
export class CustomDatePickerComponent implements OnInit, ControlValueAccessor {
  @Input() rowName: string;

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() maxToday: boolean = true;

  public _date: Date;
  public today: Date;
  public disabled: boolean = false;

  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
    this._date = new Date(this.formGroup.get(this.formControlName).value);
    if (this.formGroup.controls[this.formControlName].disabled)
      this.disabled = true;
  }

  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }


  get getData(): any {
    return this.formGroup.get(this.formControlName);
  }

  changeDate(event: Date) {
    this.formGroup.controls[this.formControlName].setValue(event.toLocaleString());
  }

}
