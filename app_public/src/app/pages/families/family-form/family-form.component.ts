import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Family } from "../family";
import { Utils } from '../../../utils/utils.module';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { Member } from '../../members/member';

@Component({
  selector: "ngx-family-form",
  templateUrl: "./family-form.component.html",
  styleUrls: ["./family-form.component.scss"],
})

/**
 * FamilyFormComponent is among the many form components deriving form CustomFormComponent.
 * One can notice that: Because there a special case here, some generic forms could not be 
 * used in this derived class, and some specific approaches have been developed. 
 * The reason for this was obviusly the use of a dynamic form structures.
 */

/**
 * // TODO.
 * This component seriously needs a refactor. 
 * It contains four discrete (also similar) dynamic form components. 
 * A refactor should be made using a generic construct for these.
 * Dynamic form generation was the reason for all the complexity of this code. 
 */

export class FamilyFormComponent extends CustomFormComponent<Family> implements OnInit {
  public readonly familyKeys: Family.Keys = Family.keys;
  public readonly memberKeys: Member.Keys = Member.keys;

  private destroy$ = new Subject();
  public income: number = null;
  public outgo: number = null;
  public education: number = null;
  public bill: number = null;

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    this.form = new FormGroup({
      '_id': new FormControl(this.model._id),
      'name': new FormControl(this.model.name),
      'regDate': new FormControl(this.model.regDate),
      'area': new FormControl(this.model.area),
      'address': new FormControl(this.model.address),
      'registeredMember': new FormControl(this.model.registeredMember),
      'status': new FormControl(this.model.status),
      'comment': new FormControl(this.model.comment),
      'memberCount': new FormControl(this.model.memberCount),
      'members': new FormArray([]),
      'incomeCount': new FormControl(this.income),
      'incomes': new FormArray([]),
      'outgoCount': new FormControl(this.outgo),
      'outgoes': new FormArray([]),
      'educations': new FormArray([]),
      'educationCount': new FormControl(this.education),
      'bills': new FormArray([]),
      'billCount': new FormControl(this.bill),
    });

    this.memberCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateMemberForm();
      });


    this.educationCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateEducationForm();
      });

    this.incomeCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateIncomeForm();
      });

    this.outgoCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateOutgoForm();
      });

    this.billCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateBillForm();
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
            ));
          });
        }
      });

    this.outgoCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.outgoCount.value >= this.model.outgoes.length) {
          this.model.outgoes.forEach(outgo => {
            this.outgoes.push(this.formBuilder.group(
              {
                name: outgo.name,
                amount: outgo.amount,
              }
            ));
          });
        }
      });

    this.billCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.billCount.value >= this.model.bills.length) {
          this.model.bills.forEach(bill => {
            this.bills.push(this.formBuilder.group(
              {
                name: bill.name,
                contract: bill.contract,
              }
            ));
          });
        }
      });


    this.educationCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.educationCount.value >= this.model.educations.length) {
          this.model.educations.forEach(education => {
            this.educations.push(this.formBuilder.group(
              {
                name: education.name,
                school: education.school,
                grade: education.grade,
              }
            ));
          });
        }
      });

    this.incomeCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.incomeCount.value >= this.model.incomes.length) {
          this.model.incomes.forEach(income => {
            this.incomes.push(this.formBuilder.group(
              {
                name: income.name,
                amount: income.amount,
              }
            ));
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

    if (this.model.educations) {
      this.model.educations.forEach(education => {
        this.educations.push(this.formBuilder.group(
          {
            name: education.name,
            school: education.school,
            grade: education.grade,
          }
        ));
      });
    };

    if (this.model.incomes) {
      this.model.incomes.forEach(income => {
        this.incomes.push(this.formBuilder.group(
          {
            name: income.name,
            amount: income.amount,
          }
        ));
      });
    };

    if (this.model.outgoes) {
      this.model.outgoes.forEach(outgo => {
        this.outgoes.push(this.formBuilder.group(
          {
            name: outgo.name,
            amount: outgo.amount,
          }
        ));
      });
    };

    if (this.model.bills) {
      this.model.bills.forEach(bill => {
        this.bills.push(this.formBuilder.group(
          {
            name: bill.name,
            contract: bill.contract,
          }
        ));
      });
    };



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

  generateEducationForm() {
    this.educations.clear();
    let count;
    if (this.model.educations) {
      count = this.educationCount.value >= this.model.educations.length ?
        this.educationCount.value - this.model.educations.length :
        this.educationCount.value;
    }
    else
      count = this.educationCount.value;

    if (this.educationCount.value <= 10) {
      for (let x = 0; x < count; x++) {
        this.educations.push(this.createEducation());
      }
    }
  }

  createMember() {
    return new FormGroup({
      'idNo': new FormControl(null, { validators: [Validators.required] }),
      'name': new FormControl(null, { validators: [Validators.required] }),
      'birthyear': new FormControl(null, { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4)] }),
      'gender': new FormControl(0, { validators: [Validators.required] }),
      'job': new FormControl(null, { validators: [Validators.required] }),
      'income': new FormControl(null, { validators: [Validators.required] }),
      'body': new FormControl(0, { validators: [Validators.required] }),
      'shoe': new FormControl(null, { validators: [Validators.required] }),
      'disease': new FormControl(null, { validators: [Validators.required] }),
    });
  }

  createEducation() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
      'school': new FormControl(null, { validators: [Validators.required] }),
      'grade': new FormControl(null, { validators: [Validators.required] }),
    })
  }

  generateIncomeForm() {
    this.incomes.clear();
    let count;
    if (this.model.incomes) {
      count = this.incomeCount.value >= this.model.incomes.length ?
        this.incomeCount.value - this.model.incomes.length :
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

  generateOutgoForm() {
    this.outgoes.clear();
    let count;
    if (this.model.outgoes) {
      count = this.outgoCount.value >= this.model.outgoes.length ?
        this.outgoCount.value - this.model.outgoes.length :
        this.outgoCount.value;
    }
    else
      count = this.outgoCount.value;

    if (this.outgoCount.value <= 10) {
      for (let x = 0; x < count; x++) {
        this.outgoes.push(this.createIncome()); /* income and outgo's interface are same */
      }
    }
  }

  generateBillForm() {
    this.bills.clear();
    let count;
    if (this.model.bills) {
      count = this.billCount.value >= this.model.bills.length ?
        this.billCount.value - this.model.bills.length :
        this.billCount.value;
    }
    else
      count = this.billCount.value;

    if (this.billCount.value <= 10) {
      for (let x = 0; x < count; x++) {
        this.bills.push(this.createBill()); 
      }
    }
  }



  createIncome() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
      'amount': new FormControl(null, { validators: [Validators.required] }),
    });
  }

  createBill() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
      'contract': new FormControl(null, { validators: [Validators.required] }),
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

  get outgoCount() {
    return this.form.get('outgoCount');
  }

  get outgoes() {
    return this.form.get('outgoes') as FormArray;
  }

  get educations() {
    return this.form.get('educations') as FormArray;
  }

  get educationCount() {
    return this.form.get('educationCount');
  }

  get bills() {
    return this.form.get('bills') as FormArray;
  }

  get billCount() {
    return this.form.get('billCount');
  }

}
