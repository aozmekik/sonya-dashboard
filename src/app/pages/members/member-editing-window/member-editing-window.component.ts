import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Member } from "../member";

@Component({
  selector: "ngx-member-editing-window",
  templateUrl: "./member-editing-window.component.html",
  styleUrls: ["./member-editing-window.component.scss"],
})
export class MemberEditingWindowComponent {
  @Input() member: Member;

  constructor(public windowRef: NbWindowRef) {}

  close(event) {
    this.windowRef.close();
  }
}
