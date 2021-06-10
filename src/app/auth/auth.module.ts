import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  routedComponents,
  AuthRoutingModule,
} from "./auth-routing.module";
import {
  NbWindowModule,
  NbButtonModule,
  NbSelectModule,
  NbRadioModule,
  NbDatepickerModule,
  NbInputModule,
  NbIconModule,
  NbCardModule,
  NbLayoutModule,
  NbCheckboxModule,
  NbAlertModule,
  NbSpinnerModule,
} from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";


@NgModule({
  imports: [
    NbInputModule,
    FormsModule,
    ThemeModule,
    AuthRoutingModule,
    NbCheckboxModule,
    NbButtonModule,
    NbLayoutModule,
    NbAlertModule,
    NbSpinnerModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AuthModule { }
