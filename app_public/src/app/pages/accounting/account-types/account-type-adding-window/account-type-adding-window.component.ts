import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import {Activity} from '../../activity';

@Component({
  templateUrl: 'account-type-adding-window.component.html',
  styleUrls: ['account-type-adding-window.component.scss'],
})
export class AccountTypeAddingWindowComponent {
  public accountType = {_id: 'A', name: 'semih', type: Activity.Type.Outgo,
    state: true};
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
