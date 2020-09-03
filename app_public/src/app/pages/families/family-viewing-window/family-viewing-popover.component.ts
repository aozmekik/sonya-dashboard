import { Component, Input} from '@angular/core';
import { Family } from '../family';
import { Member } from 'app/pages/members/member';

// @Component({
//   selector: 'ngx-popover-tabs',
//   template: `
//     <nb-tabset>
//       <nb-tab tabTitle="What's up?">
//         <div class="p-4">
//           Such a wonderful day!
//         </div>
//       </nb-tab>
//       <nb-tab tabTitle="Second Tab">
//         <div class="p-4">
//           Indeed!
//         </div>
//       </nb-tab>
//     </nb-tabset>
//   `,
// })
// export class NgxPopoverTabsComponent {
// }

// @Component({
//   selector: 'ngx-popover-form',
//   template: `
//     <div class="p-4">
//       <form>
//         <div class="form-group">
//           <input type="text" class="form-control" placeholder="Recipients">
//         </div>
//         <div class="form-group">
//           <input type="text" class="form-control" placeholder="Subject">
//         </div>
//         <div class="form-group">
//           <textarea class="form-control" placeholder="Message"></textarea>
//         </div>
//         <button type="submit" class="btn btn-primary w-100">Send</button>
//       </form>
//     </div>
//   `,
// })
// export class NgxPopoverFormComponent {
// }

@Component({
    selector: 'ngx-popover-card',
    template: `
    <ng-template #row let-label="label" let-value="value">
      <div class="row show-grid">
        <label class="label col-sm-3 col-form-label">{{label}}: </label>
        <div class="col-sm-9 label col-form-label">
          <div>{{value}}</div>
        </div>
      </div>
    </ng-template>

      <nb-card class="popover-card">
        <nb-card-header status="warning">
          Hello!
        </nb-card-header>
        <nb-card-body>
          <ng-container *ngTemplateOutlet="row; context: {label: 'İsim',   value: member.name}"></ng-container> -->
          <ng-container *ngTemplateOutlet="row; context: {label: 'T.C.', value: member.idNo}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Doğum Yılı', value: member.birthyear}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Cinsiyet', value: memberKeys.genders[member.gender]}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Meslek', value: member.job}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Gelir', value: member.income}"></ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Beden', value: familyKeys.bodies[member.body]}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Ayakkabı Numarası', value: member.shoe}">
          </ng-container>
          <ng-container *ngTemplateOutlet="row; context: {label: 'Engel', value: member.disease}">
          </ng-container>
        </nb-card-body>
      </nb-card>

    <!-- <nb-card class="popover-card">
      <nb-card-header status="warning">
        Hello!
      </nb-card-header>
      <nb-card-body>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </nb-card-body>
    </nb-card> -->
  `,
    styles: [`
    nb-card {
      margin: 0;
      max-width: 20rem;
    }
  `],
})
export class FamilyViewingPopoverComponent {
    public readonly familyKeys: Family.Keys = Family.keys;
    public readonly memberKeys: Member.Keys = Member.keys;
    @Input() member;
}