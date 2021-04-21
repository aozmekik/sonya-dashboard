import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Family } from '../family';

@Component({
  selector: "ngx-family-editing-window",
  templateUrl: "./family-editing-window.component.html",
  styleUrls: ["./family-editing-window.component.scss"],
})
export class FamilyEditingWindowFormComponent {
  @Input() family: Family;

  constructor(public windowRef: NbWindowRef) {}

  close(event) {
    // this.windowRef.close();
  }
}
