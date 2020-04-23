import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountingRoutingModule, routedComponents } from './accounting-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule, NbWindowModule,
} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import { AccountTypeAddingWindowComponent } from './account-types/account-type-adding-window/account-type-adding-window.component';
import {ThemeModule} from '../../@theme/theme.module';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ActivityEditingWindowComponent } from './activity-editing-window/activity-editing-window.component';
import { AccountTypesFormComponent } from './account-types/account-types-form/account-types-form.component';

@NgModule ({
  imports: [
    AccountingRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    CommonModule,
    NbDatepickerModule,
    ThemeModule,
    NbWindowModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
    ActivityFormComponent,
    ActivityEditingWindowComponent,
    AccountTypesFormComponent,
    AccountTypeAddingWindowComponent,
  ],
  entryComponents: [AccountTypeAddingWindowComponent, ActivityEditingWindowComponent],
})
export class AccountingModule { }
