import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-custom-form',
  template: '',
})
export abstract class CustomFormComponent<T> implements OnInit {

  @Input() model: T;
  @Input() buttonName: string;
  @Input() disable: string[];
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    /* those keys are strict literals and hard-coded in the .html file */
    this.form = this.formBuilder.group(this.model);
    if (this.disable) {
      for (let d of this.disable)
      {
        console.log(d);
        this.form.controls[d].disable();
      }
    }
  }

  abstract onSubmit(): void;


}