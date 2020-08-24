import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Member } from "../member";
import { Utils } from '../../../utils/utils.module';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { statusValues } from '../../../@core/data/status';
import { Family } from '../../families/family';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "ngx-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})

export class MemberFormComponent extends CustomFormComponent<Member> implements OnInit {

  public readonly statuses: string[] = statusValues;
  public readonly groups: string[] = Utils.keys(Member.groups);
  public readonly areas: string[] = Utils.keys(Family.Areas);
  public readonly genders: string[] = Utils.keys(Member.genders);
  public readonly nations: string[] = Utils.keys(Member.nations);
  public readonly maritalStatutes: string[] = Utils.keys(Member.maritalStatutes);
  public readonly bloodTypes: string[] = Utils.keys(Member.bloodTypes);
  public readonly educations: string[] = Utils.keys(Member.educations);
  public readonly committees: string[] = Utils.keys(Member.committees);


  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.form.controls['unregDate'].disable();
  }
}
