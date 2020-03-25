import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity';

@Component({
  selector: 'ngx-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public activityTypes = this.table2array(Activity.ActivityTypes);
  public activityAbouts = this.table2array(Activity.ActivityAbouts);
  public activityBankSafes = this.table2array(Activity.ActivityBankSafes);
  public currentActivityType = this.activityTypes[0];
  public currentBankSafe = this.activityBankSafes[0];
  public currentAbouts = this.activityAbouts[0];
  public currentCampaign = 'campaign';

  public activityModel = Activity.default();
  constructor() {}
  private table2array(table): string[] {
    return Object.keys(table).map(key => table[key]);
  }
  ngOnInit() {
  }

  public changed(e) {
    // this.activityModel._date = e;
  }
}
