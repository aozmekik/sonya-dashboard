import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by"
      >İyilik Rengi Derneği, <b> sonya v0.0.0 </b> &copy; 2020</span>
      <div class="socials">
      <a href="https://twitter.com/iyilikrengi" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.facebook.com/iyilikrengidernegi" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.instagram.com/iyilikrengi" target="_blank" class="ion ion-social-instagram"></a>
    </div>
  `,
})
export class FooterComponent {}
