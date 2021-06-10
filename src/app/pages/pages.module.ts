import { CameraModule } from './camera/camera.module';
import { NgModule } from '@angular/core';
import { NbMenuModule, NbSpinnerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';

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
  ],
})
export class PagesModule {
}
