import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { UserService } from "../../../@core/services/user.service";
import { Member } from "../member";

@Component({
  selector: "ngx-member-editing-window",
  templateUrl: "./member-editing-window.component.html",
  styleUrls: ["./member-editing-window.component.scss"],
})
export class MemberEditingWindowComponent {
  @Input() member: Member;

  constructor(public windowRef: NbWindowRef, private userService: UserService) { }


  async onSubmit(event: Member) {
    console.log(event);
    await this.userService.updateUser(event);
    this.windowRef.close();
  }
}
