import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Family } from "../family";
import { Utils } from '../../../utils/utils.module';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "ngx-family-form",
  templateUrl: "./family-form.component.html",
  styleUrls: ["./family-form.component.scss"],
})

/**
 * FamilyFormComponent is among the many form components deriving form CustomFormComponent.
 * One can notice that: Because it is a special case here, some generic forms could not be 
 * used in this derived class, and some specific approaches have been developed. 
 * The reason for this was obviusly the use of a dynamic structure to add family members.
 */

export class FamilyFormComponent extends CustomFormComponent<Family> implements OnInit {
  public areas: string[] = Utils.keys(Family.Areas);
  public statuses: string[] = Utils.keys(Family.statutes);

  private destroy$ = new Subject();
  public income: number = 0;
  public outgo: number = 0;

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    this.form = new FormGroup({
      '_id': new FormControl(this.model._id),
      'name': new FormControl(this.model.name),
      'regDate': new FormControl(this.model.regDate),
      'memberCount': new FormControl(this.model.memberCount),
      'area': new FormControl(this.model.area),
      'address': new FormControl(this.model.address),
      'registeredMember': new FormControl(this.model.registeredMember),
      'status': new FormControl(this.model.status),
      'comment': new FormControl(this.model.comment),
      'members': new FormArray([]),
      'incomeCount': new FormControl(this.income),
      'outgoCount': new FormControl(this.outgo),
      'income': new FormControl([]),
    });

    this.memberCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateMemberForm();
      });

    this.incomeCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateIncomeForm();
      });


    this.memberCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.memberCount.value >= this.model.members.length) {
          this.model.members.forEach(member => {
            this.members.push(this.formBuilder.group(
              {
                idNo: member.idNo,
                name: member.name,
                birthyear: member.birthyear,
                gender: member.gender,
                job: member.job,
                income: member.income,
                body: member.body,
                shoe: member.shoe,
                disease: member.disease,
              }
            ))
          });
        }
      });

    if (this.model.members) {
      this.model.members.forEach(member => {
        this.members.push(this.formBuilder.group(
          {
            idNo: member.idNo,
            name: member.name,
            birthyear: member.birthyear,
            gender: member.gender,
            job: member.job,
            income: member.income,
            body: member.body,
            shoe: member.shoe,
            disease: member.disease,
          }
        ))
      });
    }

  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  generateMemberForm() {
    this.members.clear();
    let count;
    if (this.model.members) {
      count = this.memberCount.value >= this.model.members.length ?
        this.memberCount.value - this.model.members.length :
        this.memberCount.value;
    }
    else
      count = this.memberCount.value;

    if (this.memberCount.value <= 10) {
      for (let x = 0; x < count; x++) {
        this.members.push(this.createMember());
      }
    }
  }

  createMember() {
    return new FormGroup({
      'idNo': new FormControl(null, { validators: [Validators.required] }),
      'name': new FormControl(null, { validators: [Validators.required] }),
      'birthyear': new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)] }),
      'gender': new FormControl(null, { validators: [Validators.required] }),
      'job': new FormControl(null, { validators: [Validators.required] }),
      'income': new FormControl(null, { validators: [Validators.required] }),
      'body': new FormControl(null, { validators: [Validators.required] }),
      'shoe': new FormControl(null, { validators: [Validators.required] }),
      'disease': new FormControl(null, { validators: [Validators.required] }),
    });
  }

  generateIncomeForm() {
    this.incomes.clear();
    let count;
    if (this.model.incomes) {
      count = this.incomeCount.value >= this.model.incomes.length ?
        this.incomeCount.value - this.model.members.length :
        this.incomeCount.value;
    }
    else
      count = this.incomeCount.value;

    if (this.incomeCount.value <= 10) {
      for (let x = 0; x < count; x++) {
        this.incomes.push(this.createIncome());
      }
    }
  }


  createIncome() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
      'amount': new FormControl(null, { validators: [Validators.required] }),
    });
  }


  get memberCount() {
    return this.form.get('memberCount');
  }

  get members() {
    return this.form.get('members') as FormArray;
  }

  get incomeCount() {
    return this.form.get('incomeCount');
  }

  get incomes() {
    return this.form.get('incomes') as FormArray;
  }
}
