import { CustomFormComponent } from './../../generic-components/custom-form/custom-form.component';
import { CampaignsData } from '../campaigns-data';
import { Campaign } from '../campaign';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})

// TODO. add selector for activeness.
export class CampaignFormComponent extends CustomFormComponent<Campaign> implements OnInit {
  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(): void {
  }
}


