import { Component, Input } from '@angular/core';
import { Family } from '../../../../@core/data/family';

@Component({
  selector: 'ngx-budget-popover-card',
  template: `
    <div class="container"> 
      <nb-card class="popover-card">
        <nb-card-header status="warning">
          {{budget.name}}
        </nb-card-header>
        <nb-card-body>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Tip', value: familyKeys.budgetTypes[budget.type]}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'İsim', value: budget.name}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Tutar', value: budget.amount}"></ng-container>
          
        </nb-card-body>
      </nb-card>
      
      <ng-template #row let-label="label" let-value="value">
      <div class="row show-grid">
        <label class="label col-6 col-form-label">{{label}}: </label>
        <div class="col-6 label col-form-label">
          <div>{{value}}</div>
        </div>
      </div>
    </ng-template>
    </div>
  `,
  styles: [`
    nb-card {
      margin: 0;
    }
    .container {
      width: 400px;
      padding: 0em;
    }
  `],
})
export class FamilyBudgetViewingPopoverComponent {
  public readonly familyKeys: Family.Keys = Family.keys;
  @Input() budget;

  constructor() {
  }

}