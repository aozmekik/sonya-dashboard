import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { Stash } from '../../inventory/stash';

@Component({
  selector: 'ngx-need-form',
  templateUrl: './need-form.component.html',
  styleUrls: ['./need-form.component.scss']
})
export class NeedFormComponent extends CustomFormComponent<Stash> implements OnInit {

  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(): void {
  }

}
