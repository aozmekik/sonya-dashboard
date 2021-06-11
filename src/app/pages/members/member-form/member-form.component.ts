import { FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Member } from "../member";
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { NbToastrService } from '@nebular/theme';
import { Family } from '../../../@core/data/family';
import { Town } from '../../../@core/data/location';
import { LocationService } from '../../../@core/services/location.service';

@Component({
  selector: "ngx-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})

export class MemberFormComponent extends CustomFormComponent<Member> implements OnInit {

  public readonly memberKeys: Member.Keys = Member.keys;
  public readonly familyKeys: Family.Keys = Family.keys;
  public towns: Town[];
  public townKeys: any[];


  constructor(
    public formBuilder: FormBuilder,
    public toastrService: NbToastrService,
    private locationService: LocationService
  ) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    this.model.towns = new FormControl(this.model.towns);
    super.ngOnInit();
    this.form.controls['name'].disable();
    this.form.controls['createdAt'].disable();
    this.form.controls['email'].disable();
    this.getTowns();
  }

  private async getTowns() {
    this.towns = await this.locationService.getTowns(34);
    this.townKeys = this.towns.map(town => ({ label: town.ilce_adi, value: town.ilce_id }));
  }

}
