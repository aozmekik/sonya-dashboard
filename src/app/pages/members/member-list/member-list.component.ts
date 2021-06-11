import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { MemberEditingWindowComponent } from "../member-editing-window/member-editing-window.component";
import { UserService } from '../../../@core/services/user.service';
import { User } from '../../../@core/data/user';

@Component({
  selector: "ngx-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent {
  public users: User[];

  constructor(
    private router: Router,
    private windowService: NbWindowService,
    private userService: UserService) {
    this.getUsers();
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
      createdAt: {
        title: "Kayıt Tarihi",
        type: "string",
      },
      role: {
        title: "Rol",
      },
      status: {
        title: "Durum"
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

  onSelect(event) {
    this.onEdit(event);
  }

  /**
   * creates an editing form window when edit is clicked.
   * @param e is the event.
   */
  public onEdit(event) {
    this.windowService.open(MemberEditingWindowComponent, {
      title: "Üye Düzenle",
      context: {
        member: event.data,
      }
    }).onClose
      .toPromise()
      .then(this.getUsers.bind(this))
  }

  private async getUsers() {
    this.users = await this.userService.getUsers();
    this.source.load(this.users);
  }


}
