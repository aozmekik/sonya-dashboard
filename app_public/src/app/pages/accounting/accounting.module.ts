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
import { ActivityAddingComponent } from './activity-adding/activity-adding.component';
import {CommonModule} from '@angular/common';
import { AccountTypesComponent } from './account-types/account-types.component';
import { WindowFormComponent } from './account-types/window-form/window-form.component';
import {ThemeModule} from '../../@theme/theme.module';

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
    // ActivityAddingComponent,
    // AccountTypesComponent,
    WindowFormComponent,
  ],
  entryComponents: [WindowFormComponent],
})
export class AccountingModule { }
