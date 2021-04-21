import { Stash } from '../stash';
import { Component, OnInit} from "@angular/core";

@Component({
  selector: "ngx-stash-adding",
  templateUrl: "./stash-adding.component.html",
  styleUrls: ["./stash-adding.component.scss"],
})
export class StashAddingComponent implements OnInit {
  public stash: Stash = Stash.default();

  constructor() {}

  ngOnInit() {}
}
