import { statusValues } from './../../../@core/data/status';
import { MembersData } from "./../members-data";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { MemberEditingWindowComponent } from "../member-editing-window/member-editing-window.component";
import { Member } from '../member';
import { MemberViewingWindowComponent } from '../member-viewing-window/member-viewing-window.component';
import { Family } from '../../families/family';
import { Utils } from '../../../utils/utils.module';

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
      committee: {
        title: "Komite",
        type: "string",
        valuePrepareFunction: (value) => {
          return Member.committees[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Member.committees),
          },
        },
      },
      area: {
        title: "Bölge",
        type: "string",
        valuePrepareFunction: (value) => {
          return Family.areas[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Family.areas),
          },
        },
      },
      group: {
        title: "Grup",
        type: "string",
        valuePrepareFunction: (value) => {
          return Member.groups[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Member.groups),
          },
        },
      },
      status: {
        title: "Aktif",
        type: "string",
        valuePrepareFunction: (value) => {
          return statusValues[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(statusValues),
          },
        },
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
    this.windowService.open(MemberViewingWindowComponent, {
      title: "Üye Bilgileri",
      context: {
        member: event.data
      }
    });
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
    });
  }


}
