import { Stash } from '../stash';
import { InventoryData } from "../inventory-data";
import { Component, OnInit} from "@angular/core";

@Component({
  selector: "ngx-stash-adding",
  templateUrl: "./stash-adding.component.html",
  styleUrls: ["./stash-adding.component.scss"],
})
export class StashAddingComponent implements OnInit {
  public stash: Stash = InventoryData.getData()[0];

  constructor() {}

  ngOnInit() {}
}
