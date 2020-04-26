import { Stash } from './../stash';
import { Member } from './../../members/member';
import { StashChangeData } from './stash-change-data';
import { Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbWindowService } from '@nebular/theme';

// TODO. actions for edit and delete buttons (approval period)
// TODO. only the untouched ones will be bringed from the database.

@Component({
  selector: 'ngx-stash-change-request-list',
  templateUrl: './stash-change-request-list.component.html',
  styleUrls: ['./stash-change-request-list.component.scss']
})
export class StashChangeRequestListComponent {

  // private windowService: NbWindowService
  constructor() {
    const mydata = StashChangeData.getData();
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
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      change: {
        title: "Stok",
        type: "string",
        valuePrepareFunction: (value: Stash) => {
          return value.name;
        },
      },
      take: {
        title: "Alınan Adet",
        type: "string",
      },
      date: {
        title: "Alınma Tarihi",
        type: "string",
        valuePrepareFunction: (value) => {
          return value.toLocaleDateString();
        },
      },
      changer: {
        title: "Alan Üye",
        type: "string",
        valuePrepareFunction: (value: Member) => {
          return value.name;
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

}


