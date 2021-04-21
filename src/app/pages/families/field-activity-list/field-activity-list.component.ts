import { FamilyListComponent } from './../family-list/family-list.component';
import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-field-activity-list',
  templateUrl: './field-activity-list.component.html',
  styleUrls: ['./field-activity-list.component.scss']
})
export class FieldActivityListComponent extends FamilyListComponent implements OnInit {

  constructor(public router: Router, public windowService: NbWindowService) {
    super(router, windowService);
    // this.source.load, load different data.

    /* little adjustments to the base's settings */
    this.settings.actions['add'] = false;
    this.settings.edit = {
      editButtonContent: '<i class="nb-checkmark"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    }
    this.settings.delete = {
      deleteButtonContent: '<i class="nb-close"></i>',
    }
  }

  ngOnInit() {
  }

  onDelete(event): void {
    if (window.confirm("Kaydı silmek istediğinize emin misiniz?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  /**
   * creates an editing form window when edit is clicked.
   * @param e is the event.
   */
  public onEdit(event) {
  }


}
