import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  templateUrl: 'account-type-adding-window.component.html',
  styleUrls: ['account-type-adding-window.component.scss'],
})
export class AccountTypeAddingWindowComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
