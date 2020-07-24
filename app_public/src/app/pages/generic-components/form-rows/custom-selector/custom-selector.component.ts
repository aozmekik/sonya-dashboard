import { Activity } from './../../../accounting/activity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.scss']
})
export class CustomSelectorComponent implements OnInit {
  @Input() rowName: string;
  @Input() selectingList: string[];
  @Output() selectedChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  public onSelectedChange(event: any)
  {
    this.selectedChange.emit(event);
  }

}
