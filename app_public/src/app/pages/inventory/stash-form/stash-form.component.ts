import { FormBuilder } from '@angular/forms';
import { Component, OnInit} from "@angular/core";
import { Stash } from '../stash';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';

@Component({
  selector: "ngx-stash-form",
  templateUrl: "./stash-form.component.html",
  styleUrls: ["./stash-form.component.scss"],
})

export class StashFormComponent extends CustomFormComponent<Stash> implements OnInit {
  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
