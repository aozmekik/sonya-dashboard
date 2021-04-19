import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Family } from "../family";
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
 * One can notice that: Because there a special case here, some generic forms could not be 
 * used in this derived class, and some specific approaches have been developed. 
 * The reason for this was obviusly the use of a dynamic form structures.
 */

export class FamilyFormComponent extends CustomFormComponent<Family> implements OnInit {
  public readonly familyKeys: Family.Keys = Family.keys;


  private destroy$ = new Subject();

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    this.form = new FormGroup({
      '_id': new FormControl(this.model._id),
      'name': new FormControl(this.model.name),
      'idNumber': new FormControl(this.model.idNumber),
      'telephone': new FormControl(this.model.telephone),
      'rent': new FormControl(this.model.rent),
      'regDate': new FormControl(this.model.regDate),
      'warmingType': new FormControl(this.model.warmingType),
      'address': new FormControl(this.model.address),
      'district': new FormControl(this.model.district),
      'nation': new FormControl(this.model.nation),
      'status': new FormControl(this.model.status),
      'budgets': new FormArray([]),
      'members': new FormArray([]),
      'needs': new FormArray([]),
      'notes': new FormArray([]),
      'memberCount': new FormControl(this.model.members.length),
      'budgetCount': new FormControl(this.model.budgets.length)
    });

    /* member dynamic list handler assignment */

    this.memberCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateMemberForm();
        if (this.memberCount.value >= this.model.members.length)
          this.updateMembers();
      });

    if (this.model.members)
      this.updateMembers();

    /* budget dynamic list handler assignment */

    this.budgetCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateBudgetForm();
        if (this.budgetCount.value >= this.model.budgets.length)
          this.updateBudgets();
      });

    if (this.model.budgets)
      this.updateBudgets();

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

  generateBudgetForm() {
    this.budgets.clear();
    let count;
    if (this.model.budgets) {
      count = this.budgetCount.value >= this.model.budgets.length ?
        this.budgetCount.value - this.model.budgets.length :
        this.budgetCount.value;
    }
    else
      count = this.budgetCount.value;

    if (this.budgetCount.value <= 10) {
      for (let x = 0; x < count; x++) {
        this.budgets.push(this.createBudget());
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
      'size': new FormControl(null, { validators: [Validators.required] }),
      'shoe': new FormControl(null, { validators: [Validators.required] }),
      'disease': new FormControl(null, { validators: [Validators.required] }),
      'note': new FormControl(null, { validators: [Validators.required] }),
      'school': new FormControl(null, { validators: [Validators.required] }),
      'grade': new FormControl(null, { validators: [Validators.required] }),
      'kinship': new FormControl(null, { validators: [Validators.required] }),
    });
  }


  createBudget() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
      'amount': new FormControl(null, { validators: [Validators.required] }),
      'type': new FormControl(Family.BudgetType.INCOME, { validators: [Validators.required] }),
    });
  }

  updateMembers() {
    this.model.members.forEach(member => {
      this.members.push(this.formBuilder.group(
        {
          idNo: member.idNo,
          name: member.name,
          birthyear: member.birthyear,
          gender: member.gender,
          job: member.job,
          income: member.income,
          size: member.size,
          shoe: member.shoe,
          disease: member.disease,
          note: member.note,
          school: member.school,
          grade: member.grade,
          kinship: member.kinship
        }
      ))
    });
  }

  updateBudgets() {
    this.model.budgets.forEach(budget => {
      this.budgets.push(this.formBuilder.group(
        {
          name: budget.name,
          amount: budget.amount,
          type: budget.type
        }
      ));
    });
  }



  get memberCount() {
    return this.form.get('memberCount');
  }

  get members() {
    return this.form.get('members') as FormArray;
  }

  get budgetCount() {
    return this.form.get('budgetCount');
  }

  get budgets() {
    return this.form.get('budgets') as FormArray;
  }


}
