import { FamilyViewingPopoverComponent } from './family-viewing-popover.component';
import { Family } from './../family';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Member } from '../../members/member';

@Component({
  selector: "ngx-family-viewing-window",
  templateUrl: "./family-viewing-window.component.html",
  styleUrls: ["./family-viewing-window.component.scss"],
})
export class FamilyViewingWindowComponent {
  public readonly familyKeys: Family.Keys = Family.keys;
  public readonly memberKeys: Member.Keys = Member.keys;
  @Input() family: Family;

  cardComponent = FamilyViewingPopoverComponent;
  
  constructor(public windowRef: NbWindowRef) {
    this.family = windowRef.config.context as Family;
  }
  
  close() {
    this.windowRef.close();
  }
}
