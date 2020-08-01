import { FamiliesData } from '../families-data';
import { Component, OnInit} from "@angular/core";
import { Family } from '../family';

@Component({
  selector: "ngx-family-adding",
  templateUrl: "./family-adding.component.html",
  styleUrls: ["./family-adding.component.scss"],
})
export class FamilyAddingComponent implements OnInit {
  public family: Family = FamiliesData.getData()[0];

  constructor() {}

  ngOnInit() {}
}
