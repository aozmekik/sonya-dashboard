import { Component, OnInit } from '@angular/core';
import {ActivitiesData} from '../activities-data';

@Component({
  selector: 'ngx-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  // public activityTypes = Object.keys(ActivitiesData.ActivityTypes)
  //   .map(key => ActivitiesData.ActivityTypes[key]);
  // public activityAbouts = Object.keys(ActivitiesData.ActivityAbouts)
  //   .map(key => ActivitiesData.ActivityAbouts[key]);
  // public activityBankSafes = Object.keys(ActivitiesData.ActivityBankSafes)
  //   .map(key => ActivitiesData.ActivityBankSafes[key]);
  public activityTypes = this.table2array(ActivitiesData.ActivityTypes);
  public activityAbouts = this.table2array(ActivitiesData.ActivityAbouts);
  public activityBankSafes = this.table2array(ActivitiesData.ActivityBankSafes);
  public currentActivityType = this.activityTypes[0];
  public currentBankSafe = this.activityBankSafes[0];
  public currentAbouts = this.activityAbouts[0];
  public currentCampaign = 'campaign';

  constructor() {}
  private table2array(table): string[] {
    return Object.keys(table).map(key => table[key]);
  }
  ngOnInit() {
  }

}
