import { CampaignsData } from './../campaigns-data';
import { Campaign } from './../campaign';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-campaign-adding',
  templateUrl: './campaign-adding.component.html',
  styleUrls: ['./campaign-adding.component.scss']
})
export class CampaignAddingComponent implements OnInit {

  public campaignModel: Campaign;

  constructor() { 
    this.campaignModel = CampaignsData.getData()[0];
  }

  ngOnInit() {
  }

}


