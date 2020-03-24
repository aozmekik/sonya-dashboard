import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AccountingRoutingModule, routedComponents } from './accounting-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule} from '@nebular/theme';
import {AccountingFormComponent} from './activities/accounting-form/accounting-form.component';
import {ActivitiesComponent} from './activities/activities.component';

@NgModule({
  imports: [
    AccountingRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    FormsModule,
    ActivitiesComponent,
    AccountingFormComponent,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AccountingModule { }
