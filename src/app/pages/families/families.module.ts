import { GenericComponentsModule } from './../generic-components/generic-components.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  routedComponents,
  FamiliesRoutingModule,
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
  NbPopoverModule,
  NbSpinnerModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FamilyFormComponent } from './family-form/family-form.component';
import { FamilyEditingWindowFormComponent } from './family-editing-window/family-editing-window.component';
import { DynamicFormComponent } from './family-form/dynamic-form/dynamic-form.component';

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
    NbPopoverModule,
    NbSpinnerModule
  ],
  declarations: [
    ...routedComponents,
    FamilyEditingWindowFormComponent,
    FamilyFormComponent,
    DynamicFormComponent,
  ],
  exports: [
    FamilyFormComponent,
  ],
  entryComponents: [FamilyEditingWindowFormComponent],
})
export class FamiliesModule { }
