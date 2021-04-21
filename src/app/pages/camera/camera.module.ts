import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { SecurityCamerasService } from './../../@core/mock/security-cameras.service';
import { CameraComponent } from './camera.component';
import { ThemeModule } from './../../@theme/theme.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { PlayerComponent } from './rooms/player/player.component';
import { NbCardModule, NbButtonModule, NbIconModule, NbActionsModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { PlayerService } from '../../@core/utils/player.service';


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
    CameraComponent,
    PlayerComponent,
    RoomSelectorComponent,
    RoomsComponent,
    SecurityCamerasComponent,
  ],
  providers: [
    PlayerService,
    SecurityCamerasService,
  ]
})
export class CameraModule { }
