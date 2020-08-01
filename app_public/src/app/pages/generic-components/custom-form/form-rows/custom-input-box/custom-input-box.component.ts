import { Component, OnInit, Input, SimpleChanges, forwardRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-custom-input-box',
  templateUrl: './custom-input-box.component.html',
  styleUrls: ['./custom-input-box.component.scss'],
  providers: [ /* to be able to use this component with outer form groups */
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputBoxComponent),
      multi: true
    }
  ]
})
export class CustomInputBoxComponent implements OnInit, ControlValueAccessor {

  @Input() rowName: string;
  @Input() alpha: boolean = true;
  @Input() numeric: boolean = true;

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;

  public regexPattern: string;

  private readonly regexAlphaNumeric: string = "^[A-Za-z0-9]+$";
  private readonly regexAlpha: string = "^[a-zA-Z öçşiğüÖÇŞİĞÜ]+$";
  // private readonly regexNumeric: string = "^[0-9]+$";
  @Input() minLength: number = 1;
  @Input() maxLength: number = 64;


  constructor(private cd: ChangeDetectorRef) { }

  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }

  ngOnInit() {
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formGroup.controls[this.formControlName].setValidators([Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)]);
    if (this.alpha && this.numeric)
      this.regexPattern = this.regexAlphaNumeric;
    else if (this.alpha)
      this.regexPattern = this.regexAlpha;
    else if (this.numeric) {
      const maxNumber = +"9".repeat(this.maxLength); /* <maxLength>-digits largest number */
      const minNumber = +("1" + "0".repeat(this.minLength - 1)); /* <maxLength>-digits smallest number */
      this.formGroup.controls[this.formControlName].setValidators([Validators.min(minNumber), Validators.max(maxNumber)]);
    }
    else
      this.regexPattern = "";

  }

  get getData(): any {
    return this.formGroup.get(this.formControlName);
  }


}
