import { ActivitiesData } from './../activities-data';
import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { Activity } from '../activity';

@Component({
  selector: 'ngx-activity-editing-window',
  templateUrl: './activity-editing-window.component.html',
  styleUrls: ['./activity-editing-window.component.scss']
})
export class ActivityEditingWindowComponent implements OnInit {

  public activity: Activity = new ActivitiesData().getData()[0];

  constructor(public windowRef: NbWindowRef) {}

  ngOnInit() {
  }

  close() {
    this.windowRef.close();
  }


}

