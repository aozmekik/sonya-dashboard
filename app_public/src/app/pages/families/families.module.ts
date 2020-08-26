import { FamilyViewingWindowComponent } from './family-viewing-window/family-viewing-window.component';
import { GenericComponentsModule } from './../generic-components/generic-components.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
  NbListModule,
  NbStepperModule,
  NbAccordionModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FamilyFormComponent } from './family-form/family-form.component';
import { FamilyEditingWindowFormComponent } from './family-editing-window/family-editing-window.component';
import { FieldActivityListComponent } from './field-activity-list/field-activity-list.component';

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
    NbListModule,
    NbWindowModule.forChild(),
    GenericComponentsModule,
    ReactiveFormsModule,
    NbStepperModule,
    NbAccordionModule,
  ],
  declarations: [
    ...routedComponents,
    FamilyEditingWindowFormComponent,
    FamilyViewingWindowComponent,
    FamilyFormComponent,
    FieldActivityListComponent,
  ],
  exports: [
    FamilyEditingWindowFormComponent,
    FamilyViewingWindowComponent,
    FamilyFormComponent,
  ],
  entryComponents: [FamilyEditingWindowFormComponent, FamilyViewingWindowComponent],
})
export class FamiliesModule {}
