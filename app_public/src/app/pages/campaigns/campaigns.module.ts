import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbButtonModule, NbWindowModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { CampaignsRoutingModule, routedComponents } from './campaigns-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CampaignEditWindowFormComponent } from './campaign-editing-window/campaign-editing-window.component';

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
    NbWindowModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
    CampaignEditWindowFormComponent,
    CampaignFormComponent,
  ],
  entryComponents: [CampaignEditWindowFormComponent],
})
export class CampaignsModule { }