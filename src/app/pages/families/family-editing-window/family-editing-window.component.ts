import { Component, Input, OnInit } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Family } from "../../../@core/data/family";
import { FamilyService } from "../../../@core/services/family.service";

@Component({
  selector: "ngx-family-editing-window",
  templateUrl: "./family-editing-window.component.html",
  styleUrls: ["./family-editing-window.component.scss"],
})
export class FamilyEditingWindowFormComponent implements OnInit {
  @Input() family: Family;

  constructor(public windowRef: NbWindowRef, private familyService: FamilyService) {
  }

  ngOnInit(): void {
  }



  async onSubmit(event: Family) {
    console.log(event);
    await this.familyService.updateFamily(event);
    this.windowRef.close();
  }
}
