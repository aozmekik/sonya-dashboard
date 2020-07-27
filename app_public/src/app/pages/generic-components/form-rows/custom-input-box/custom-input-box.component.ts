import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

/* there is a bug related to this use of my mine stated here:
 * https://github.com/angular/angular/issues/23657
 * So this error will raise in any use of this generic component:
 * ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. 
 * The problem is that it shouldn't give an error while debugging. This error won't effect
 * the end user. Only it is, bothering me. I might do some work-around to suppress this,  
 * but it's highly changing my implementation.
 * 
 * It can be solved by using setTimeout() workaround. But I'll pass that for the timebeing.
 */

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
  private readonly regexNumeric: string = "^[0-9]+$";


  constructor() { }

  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.alpha && this.numeric)
      this.regexPattern = this.regexAlphaNumeric;
    else if (this.alpha)
      this.regexPattern = this.regexAlpha;
    else if (this.numeric)
      this.regexPattern = this.regexNumeric;
    else
      this.regexPattern = "";
  }

  get getData(): any {
    return this.formGroup.get(this.formControlName);
  }


}
