import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-need-popover-card',
  template: `
    <div class="container"> 
      <nb-card class="popover-card">
        <nb-card-header status="warning">
          {{need}}
        </nb-card-header>
        <nb-card-body>
          <ng-container *ngTemplateOutlet="row; context: {label: 'İhtiyaç', value: need}"></ng-container>
          
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
export class FamilyNeedViewingPopoverComponent {
  @Input() need;

  constructor() {
  }

}