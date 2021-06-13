import { FamilyEditingWindowFormComponent } from './../family-editing-window/family-editing-window.component';
import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import { NbWindowService } from "@nebular/theme";
import { FamilyService } from '../../../@core/services/family.service';
import { Family } from '../../../@core/data/family';
import { LocationService } from '../../../@core/services/location.service';
import { Town } from '../../../@core/data/location';

@Component({
  selector: "ngx-family-list",
  templateUrl: "./family-list.component.html",
  styleUrls: ["./family-list.component.scss"],
})
export class FamilyListComponent implements OnInit {
  public families;
  private townKeys: { [id: number]: string } = {};

  constructor(
    public router: Router,
    public windowService: NbWindowService,
    private familyService: FamilyService,
    private locationService: LocationService) {
    this.getFamilies();
    this.getTowns();
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
      createdAt: {
        title: "Kayıt Tarihi",
        valuePrepareFunction: (value) => {
          return value.substring(0, 10);
        },
      },
      town: {
        title: "İlçe",
        valuePrepareFunction: (value) => {
          return this.townKeys[value];
        },
      },
      createdBy: {
        title: "Kayıt Eden Üye",
        valuePrepareFunction: (value) => {
          return value.name;
        },
      },
      rating: {
        title: "Derece",
      },
      aid: {
        title: "Yardım Takibi",
        valuePrepareFunction: (value) => {
          return this.boolToString(value);
        }
      },
      health: {
        title: "Sağlık Takibi",
        valuePrepareFunction: (value) => {
          return this.boolToString(value);
        }
      },
      education: {
        title: "Eğitim Takibi",
        valuePrepareFunction: (value) => {
          return this.boolToString(value);
        }
      }
    },
  };

  source = new LocalDataSource();

  async onDelete(event) {
    if (window.confirm("Kaydı silmek istediğinize emin misiniz?")) {
      // await this.familyService.deleteFamily(event.data);
      // this.getFamilies();
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
    this.onEdit(event);
  }

  private async getFamilies() {
    this.families = await this.familyService.getFamilies();
    this.source.load(this.families);
  }

  private async getTowns() {
    const towns = await this.locationService.getTowns(34);
    for (let town of towns)
      this.townKeys[town.ilce_id] = town.ilce_adi;
  }

  public isLoaded() {
    return this.families && Object.keys(this.townKeys).length > 0;
  }

  public boolToString(value) {
    return value ? 'Evet' : 'Hayır';
  }
}
