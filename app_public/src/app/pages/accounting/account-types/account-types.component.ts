import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Activity} from '../activity';
import {NbWindowService} from '@nebular/theme';
import {AccountTypeAddingWindowComponent} from './account-type-adding-window/account-type-adding-window.component';

@Component({
  selector: 'ngx-account-types',
  templateUrl: './account-types.component.html',
  styleUrls: ['./account-types.component.scss'],
})
export class AccountTypesComponent implements OnInit {

  data = [{_id: 'A', name: 'semih', type: Activity.Type.INCOME, state: true},
          {_id: 'B', name: 'yasin', type: Activity.Type.OUTGO, state: false},
  ];
  source = new LocalDataSource();
  constructor(private windowService: NbWindowService) { this.source.load(this.data); }

  ngOnInit() {
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
    columns: {
      name: {
        title: 'Hesap Tipi Adı',
        type: 'string',
      },
      type: {
        title: 'Hesap Tipi',
        type: 'string',
      },
      state: {
        title: 'Durum',
        type: 'boolean',
      },
    },
  };

  /**
   * creates a form window when + is clicked.
   * @param e is the event.
   */
  public onCreate(e) {
    this.windowService.open(AccountTypeAddingWindowComponent, { title: `Hesap Tipi Ekle` });
  }

}
