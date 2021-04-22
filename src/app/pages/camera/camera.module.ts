import { CameraComponent } from './camera.component';
import { ThemeModule } from './../../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbIconModule, NbActionsModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbInputModule,
  ],
  declarations: [
    CameraComponent
  ],
  providers: [
  ]
})
export class CameraModule { }
