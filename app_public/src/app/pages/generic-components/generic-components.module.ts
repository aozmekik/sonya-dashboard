import { FormsModule } from '@angular/forms';
import { CustomSelectorComponent } from './form-rows/custom-selector/custom-selector.component';
import { CustomDatePickerComponent } from './form-rows/custom-date-picker/custom-date-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule, NbDatepickerModule, NbInputModule, } from '@nebular/theme';
import { CustomInputBoxComponent } from './form-rows/custom-input-box/custom-input-box.component';
@NgModule({
  declarations: [
    CustomDatePickerComponent,
    CustomSelectorComponent,
    CustomInputBoxComponent,
  ],
  exports: [
    CustomSelectorComponent,
    CustomDatePickerComponent,
    CustomInputBoxComponent,
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    FormsModule,
    NbDatepickerModule,
    NbInputModule,
  ]
})
export class GenericComponentsModule { }
