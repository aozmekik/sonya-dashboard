import { Component, OnInit, Input } from "@angular/core";
import { NbWindowRef } from "@nebular/theme";
import { Activity } from "../activity";

@Component({
  selector: "ngx-activity-editing-window",
  templateUrl: "./activity-editing-window.component.html",
  styleUrls: ["./activity-editing-window.component.scss"],
})
export class ActivityEditingWindowComponent implements OnInit {
  @Input() activity: Activity;

  constructor(public windowRef: NbWindowRef) {}

  ngOnInit() {}

  close(event) {
    this.windowRef.close();
  }
}
