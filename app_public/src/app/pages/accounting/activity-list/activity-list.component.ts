import { ActivityEditingWindowComponent } from "./../activity-editing-window/activity-editing-window.component";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { ActivitiesData } from "../activities-data";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { Activity } from "../activity";

@Component({
  selector: "ngx-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.scss"],
})
export class ActivityListComponent {
  constructor(
    private router: Router,
    private windowService: NbWindowService,
  ) {
    const mydata = this.data.getData();
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
      activityType: {
        title: "Tip",
        type: "string",
        valuePrepareFunction: (value) => {
          return Activity.ActivityTypes[value];
        },
        width: "3%",
      },
      about: {
        title: "Üye/\nCari/\nDiğer",
        type: "string",
        valuePrepareFunction: (value) => {
          return Activity.ActivityAbouts[value];
        },
        width: "3%",
      },
      _date: {
        title: "\tTarih",
        type: "Date",
        valuePrepareFunction: (value) => {
          return value.toLocaleDateString();
        },
        width: "1%",
      },
      scriptNo: {
        title: "Makbuz/\nFatura No",
        type: "string",
      },
      bankSafe: {
        title: "Kasa",
        type: "string",
        valuePrepareFunction: (value) => {
          return Activity.ActivityBankSafes[value];
        },
      },
      campaign: {
        title: "Kampanya",
        type: "string",
        width: "1%",
      },
      name: {
        title: "İsim",
        type: "string",
      },
      accountType: {
        title: "Hesap Tipi",
        type: "string",
        valuePrepareFunction: (value) => {
          return value.name;
        },
        width: "1%",
      },
      comment: {
        title: "Açıklama",
        type: "string",
      },
      amount: {
        title: "Tutar",
        type: "string",
        valuePrepareFunction: (value) => {
          return value + "₺";
        },
        width: "1%",
      },
    },
  };

  source = new LocalDataSource();
  data = new ActivitiesData();

  onDelete(event): void {
    if (window.confirm("Kaydı silmek istediğinize emin misiniz?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

 
  /**
   * links to adding-account page.
   */
  onCreate() {
    this.router.navigateByUrl("/pages/accounting/activity-adding");
  }

  /**
   * creates a form window for to edit the campaign, when edit is clicked.
   */
  public onEdit() {
    this.windowService.open(ActivityEditingWindowComponent, {
      title: "Hesap Aktivesi Düzenle",
    });
  }
}
