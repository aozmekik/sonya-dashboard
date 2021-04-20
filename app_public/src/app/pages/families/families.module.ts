import { FamilyMemberViewingPopoverComponent } from './family-viewing-window/pop-overs/family-member-viewing-popover.component';
import { FamilyBudgetViewingPopoverComponent } from './family-viewing-window/pop-overs/family-budget-viewing-popover.component';
import { FamilyViewingWindowComponent } from './family-viewing-window/family-viewing-window.component';
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
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FamilyFormComponent } from './family-form/family-form.component';
import { FamilyEditingWindowFormComponent } from './family-editing-window/family-editing-window.component';
import { FieldActivityListComponent } from './field-activity-list/field-activity-list.component';
import { DynamicFormComponent } from './family-form/dynamic-form/dynamic-form.component';
import { FamilyNeedViewingPopoverComponent } from './family-viewing-window/pop-overs/family-need-viewing-popover.component';
import { FamilyNoteViewingPopoverComponent } from './family-viewing-window/pop-overs/family-note-viewing-popover.component';

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
  ],
  declarations: [
    ...routedComponents,
    FamilyEditingWindowFormComponent,
    FamilyViewingWindowComponent,
    FamilyFormComponent,
    FieldActivityListComponent,
    FamilyMemberViewingPopoverComponent,
    FamilyBudgetViewingPopoverComponent,
    FamilyNeedViewingPopoverComponent,
    FamilyNoteViewingPopoverComponent,
    DynamicFormComponent,
  ],
  exports: [
    FamilyEditingWindowFormComponent,
    FamilyViewingWindowComponent,
    FamilyFormComponent,
  ],
  entryComponents: [FamilyEditingWindowFormComponent, FamilyViewingWindowComponent],
})
export class FamiliesModule { }
