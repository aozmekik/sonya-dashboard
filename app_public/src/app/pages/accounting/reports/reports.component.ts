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
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public activityTypes = this.table2array(Activity.ActivityTypes);
  public activityAbouts = this.table2array(Activity.ActivityAbouts);
  public activityBankSafes = this.table2array(Activity.ActivityBankSafes);
  public currentCampaign = 'campaign';

  public activityModel = Activity.default();
  constructor() {}
  private table2array(table): string[] {
    return Object.keys(table).map(key => table[key]);
  }
  ngOnInit() {
  }
}
