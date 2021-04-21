import { InventoryModule } from './../inventory/inventory.module';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  routedComponents,
  NeedsRoutingModule,
} from "./needs-routing.module";
import {
  NbWindowModule,
  NbButtonModule,
  NbSelectModule,
  NbRadioModule,
  NbDatepickerModule,
  NbInputModule,
  NbIconModule,
  NbCardModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { NeedEditingWindowFormComponent } from './need-editing/need-editing-window.component';
import { NeedFormComponent } from './need-form/need-form.component';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    ThemeModule,
    NeedsRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    ReactiveFormsModule,
    GenericComponentsModule,
    InventoryModule,
  ],
  declarations: [
    ...routedComponents,
    NeedEditingWindowFormComponent,
    NeedFormComponent,
  ],
  entryComponents: [NeedEditingWindowFormComponent],
})
export class NeedsModule {}
