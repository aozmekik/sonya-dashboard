import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService, NbGlobalPositionStrategy } from '@nebular/theme';


export abstract class CustomFormComponent<T> implements OnInit {

  @Input() model: T;
  @Input() buttonName: string;
  @Input() disable: string[];
  @Output() submit: EventEmitter<boolean> = new EventEmitter<boolean>();
  public form: FormGroup;

  public readonly types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  public config = {
    status: null, /* will be assigned run-time */
    destroyByClick: true, /* toast can be destroyed by click */
    duration: 2000, /* 2 seconds */
    hasIcon: true, /* an insignificant detail */
    position: NbGlobalPhysicalPosition.TOP_RIGHT, /* toast will be on top-right */
    preventDuplicates: false, /* duplicate is possible */
    toastClass: null,
  };

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) { }

  ngOnInit() {
    /* those keys are strict literals and hard-coded in the .html file */
    this.form = this.formBuilder.group(this.model);
    if (this.disable)
      for (let d of this.disable)
        this.form.controls[d].disable();
  }

  public setClass(style: string)
  {
    this.config.toastClass = style;
  }

  public showToast(type: NbComponentStatus, title: string, body: string) {
    this.config.status = type;
    this.toastrService.show(body, title, this.config);
  }

  public onSubmit(): void {
    console.log(this.form.value); // FIXME. carefull with disabled fields.
    this.showToast(this.types[0], 'İşlem Başarılı!',
      `${this.buttonName}me İşlemi Başarı İle Gerçekleştirildi!`);
    this.submit.emit(true);
  }


}