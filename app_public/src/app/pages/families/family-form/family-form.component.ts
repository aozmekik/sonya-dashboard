import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from "@angular/core";
import { Family } from "../family";
import { Utils } from '../../../utils/utils.module';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';

@Component({
  selector: "ngx-family-form",
  templateUrl: "./family-form.component.html",
  styleUrls: ["./family-form.component.scss"],
})

export class FamilyFormComponent extends CustomFormComponent<Family> implements OnInit {
  
  public areas: string[] = Utils.keys(Family.Areas);
  public statuses: string[] = Utils.keys(Family.statutes);

  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
