import { OnInit, Input, Output, EventEmitter, Directive, Inject, LOCALE_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Family } from '../../../@core/data/family';

@Directive()
export abstract class CustomFormComponent<T> implements OnInit {

  @Input() model: any;
  @Input() buttonName: string;
  @Input() disable: string[];
  @Output() formSubmit: EventEmitter<T> = new EventEmitter<T>();
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

  public setClass(style: string) {
    this.config.toastClass = style;
  }

  public showToast(type: NbComponentStatus, title: string, body: string) {
    this.config.status = type;
    this.toastrService.show(body, title, this.config);
  }

  public onSubmit(): void {
    this.showToast(this.types[0], 'İşlem Başarılı!',
      `${this.buttonName}me İşlemi Başarı İle Gerçekleştirildi!`);
    console.log(this.form.value);
    this.formSubmit.emit(this.form.value);
  }


}