import { Component, OnInit, Input } from "@angular/core";
import { Stash } from '../stash';

@Component({
  selector: "ngx-stash-form",
  templateUrl: "./stash-form.component.html",
  styleUrls: ["./stash-form.component.scss"],
})

export class StashFormComponent implements OnInit {
  @Input() stashModel: Stash;

  constructor() {}

  ngOnInit() {}
}
