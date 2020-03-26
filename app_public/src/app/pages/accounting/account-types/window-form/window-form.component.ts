import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import {Activity} from '../../activity';

@Component({
  templateUrl: 'window-form.component.html',
  styleUrls: ['window-form.component.scss'],
})
export class WindowFormComponent {
  public activityTypes = Activity.table2array(Activity.ActivityTypes);
  public activityType = {_id: 'A', name: 'semih', type: Activity.Type.Outgo,
    state: true};
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
