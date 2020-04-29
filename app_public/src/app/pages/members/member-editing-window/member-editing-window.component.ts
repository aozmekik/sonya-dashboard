import { MembersData } from "./../members-data";
import { Component } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Member } from "../member";

@Component({
  selector: "ngx-member-editing-window",
  templateUrl: "./member-editing-window.component.html",
  styleUrls: ["./member-editing-window.component.scss"],
})
export class MemberEditingWindowFormComponent {
  public member: Member = MembersData.getData()[0];

  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}