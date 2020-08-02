import { MembersData } from "./../members-data";
import { Member } from "./../member";
import { Component, OnInit} from "@angular/core";

@Component({
  selector: "ngx-member-adding",
  templateUrl: "./member-adding.component.html",
  styleUrls: ["./member-adding.component.scss"],
})
export class MemberAddingComponent implements OnInit {
  public member: Member = Member.default(); /* try to add new Member */

  constructor() {}

  ngOnInit() {}
}
