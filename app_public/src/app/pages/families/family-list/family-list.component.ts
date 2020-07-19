import { FamilyEditingWindowFormComponent } from './../family-editing-window/family-editing-window.component';
import { FamiliesData } from './../families-data';
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { Family } from '../family';
import { Utils } from '../../../utils/utils.module';

@Component({
  selector: "ngx-family-list",
  templateUrl: "./family-list.component.html",
  styleUrls: ["./family-list.component.scss"],
})
export class FamilyListComponent {
  constructor(private router: Router, private windowService: NbWindowService) {
    const mydata = FamiliesData.getData();
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
        title: "Aile Adı",
        type: "string",
      },
      regDate: {
        title: "Kayıt Tarihi",
        type: "string",
        valuePrepareFunction: Utils.datePrepareFunction,

      },
      unregDate: {
        title: "Kayıt Durdurulma Tarihi",
        type: "string",
        valuePrepareFunction: Utils.datePrepareFunction,

      },
      memberCount: {
        title: "Aile Üye Sayısı",
        type: "string",
      },
      area: {
        title: "Bölge",
        type: "string",
        valuePrepareFunction: (value) => {
          return Family.Areas[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Family.Areas),
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
    this.router.navigateByUrl("/pages/families/family-adding");
  }

  /**
   * creates an editing form window when edit is clicked.
   * @param e is the event.
   */
  public onEdit() {
    this.windowService.open(FamilyEditingWindowFormComponent, {
      title: "Aile Düzenle",
    });
  }
}
