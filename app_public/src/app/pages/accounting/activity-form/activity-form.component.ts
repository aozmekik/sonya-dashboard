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
  public activityTypes = Utils.table2array(Activity.ActivityTypes); // FIXME. try changing the order.
  public activityAbouts = Utils.table2array(Activity.ActivityAbouts);
  public activityBankSafes = Utils.table2array(Activity.ActivityBankSafes);

  public activityForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  @Input() activityModel: Activity = Activity.default();

  ngOnInit() {
    /* those keys are strict literals and hard-coded in the .html file */
    this.activityForm = this.formBuilder.group(
      this.activityModel
    );
  }
  public onSubmit(): void {
    console.log(this.activityForm.value);
  }

  public updateDate(event: string)
  {
    this.activityForm.controls['date'].setValue(event);
  }
}
