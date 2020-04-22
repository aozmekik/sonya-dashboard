import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbButtonModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CampaignsRoutingModule, routedComponents } from './campaigns-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    ThemeModule,
    CampaignsRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    CommonModule,
    // NbWindowModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CampaignsModule { }