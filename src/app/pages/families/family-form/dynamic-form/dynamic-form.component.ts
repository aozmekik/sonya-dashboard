import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() name: string;
  @Input() count: string;
  @Input() list: string;
  @Input() form: FormGroup;
  @Input() template: TemplateRef<any>;




  constructor() { }

  ngOnInit(): void {
    console.log(this.count);
    console.log(this.list);
    console.log(this.form);
    console.log(this.template);
  }


  addForm() {
    this.form.controls[this.count].setValue(this.form.get(this.count).value + 1);
  }

  removeForm(idx: number) {
    this.form.controls[this.count].setValue(this.form.get(this.count).value - 1);
    (this.form.get(this.list) as FormArray).removeAt(idx);
  }

  get getCount() {
    return this.form.get(this.count);
  }

  get getList() {
    return this.form.get(this.list) as FormArray;
  }

}
