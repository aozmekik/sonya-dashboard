import { Component, OnInit, Input } from "@angular/core";
import { Activity } from "../activity";
import { Utils } from '../../../utils/utils.module';

/**
 * form component, for adding an accounting record.
 * I must state, .html code is a spaghetti code.
 * therefore, I will remember myself to refactor it often again.
 * if you plan to refactor go ahead.
 * I've used Template Driven Form (TDF), but I like the
 * Reactive Model Driven form better.
 */

@Component({
  selector: "ngx-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  public activityTypes = Utils.table2array(Activity.ActivityTypes); // FIXME. try changing the order.
  public activityAbouts = Utils.table2array(Activity.ActivityAbouts);
  public activityBankSafes = Utils.table2array(Activity.ActivityBankSafes);
  public currentCampaign = "campaign";

  @Input() activityModel = Activity.default();
  constructor() {}

  ngOnInit() {}
}
