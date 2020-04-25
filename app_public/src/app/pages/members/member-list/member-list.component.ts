import { MembersData } from "./../members-data";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { MemberEditingWindowFormComponent } from "../member-editing-window/member-editing-window.component";

@Component({
  selector: "ngx-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent {
  constructor(private router: Router, private windowService: NbWindowService) {
    const mydata = MembersData.getData();
    this.source.load(mydata);
  }
  settings = {
    actions: {
      columnTitle: "Eylemler",
    },
    mode: "external",
    noDataMessage: "Kayıt Bulunamadı",
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      name: {
        title: "Üye Adı",
        type: "string",
      },
      regDate: {
        title: "Kayıt Tarihi",
        type: "string",
      },
      unregDate: {
        title: "Kayıt Durdurulma Tarihi",
        type: "string",
      },
      group: {
        title: "Grup",
        type: "string",
      },
      active: {
        title: "Aktif",
        type: "string",
      },
    },
  };

  source = new LocalDataSource();

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
    this.router.navigateByUrl("/pages/members/member-adding");
  }

  /**
   * creates an editing form window when edit is clicked.
   * @param e is the event.
   */
  public onEdit() {
    this.windowService.open(MemberEditingWindowFormComponent, {
      title: "Üye Düzenle",
    });
  }
}
