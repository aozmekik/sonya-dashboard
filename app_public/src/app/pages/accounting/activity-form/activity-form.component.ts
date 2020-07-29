import { Component, OnInit, Input } from "@angular/core";
import { Activity } from "../activity";
import { Utils } from '../../../utils/utils.module';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: "ngx-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  public activityTypes = Utils.keys(Activity.ActivityTypes); // FIXME. try changing the order.
  public activityAbouts = Utils.keys(Activity.ActivityAbouts);
  public activityBankSafes = Utils.keys(Activity.ActivityBankSafes);

  @Input() model: Activity = Activity.default();
  public form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    /* those keys are strict literals and hard-coded in the .html file */
    this.form = this.formBuilder.group(this.model);
  }
  public onSubmit(): void {
    console.log(this.form.value);
  }

  public updateDate(event: string)
  {
    this.form.controls['date'].setValue(event);
  }
}
