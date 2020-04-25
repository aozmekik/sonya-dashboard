import { CampaignsData } from "../campaigns-data";
import { Component, OnInit } from "@angular/core";
import { Campaign } from "../campaign";
import { NbWindowRef } from "@nebular/theme";

@Component({
  selector: "ngx-campaign-editing-window",
  templateUrl: "./campaign-editing-window.component.html",
  styleUrls: ["./campaign-editing-window.component.scss"],
})
export class CampaignEditWindowFormComponent {
  public campaign: Campaign = CampaignsData.getData()[0];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
