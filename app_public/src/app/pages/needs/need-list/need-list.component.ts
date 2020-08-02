import { InventoryListComponent } from '../../inventory/inventory-list/inventory-list.component';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { NeedEditingWindowFormComponent } from '../need-editing/need-editing-window.component';

@Component({
  selector: "ngx-need-list",
  templateUrl: "./need-list.component.html",
  styleUrls: ["./need-list.component.scss"],
})
export class NeedListComponent extends InventoryListComponent {
  constructor(public router: Router, public windowService: NbWindowService) {
    super(router, windowService);
    // this.source.load(mydata); //FIXME. load different data.
    this.settings.columns.name.title = "İhtiyaç Adı";
    this.settings.columns.total.title = "İhtiyaç Adeti";
  }
  
  onDelete(event): void {
    if (window.confirm("Kaydı silmek istediğinize emin misiniz?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  /**
   * links to member adding page.
   */
  onCreate() {
    this.router.navigateByUrl("/pages/needs/need-adding");
  }

  /**
   * creates an editing form window when edit is clicked.
   * @param e is the event.
   */
  public onEdit(event) {
    this.windowService.open(NeedEditingWindowFormComponent, {
      title: "İhtiyaç Düzenle",
      context: {
        stash: event.data,
      }
    });
  }
}
