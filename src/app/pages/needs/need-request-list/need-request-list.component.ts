import { NeedRequestData } from './need-request-data';
import { Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Stash } from '../../inventory/stash';

// TODO. actions for edit and delete buttons (approval period)
// TODO. only the untouched ones will be bringed from the database.

@Component({
  selector: 'ngx-need-request-list',
  templateUrl: './need-request-list.component.html',
  styleUrls: ['./need-request-list.component.scss']
})
export class NeedRequestListComponent {

  constructor() {
    const mydata = NeedRequestData.getData();
    this.source.load(mydata);
  }
  

  settings = {
    actions: {
      columnTitle: "Eylemler",
      add: false,
    },
    mode: "external",
    noDataMessage: "Stok Hareketi Yok",
    edit: {
      editButtonContent: '<i class="nb-checkmark"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      need: {
        title: "İhtiyaç",
        type: "string",
        valuePrepareFunction: (value: Stash) => {
          return value.name;
        },
      },
      date: {
        title: "İstek Tarihi",
        type: "string",
        
      },
      requester: {
        title: "İsteyen Üye",
        type: "string",
      },
      reason: {
        title: "İstek Sebebi",
        type: "string",
      }
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

}


