import { Component, OnInit, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { ActivitiesData } from '../../activities-data';
import { Activity } from '../../activity';

@Component({
  selector: "ngx-account-type-editing-window",
  templateUrl: "./account-type-editing-window.component.html",
  styleUrls: ["./account-type-editing-window.component.scss"],
})
export class AccountTypeEditingWindowComponent implements OnInit {
  @Input() accountType: Activity.AccountTypes;

  constructor(public windowRef: NbWindowRef) {}

  ngOnInit() {}

  close() {
    this.windowRef.close();
  }
  
}
