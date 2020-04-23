import { CampaignsData } from './../campaigns-data';
import {Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Router} from '@angular/router';
import { CampaignEditWindowFormComponent } from '../campaign-editing-window/campaign-editing-window.component';
import { NbWindowService } from '@nebular/theme';


@Component({
  selector: 'ngx-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {

  // TODO. some graphs features will be added in the future to observe the data.
 
  constructor(private router: Router, private windowService: NbWindowService) {
    const mydata = CampaignsData.getData();
    this.source.load(mydata);
  }
  settings = {
    actions: {
      columnTitle: 'Eylemler',
    },
    mode: 'external',
    noDataMessage: 'Kayıt Bulunamadı',
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
    columns:  {
      name: {
        title: 'Kampanya Adı',
        type: 'string',
      },
      share: {
        title: 'Hisse Bedeli',
        type: 'string',
      },
      goal: {
        title: 'Hedef Hisse',
        type: 'string',
      },
      total: {
        title: 'Alınan Hisseler',
        type: 'string',
      },
      startingDate: {
        title: 'Başlangıç Tarihi',
        type: 'string',
      },
      dueDate: {
        title: 'Bitiş Tarihi',
        type: 'string',
      },
      active: {
        title: "Aktif",
        type: "string",
      }
    },
  };

  source = new LocalDataSource();

  onDelete(event): void {
    if (window.confirm('Kaydı silmek istediğinize emin misiniz?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  /**
   * links to adding-campaign page.
   */
  onCreate() {
    this.router.navigateByUrl('/pages/accounting/activity-adding');
  }

   /**
   * creates a form window when + is clicked.
   * @param e is the event.
   */
  public onEdit() {
    this.windowService.open(CampaignEditWindowFormComponent, { title: 'Kampanya Ekle' });
  }


}
