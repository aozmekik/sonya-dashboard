import { Component, OnInit, Input } from "@angular/core";
import { Family } from "../family";
import { Utils } from '../../../utils/utils.module';

@Component({
  selector: "ngx-family-form",
  templateUrl: "./family-form.component.html",
  styleUrls: ["./family-form.component.scss"],
})

// TODO. add selector for activeness.
export class FamilyFormComponent implements OnInit {
  public areas: string[] = Utils.keys(Family.Areas);
  @Input() familyModel: Family;

  constructor() {}

  ngOnInit() {}
}
