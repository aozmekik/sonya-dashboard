import { CampaignsData } from './../campaigns-data';
import {Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {

 
  constructor(private router: Router) {
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
        title: 'Kampanya Hedefi',
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

}
