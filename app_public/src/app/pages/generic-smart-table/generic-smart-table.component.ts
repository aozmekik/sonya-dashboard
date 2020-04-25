import {Component, Input} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Router} from '@angular/router';
import { NbWindowService, NbComponentType } from '@nebular/theme';

// TODO. using a generic smart-table list is considerable in the whole system.

@Component({
  selector: 'ngx-generic-smart-table',
  templateUrl: './generic-smart-table.component.html',
  styleUrls: ['./generic-smart-table.component.scss']
})
export class GenericSmartTableComponent {
 
  constructor(private router: Router, private windowService: NbWindowService) {
    this.source.load(this.tableData);
  }

  @Input() tableColumns: any;
  @Input() tableData: any;
  @Input() addingNavigatesToUrl: string;
  @Input() editingWindowComponent: NbComponentType;

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
    columns:  this.tableColumns,
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
   * links to member adding page.
   */
  onCreate() {
    this.router.navigateByUrl('/pages/members/member-adding');
  }

   /**
   * creates an editing form window when edit is clicked.
   * @param e is the event.
   */
  public onEdit() {
    this.windowService.open(this.editingWindowComponent, { title: 'Üye Düzenle' });
  }


}
