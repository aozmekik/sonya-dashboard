import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit} from "@angular/core";
import { Member } from "../member";
import { Utils } from '../../../utils/utils.module';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { statusValues } from '../../../@core/data/status';
import { Family } from '../../families/family';

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


  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() { 
    super.ngOnInit();
    this.form.controls['unregDate'].disable();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
