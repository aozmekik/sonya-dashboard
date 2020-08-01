import { Family } from './../family';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";

@Component({
  selector: "ngx-family-viewing-window",
  templateUrl: "./family-viewing-window.component.html",
  styleUrls: ["./family-viewing-window.component.scss"],
})
export class FamilyViewingWindowComponent {
  @Input() family: Family;
  
  constructor(public windowRef: NbWindowRef) {
    this.family = windowRef.config.context as Family;
  }

  // TODO. add pipe for gender.
  // TODO. aile üye sayısı string alıyor

  close() {
    this.windowRef.close();
  }
}
