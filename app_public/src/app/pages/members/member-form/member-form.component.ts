import { Component, OnInit, Input } from "@angular/core";
import { Member } from "../member";

@Component({
  selector: "ngx-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})

// TODO. add selector for activeness.
export class MemberFormComponent implements OnInit {
  public groups: string[] = Member.table2array(Member.groups);
  @Input() memberModel: Member;

  constructor() {}

  ngOnInit() {}
}
