import { FamilyViewingWindowComponent } from './../family-viewing-window/family-viewing-window.component';
import { FamilyEditingWindowFormComponent } from './../family-editing-window/family-editing-window.component';
import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { Utils } from '../../../utils/utils.module';
import { FamilyService } from '../../../@core/services/family.service';
import { Family } from '../../../@core/data/family';

@Component({
  selector: "ngx-family-list",
  templateUrl: "./family-list.component.html",
  styleUrls: ["./family-list.component.scss"],
})
export class FamilyListComponent implements OnInit {
  public families: Family[];

  constructor(
    public router: Router,
    public windowService: NbWindowService,
    private familyService: FamilyService) {
    this.getFamilies();
  }

  ngOnInit(): void {
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
      },
      regDate: {
        title: "Kayıt Tarihi",
      },
      district: {
        title: "İlçe",
      },
      clerk: {
        title: "Kayıt Eden Üye",
      },
      status: {
        title: "Durum",
        valuePrepareFunction: (value) => {
          return Family.statuses[value];
        },
        filter: {
          type: "list",
          config: {
            selectText: "Seç.",
            list: Utils.table2selector(Family.statuses),
          },
        },
      },
      nation: {
        title: "Uyruk",
      }
    },
  };

  source = new LocalDataSource();

  async onDelete(event) {
    if (window.confirm("Kaydı silmek istediğinize emin misiniz?")) {
      await this.familyService.deleteFamily(event.data);
      this.getFamilies();
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
  public onEdit(event) {
    this.windowService.open(FamilyEditingWindowFormComponent, {
      title: "Aile Düzenle",
      context: {
        family: event.data,
      }
    })
      .onClose
      .toPromise()
      .then(this.getFamilies.bind(this));
    // FIXME. you don't have to read all of them again.
  }

  onSelect(event) {
    this.windowService.open(FamilyViewingWindowComponent, {
      title: "Aile Bilgileri",
      context: {
        family: event.data
      }
    });
  }

  private async getFamilies() {
    this.families = await this.familyService.getFamilies();
    this.source.load(this.families);
  }
}
