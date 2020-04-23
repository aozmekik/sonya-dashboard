import { CampaignsData } from '../campaigns-data';
import { Campaign } from '../campaign';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})

// TODO. add selector for activeness.
export class CampaignFormComponent implements OnInit { 

  @Input() campaignModel: Campaign;

  constructor() {}

  ngOnInit() {
  }

}


