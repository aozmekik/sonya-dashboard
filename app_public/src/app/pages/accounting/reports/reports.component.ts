import { Component, OnInit } from '@angular/core';
import {ActivitiesData} from '../activities-data';

@Component({
  selector: 'ngx-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public activityTypes = Object.keys(ActivitiesData.ActivityTypes)
    .map(key => ActivitiesData.ActivityTypes[key]);
  public activityAbouts = Object.keys(ActivitiesData.ActivityAbouts)
    .map(key => ActivitiesData.ActivityAbouts[key]);
  public activityBankSafes = Object.keys(ActivitiesData.ActivityBankSafes)
    .map(key => ActivitiesData.ActivityBankSafes[key]);
  public currentActivityType = 'Gelir';
  public currentBankSafe = 'Banka';
  public currentAbouts = 'Üye';
  public currentCampaign = 'campaign';
  constructor() {}

  ngOnInit() {
  }

}
