import { Family } from './../../families/family';
import { Member } from './../member';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Utils } from '../../../utils/utils.module';
import { statusValues } from '../../../@core/data/status';

@Component({
  selector: "ngx-member-viewing-window",
  templateUrl: "./member-viewing-window.component.html",
  styleUrls: ["./member-viewing-window.component.scss"],
})
export class MemberViewingWindowComponent {
  public readonly memberKeys: Member.Keys = Member.keys
  public readonly areas: string[] = Utils.keys(Family.Areas);


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
