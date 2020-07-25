import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.scss']
})
export class CustomDatePickerComponent implements OnInit {
  @Output() dateSelectChange: EventEmitter<String> = new EventEmitter<String>();
  @Input() dateSelect: Date;

  public today: Date;
  @Input() rowName: string;

  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
  }

  public onDateSelectChange(date: Date) {
    this.dateSelectChange.emit(date.toLocaleDateString());
  }

}
