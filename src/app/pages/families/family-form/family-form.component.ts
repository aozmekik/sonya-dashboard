import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { Family } from '../../../@core/data/family';

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

  // public memberCount: number = 0;
  private destroy$ = new Subject();

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    this.form = new FormGroup({
      '_id': new FormControl(this.model._id),
      'clerk': new FormControl(this.model.clerk),
      'regDate': new FormControl(this.model.regDate),
      'name': new FormControl(this.model.name, Validators.required),
      'idNo': new FormControl(this.model.idNo),
      'telephone': new FormControl(this.model.telephone),
      'rent': new FormControl(this.model.rent),
      'warmingType': new FormControl(this.model.warmingType),
      'address': new FormControl(this.model.address),
      'district': new FormControl(this.model.district),
      'nation': new FormControl(this.model.nation),
      'status': new FormControl(this.model.status),
      'budgets': new FormArray(this.model.budgets),
      'members': new FormArray(this.model.members),
      'needs': new FormArray(this.model.needs),
      'notes': new FormArray(this.model.notes),
      'images': new FormControl(this.model.images),
      'memberCount': new FormControl(this.model.members.length),
      'budgetCount': new FormControl(this.model.budgets.length),
      'needCount': new FormControl(this.model.needs.length),
      'noteCount': new FormControl(this.model.notes.length)
    });

    this.assignDynamicHandler(this.members, this.model.members, this.memberCount, this.createMember, () => this.updateMembers());
    this.assignDynamicHandler(this.budgets, this.model.budgets, this.budgetCount, this.createBudget, () => this.updateBudgets());
    this.assignDynamicHandler(this.needs, this.model.needs, this.needCount, this.createNeed, () => this.updateNeeds());
    this.assignDynamicHandler(this.notes, this.model.notes, this.noteCount, this.createNotes, () => this.updateNotes());


  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  assignDynamicHandler(list: FormArray, model: any[], count: any, creator, updater) {
    count.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateForm(list, model, count, creator);

      });

    if (model)
      updater();

  }

  generateForm(list: FormArray, model: any[], count: AbstractControl, creator) {
    if (model) {
      let diff = count.value - list.length;
      if (diff > 0) // append
        list.push(creator())

    }
    else { // add from scratch
      for (let x = 0; x < count.value; x++)
        list.push(creator())
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

  createNeed() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required] }),
    });
  }

  createNotes() {
    return new FormGroup({
      'statement': new FormControl(null, { validators: [Validators.required] }),
      'members': new FormControl(null, { validators: [Validators.required] }),
      'rating': new FormControl(null, { validators: [Validators.required] }),
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

  updateNeeds() {
    this.model.needs.forEach(need => {
      this.needs.push(this.formBuilder.group(
        {
          name: need.name,
        }
      ));
    });
  }

  updateNotes() {
    this.model.notes.forEach(note => {
      this.notes.push(this.formBuilder.group(
        {
          statement: note.statement,
          members: note.members,
          rating: note.rating
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

  get needCount() {
    return this.form.get('needCount');
  }

  get needs() {
    return this.form.get('needs') as FormArray;
  }

  get noteCount() {
    return this.form.get('noteCount');
  }

  get notes() {
    return this.form.get('notes') as FormArray;
  }

  addForm(count: string) {
    this.form.controls[count].setValue(this.form.get(count).value + 1);
  }

  removeForm(count: string, list: string, idx: number) {
    this.form.controls[count].setValue(this.form.get(count).value - 1);
    (this.form.get(list) as FormArray).removeAt(idx);
  }

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[i]);

        reader.onload = (innerEvent: any) => {
          this.form.value.images.push(innerEvent.target.result);
        }
      }
    }

  }

  deleteFile(idx: number) {
    this.form.value.images.splice(idx, 1)
  }


}
