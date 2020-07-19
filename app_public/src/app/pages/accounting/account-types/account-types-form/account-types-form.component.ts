import { Activity } from "./../../activity";
import { Component, OnInit, Input } from "@angular/core";
import { Utils } from '../../../../utils/utils.module';

@Component({
  selector: "ngx-account-types-form",
  templateUrl: "./account-types-form.component.html",
  styleUrls: ["./account-types-form.component.scss"],
})
export class AccountTypesFormComponent implements OnInit {
  public activityTypes = Utils.table2array(Activity.ActivityTypes);
  @Input() accountTypeModel = {
    _id: "A",
    name: "semih",
    type: Activity.Type.OUTGO,
    state: true,
  };

  constructor() {}

  ngOnInit() {}
}
