import { Component, Input } from '@angular/core';
import { Family } from '../../../../@core/data/family';

@Component({
  selector: 'ngx-popover-card',
  template: `
    <div class="container"> 
      <nb-card class="popover-card">
        <nb-card-header status="warning">
          {{member.name}}
        </nb-card-header>
        <nb-card-body>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Kimlik Numarası', value: member.idNo}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Doğum Yılı', value: member.birthyear}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Akrabalık Derecesi', value: member.income}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Cinsiyet', value: familyKeys.genders[member.gender]}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Meslek', value: member.job}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Gelir', value: member.income}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Beden', value: member.size}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Ayakkabı Numarası', value: member.shoe}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Hastalık / Engel', value: member.disease}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Not', value: member.note}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Okul', value: member.school}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Sınıf', value: member.grade}"></ng-container>
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
export class FamilyMemberViewingPopoverComponent {
  public readonly familyKeys: Family.Keys = Family.keys;
  @Input() member;

  constructor() {
  }

}