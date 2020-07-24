import { FormsModule } from '@angular/forms';
import { CustomSelectorComponent } from './custom-selector/custom-selector.component';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CustomDatePickerComponent,
    CustomSelectorComponent,
  ],
  exports:[
    CustomSelectorComponent,
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    FormsModule,
  ]
})
export class GenericComponentsModule { }
