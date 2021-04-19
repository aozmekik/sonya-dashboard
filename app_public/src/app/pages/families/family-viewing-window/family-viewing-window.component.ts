import { Family } from './../family';
import { Component, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { FamilyBudgetViewingPopoverComponent } from './family-budget-viewing-popover.component';
import { FamilyMemberViewingPopoverComponent } from './family-member-viewing-popover.component';

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

  
  constructor(public windowRef: NbWindowRef) {
    this.family = windowRef.config.context as Family;
  }
  
  close() {
    this.windowRef.close();
  }
}
