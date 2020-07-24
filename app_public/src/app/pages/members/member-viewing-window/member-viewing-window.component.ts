import { Member } from './../member';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";

@Component({
  selector: "ngx-member-viewing-window",
  templateUrl: "./member-viewing-window.component.html",
  styleUrls: ["./member-viewing-window.component.scss"],
})
export class MemberViewingWindowComponent {
  @Input() member: Member;
  
  constructor(public windowRef: NbWindowRef) {
    this.member = windowRef.config.context as Member;
  }

  // TODO. add pipe for gender.
  // TODO. aile üye sayısı string alıyor

  close() {
    this.windowRef.close();
  }
}
