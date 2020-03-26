import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity';

/**
 * form component, for adding an accounting record.
 * I must state, .html code is a spaghetti code.
 * therefore, I will remember myself to refactor it often again.
 * if you plan to refactor go ahead.
 * I've used Template Driven Form (TDF), but I like the
 * Reactive Model Driven form better.
 */

@Component({
  selector: 'ngx-reports',
  templateUrl: './activity-adding.component.html',
  styleUrls: ['./activity-adding.component.scss'],
})
export class ActivityAddingComponent implements OnInit {
  public activityTypes = Activity.table2array(Activity.ActivityTypes);
  public activityAbouts = Activity.table2array(Activity.ActivityAbouts);
  public activityBankSafes = Activity.table2array(Activity.ActivityBankSafes);
  public currentCampaign = 'campaign';

  public activityModel = Activity.default();
  constructor() {}

  ngOnInit() {
  }
}
