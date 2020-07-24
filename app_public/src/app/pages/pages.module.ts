import { GenericComponentsModule } from './generic-components/form-rows/generic-components.module';
import { CameraModule } from './camera/camera.module';
import { NgModule } from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CustomDatePickerComponent } from './generic-components/form-rows/custom-date-picker/custom-date-picker.component';
import { CustomSelectorComponent } from './generic-components/form-rows/custom-selector/custom-selector.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    CameraModule,
  ],
  declarations: [
    PagesComponent,
    // CustomDatePickerComponent,
    // CustomSelectorComponent,
  ],
})
export class PagesModule {
}
