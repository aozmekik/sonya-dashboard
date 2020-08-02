import { Component, OnInit} from "@angular/core";
import { Stash } from '../../inventory/stash';

@Component({
  selector: "ngx-need-adding",
  templateUrl: "./need-adding.component.html",
  styleUrls: ["./need-adding.component.scss"],
})
export class NeedAddingComponent implements OnInit {
  public stash: Stash = Stash.default();

  constructor() {
  }

  ngOnInit() {}
}
