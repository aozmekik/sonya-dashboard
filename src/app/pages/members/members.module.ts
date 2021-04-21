import { GenericComponentsModule } from './../generic-components/generic-components.module';
import { MemberViewingWindowComponent } from './member-viewing-window/member-viewing-window.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { MemberFormComponent } from "./member-form/member-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  routedComponents,
  MembersRoutingModule,
} from "./members-routing.module";
import { MemberEditingWindowComponent } from "./member-editing-window/member-editing-window.component";
import {
  NbWindowModule,
  NbButtonModule,
  NbSelectModule,
  NbRadioModule,
  NbDatepickerModule,
  NbInputModule,
  NbIconModule,
  NbCardModule,
  NbStepperModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    ThemeModule,
    MembersRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    GenericComponentsModule,
    ReactiveFormsModule,
    NbStepperModule,
  ],
  declarations: [
    ...routedComponents,
    MemberEditingWindowComponent,
    MemberViewingWindowComponent,
    MemberFormComponent,
  ],
  exports: [
    MemberEditingWindowComponent,
    MemberViewingWindowComponent,
    MemberFormComponent,
  ],
  entryComponents: [MemberEditingWindowComponent, MemberViewingWindowComponent],
})
export class MembersModule { }
