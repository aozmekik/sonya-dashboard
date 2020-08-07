import { Stash } from '../stash';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";

@Component({
  selector: "ngx-stash-editing-window",
  templateUrl: "./stash-editing-window.component.html",
  styleUrls: ["./stash-editing-window.component.scss"],
})
export class StashEditingWindowFormComponent {
  @Input() stash: Stash;

  constructor(public windowRef: NbWindowRef) {}

  close(event) {
    this.windowRef.close();
  }
}
