import { Component } from "@angular/core";

@Component({
  selector: "ngx-auth",
  styleUrls: ["./auth.component.scss"],
  template: `  <nb-layout>
    <nb-layout-column>
      <div class="row justify-content-center">
        <div class="col-6">
    <router-outlet></router-outlet>
    </div>
    </div>
  
  </nb-layout-column>
  </nb-layout>
`,
})
export class AuthComponent { }
