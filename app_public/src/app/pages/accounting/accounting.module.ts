import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountingRoutingModule, routedComponents } from './accounting-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbButtonModule,
  NbCardModule, NbDatepickerModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import { ReportsComponent } from './reports/reports.component';
import {CommonModule} from '@angular/common';

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
  ],
  declarations: [
    ...routedComponents,
    ReportsComponent,
  ],
})
export class AccountingModule { }
