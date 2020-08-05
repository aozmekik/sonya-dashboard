import { FormBuilder } from '@angular/forms';
import { Component, OnInit} from "@angular/core";
import { Stash } from '../stash';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "ngx-stash-form",
  templateUrl: "./stash-form.component.html",
  styleUrls: ["./stash-form.component.scss"],
})

export class StashFormComponent extends CustomFormComponent<Stash> implements OnInit {
  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
