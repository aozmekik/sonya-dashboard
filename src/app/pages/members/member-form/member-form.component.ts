import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Member } from "../member";
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { NbToastrService } from '@nebular/theme';
import { Family } from '../../../@core/data/family';

@Component({
  selector: "ngx-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})

export class MemberFormComponent extends CustomFormComponent<Member> implements OnInit {

  public readonly memberKeys: Member.Keys = Member.keys;
  public readonly familyKeys: Family.Keys = Family.keys;


  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.form.controls['unregDate'].disable();
  }
}
