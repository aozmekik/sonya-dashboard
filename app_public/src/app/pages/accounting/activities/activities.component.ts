import {Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {ActivitiesData} from '../activities-data';

@Component({
  selector: 'ngx-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {

  // @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  // @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;
  constructor() {
    // const data = this.service.getData();
    const mydata = this.data.getData();
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
      confirmDelete: true,
    },
    columns:  {
      activityType: {
        title: 'Tip',
        type: 'string',
      },
      about: {
        title: 'Üye/\nCari/\nDiğer',
        type: 'string',
      },
      _date: {
        title: '\tTarih',
        type: 'Date',
        width: '4.5cm',
      },
      scriptNo: {
        title: 'Makbuz/\nFatura No',
        type: 'string',
      },
      bankSafe: {
        title: 'Kasa',
        type: 'string',
      },
      campaign: {
        title: 'Kampanya',
        type: 'string',
      },
      name: {
        title: 'İsim',
        type: 'string',
        width: '8cm',
      },
      accountType: {
        title: 'Hesap Tipi',
        type: 'string',
      },
      comment: {
        title: 'Açıklama',
        type: 'string',
        width: '12cm',
      },
      amount: {
        title: 'Tutar',
        type: 'string',
      },
    },
  };

  source = new LocalDataSource();
  data = new ActivitiesData();

  onDeleteConfirm(event): void {
    if (window.confirm('Kaydı silmek istediğinize emin misiniz?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
