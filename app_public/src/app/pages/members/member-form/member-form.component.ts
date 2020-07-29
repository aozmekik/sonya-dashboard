import { Component, OnInit, Input } from "@angular/core";
import { Member } from "../member";
import { Utils } from '../../../utils/utils.module';

@Component({
  selector: "ngx-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})

// TODO. add selector for activeness.
export class MemberFormComponent implements OnInit {
  public groups: string[] = Utils.keys(Member.groups);
  @Input() memberModel: Member;

  constructor() {}

  ngOnInit() {}
}
