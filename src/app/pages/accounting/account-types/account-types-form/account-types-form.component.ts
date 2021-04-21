import { statusValues } from './../../../../@core/data/status';
import { Activity } from "./../../activity";
import { Component, OnInit, Input, Output } from "@angular/core";
import { Utils } from '../../../../utils/utils.module';
import { FormBuilder } from '@angular/forms';
import { CustomFormComponent } from '../../../generic-components/custom-form/custom-form.component';
import { Status } from '../../../../@core/data/status';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "ngx-account-types-form",
  templateUrl: "./account-types-form.component.html",
  styleUrls: ["./account-types-form.component.scss"],
})
export class AccountTypesFormComponent extends CustomFormComponent<Activity.AccountTypes> implements OnInit {
  public readonly activityTypes = Utils.keys(Activity.ActivityTypes);
  public readonly statuses = statusValues;

  @Input() model = {
    _id: "A",
    name: "semih",
    type: Activity.Type.OUTGO,
    status: Status.ACTIVE,
  };

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
