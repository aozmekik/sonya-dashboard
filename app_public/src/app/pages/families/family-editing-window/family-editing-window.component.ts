import { FamiliesData } from './../families-data';
import { Component } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Family } from '../family';

@Component({
  selector: "ngx-family-editing-window",
  templateUrl: "./family-editing-window.component.html",
  styleUrls: ["./family-editing-window.component.scss"],
})
export class FamilyEditingWindowFormComponent {
  public family: Family = FamiliesData.getData()[0];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
