import { Stash } from '../stash';
import { InventoryData } from '../inventory-data';
import { Component } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";

@Component({
  selector: "ngx-stash-editing-window",
  templateUrl: "./stash-editing-window.component.html",
  styleUrls: ["./stash-editing-window.component.scss"],
})
export class StashEditingWindowFormComponent {
  public stash: Stash = InventoryData.getData()[0];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
