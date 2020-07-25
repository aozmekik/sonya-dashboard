import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'ngx-custom-input-box',
  templateUrl: './custom-input-box.component.html',
  styleUrls: ['./custom-input-box.component.scss']
})
export class CustomInputBoxComponent implements OnInit {

  @Input() data: string;
  @Output() dataChange: EventEmitter<String> = new EventEmitter<String>();
  @Input() rowName: string;
  @Input() alpha: boolean = true;
  @Input() numeric: boolean = true;

  public regexPattern: string;

  private readonly regexAlphaNumeric: string = "^[A-Za-z0-9]+$";
  private readonly regexAlpha: string = "^[a-zA-Z öçşiğüÖÇŞİĞÜ]+$";
  private readonly regexNumeric: string = "^[0-9]+$";


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.alpha && this.numeric)
      this.regexPattern = this.regexAlphaNumeric;
    else if (this.alpha)
      this.regexPattern = this.regexAlpha;
    else if (this.numeric)
      this.regexPattern = this.regexNumeric;
    else
      this.regexPattern = "";
  }

  public onDataChange() {
    this.dataChange.emit(this.data);
  }

}
