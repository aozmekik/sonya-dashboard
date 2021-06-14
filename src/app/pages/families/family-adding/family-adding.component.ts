// import { FamiliesData } from '../families-data';
import { Component, OnInit } from "@angular/core";
import { Family } from '../../../@core/data/family';
import { FamilyService } from '../../../@core/services/family.service';

@Component({
  selector: "ngx-family-adding",
  templateUrl: "./family-adding.component.html",
  styleUrls: ["./family-adding.component.scss"],
})
export class FamilyAddingComponent implements OnInit {
  public family: Family = Family.default();

  constructor(private familyService: FamilyService) { }

  ngOnInit() { }

  public async onSubmit(event: Family) {
    await this.familyService.createFamily(event);
  }
}
