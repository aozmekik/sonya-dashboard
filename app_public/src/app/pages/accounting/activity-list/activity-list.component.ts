import { ActivityEditingWindowComponent } from "./../activity-editing-window/activity-editing-window.component";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { NbIconLibraries } from '@nebular/theme';

import { ActivitiesData } from "../activities-data";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { Activity } from "../activity";
import { Utils } from '../../../utils/utils.module';
import { RowIconComponent } from './activity-type-row-handler/row-icon.component';

// TODO. add a selector for campaign.
// TODO. add a view component. [scriptNo, comment]

@Component({
  selector: "ngx-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.scss"],
})
export class ActivityListComponent {
  constructor(
    private router: Router,
    private windowService: NbWindowService,
    iconsLibrary: NbIconLibraries,
  ) {
    const mydata = this.data.getData();
    this.source.load(mydata);

    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }


  source = new LocalDataSource();
  data = new ActivitiesData();

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
        type: 'custom',
        renderComponent: RowIconComponent,
        width: "10%",
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Activity.ActivityTypes),
          },
        },
      },
      about: {
        title: "Üye/\nCari/\nDiğer",
        type: "string",
        valuePrepareFunction: (value) => {
          return Activity.ActivityAbouts[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Activity.ActivityAbouts),
          },
        },
      },
      _date: {
        title: "\tTarih",
        type: "string",
      },
      bankSafe: {
        title: "Kasa",
        type: "string",
        width: "10%",
        valuePrepareFunction: (value) => {
          return Activity.ActivityBankSafes[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Activity.ActivityBankSafes),
          },
        },
      },
      campaign: {
        title: "Kampanya",
        type: "string",
      },
      name: {
        title: "İsim",
        type: "string",
        filter: {
          type: "completer",
          config: {
            selectText: "Arat...",
            completer: {
              data: this.data.getData(),
              searchFields: "name",
              titleField: "name",
            },
          },
        },
      },
      accountType: {
        title: "Hesap Tipi",
        type: "string",
        valuePrepareFunction: (value) => {
          return value.name;
        },
      },
      amount: {
        title: "Tutar",
        type: "string",
        valuePrepareFunction: (value) => {
          return value + "₺";
        },
      },
    },
  };


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
  public onEdit(event) {
    this.windowService.open(ActivityEditingWindowComponent, {
      title: "Hesap Aktivesi Düzenle",
      context: {
        activity: event.data
      }
    });
  }
}
