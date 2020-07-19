import { FormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  routedComponents,
  FamiliesRoutingModule,
  // TODO. so much changes.
} from "./families-routing.module";
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
import { FamilyFormComponent } from './family-form/family-form.component';
import { FamilyEditingWindowFormComponent } from './family-editing-window/family-editing-window.component';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    ThemeModule,
    FamiliesRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    NbWindowModule.forChild(),
  ],
  declarations: [
    ...routedComponents,
    FamilyEditingWindowFormComponent,
    FamilyFormComponent,
  ],
  exports: [
    FamilyEditingWindowFormComponent,
    FamilyFormComponent,
  ],
  entryComponents: [FamilyEditingWindowFormComponent],
})
export class FamiliesModule {}
