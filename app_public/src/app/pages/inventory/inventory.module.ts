import { GenericComponentsModule } from './../generic-components/generic-components.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  routedComponents,
  InventoryRoutingModule,
} from "./inventory-routing.module";
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
import { StashFormComponent } from './stash-form/stash-form.component';
import { StashEditingWindowFormComponent } from './stash-editing-window/stash-editing-window.component';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    ThemeModule,
    InventoryRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    ReactiveFormsModule,
    GenericComponentsModule,
  ],
  declarations: [
    ...routedComponents,
    StashEditingWindowFormComponent,
    StashFormComponent,
  ],
  entryComponents: [StashEditingWindowFormComponent],
})
export class InventoryModule {}
