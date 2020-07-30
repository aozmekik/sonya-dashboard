import { GenericComponentsModule } from './../generic-components/generic-components.module';
import { CampaignFormComponent } from "./campaign-form/campaign-form.component";
import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbButtonModule,
  NbWindowModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  CampaignsRoutingModule,
  routedComponents,
} from "./campaigns-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CampaignEditingWindowComponent } from "./campaign-editing-window/campaign-editing-window.component";

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
    ReactiveFormsModule,
    NbWindowModule.forChild(),
    GenericComponentsModule,
  ],
  declarations: [
    ...routedComponents,
    CampaignEditingWindowComponent,
    CampaignFormComponent,
  ],
  entryComponents: [CampaignEditingWindowComponent],
})
export class CampaignsModule {}
