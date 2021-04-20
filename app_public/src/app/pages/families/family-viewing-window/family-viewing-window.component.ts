import { Family } from './../family';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { FamilyBudgetViewingPopoverComponent } from './pop-overs/family-budget-viewing-popover.component';
import { FamilyMemberViewingPopoverComponent } from './pop-overs/family-member-viewing-popover.component';
import { FamilyNeedViewingPopoverComponent } from './pop-overs/family-need-viewing-popover.component';
import { FamilyNoteViewingPopoverComponent } from './pop-overs/family-note-viewing-popover.component';

@Component({
  selector: "ngx-family-viewing-window",
  templateUrl: "./family-viewing-window.component.html",
  styleUrls: ["./family-viewing-window.component.scss"],
})
export class FamilyViewingWindowComponent {
  public readonly familyKeys: Family.Keys = Family.keys;
  @Input() family: Family;

  memberViewingPopoverComponent = FamilyMemberViewingPopoverComponent;
  budgetViewingPopoverComponent = FamilyBudgetViewingPopoverComponent;
  needViewingPopoverComponent = FamilyNeedViewingPopoverComponent;
  noteViewingPopoverComponent = FamilyNoteViewingPopoverComponent;


  constructor(public windowRef: NbWindowRef) {
    this.family = windowRef.config.context as Family;
  }

  close() {
    this.windowRef.close();
  }
}
