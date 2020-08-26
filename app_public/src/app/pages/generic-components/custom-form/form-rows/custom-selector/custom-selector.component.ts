import { Component, OnInit, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.scss'],
  providers: [ /* to be able to use this component with outer form groups */
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectorComponent),
      multi: true
    }
  ]
})
export class CustomSelectorComponent implements OnInit, ControlValueAccessor {
  @Input() rowName: string;
  @Input() selectingList: string[];

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() sideBySide: boolean = false;


  constructor() { }
  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }

  ngOnInit() {
  }


}
