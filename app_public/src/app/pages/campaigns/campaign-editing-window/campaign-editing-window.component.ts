import { CampaignsData } from "../campaigns-data";
import { Component, OnInit, Input } from "@angular/core";
import { Campaign } from "../campaign";
import { NbWindowRef } from "@nebular/theme";

@Component({
  selector: "ngx-campaign-editing-window",
  templateUrl: "./campaign-editing-window.component.html",
  styleUrls: ["./campaign-editing-window.component.scss"],
})
export class CampaignEditingWindowComponent implements OnInit {
  @Input() campaign: Campaign;

  constructor(public windowRef: NbWindowRef) { }
  ngOnInit(): void {
  }

  close() {
    this.windowRef.close();
  }
}
