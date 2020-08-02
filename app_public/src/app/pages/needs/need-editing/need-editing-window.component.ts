import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Stash } from '../../inventory/stash';

@Component({
  selector: "ngx-need-editing-window",
  templateUrl: "./need-editing-window.component.html",
  styleUrls: ["./need-editing-window.component.scss"],
})
export class NeedEditingWindowFormComponent {
  @Input() stash: Stash;

  constructor(public windowRef: NbWindowRef) {
  }

  close() {
    this.windowRef.close();
  }
}
