import { GenericSmartTableComponent } from "./generic-smart-table.component";
import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbWindowModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";

/**
 * i was thinking on this module. because we have 3 or 4 data model to represent in
 * smart tables, or maybe more in the future come up. so yes, i was thinking about 
 * creating a generic component which will be used on any time we need a smart table, 
 * only by giving a certain data, and a certain column, and some handler functions for
 * edit and stuff like that. when considering genercity, as always i'm kinda afraid
 * that to prevent copy-pasting i am taking a risk, by putting my feature addings in danger.
 * yet, i've prepared this module, maybe in the future, if i see that in the future
 * the smart tables container components are okay and concrete, in the next refactor this 
 * component will be used. of course, it's not much of a big deal later on, but i always like
 * it prettier; since i need a generict in earlier game to make time profit from reusability.
 * anyways, here it is. i am leaving this as it is.  
 */

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbWindowModule.forChild(),
  ],
  declarations: [GenericSmartTableComponent],
  entryComponents: [],
})
export class GenericSmartTableModule {}
