import { Activity } from "./../../activity";
import { Component, OnInit, Input, Output } from "@angular/core";
import { Utils } from '../../../../utils/utils.module';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: "ngx-account-types-form",
  templateUrl: "./account-types-form.component.html",
  styleUrls: ["./account-types-form.component.scss"],
})
export class AccountTypesFormComponent implements OnInit {
  public readonly activityTypes = Utils.keys(Activity.ActivityTypes);
  public readonly statuses = Utils.keys(Activity.Statuses);

  @Input() model = {
    _id: "A",
    name: "semih",
    type: Activity.Type.OUTGO,
    status: Activity.Status.ACTIVE,
  };
  @Input() buttonName: string;

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    /* those keys are strict literals and hard-coded in the .html file */
    this.form = this.formBuilder.group(this.model);
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
