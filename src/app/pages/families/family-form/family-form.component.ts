import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { Family } from '../../../@core/data/family';
import { AuthenticationService } from '../../../@core/services/authentication.service';
import { FamilyService } from '../../../@core/services/family.service';

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
  public busy: boolean = false;

  // public memberCount: number = 0;
  private destroy$ = new Subject();

  constructor(public formBuilder: FormBuilder, public toastrService: NbToastrService,
    private authService: AuthenticationService,
    private familyService: FamilyService) {
    super(formBuilder, toastrService);
  }

  ngOnInit() {
    this.form = new FormGroup({
      '_id': new FormControl(this.model._id),
      'createdBy': new FormControl(this.authService.getCurrentUser()._id),
      'name': new FormControl(this.model.name, Validators.required),
      'idNo': new FormControl(this.model.idNo),
      'tel': new FormControl(this.model.tel),
      'rent': new FormControl(this.model.rent),
      'address': new FormControl(this.model.address),
      'createdAt': new FormControl(this.model.createdAt),
      'warmingType': new FormControl(this.model.warmingType),
      'city': new FormControl(this.model.city),
      'town': new FormControl(this.model.town),
      'district': new FormControl(this.model.district),
      'street': new FormControl(this.model.street),
      'nation': new FormControl(this.model.nation),
      'rating': new FormControl(this.model.rating),
      'aid': new FormControl(this.model.aid),
      'health': new FormControl(this.model.health),
      'education': new FormControl(this.model.education),
      'budgets': new FormArray([]),
      'members': new FormArray([]),
      'needs': new FormArray([]),
      'notes': new FormArray([]),
      'images': new FormControl(this.model.images ? this.model.images.data : []),
      'memberCount': new FormControl(this.model.members.length),
      'budgetCount': new FormControl(this.model.budgets.length),
      'needCount': new FormControl(this.model.needs.length),
      'noteCount': new FormControl(this.model.notes.length)
    });

    this.assignDynamicHandler(this.members, this.model.members, this.memberCount, this.createMember, () => this.updateMembers());
    this.assignDynamicHandler(this.budgets, this.model.budgets, this.budgetCount, this.createBudget, () => this.updateBudgets());
    this.assignDynamicHandler(this.needs, this.model.needs, this.needCount, this.createNeed, () => this.updateNeeds());
    this.assignDynamicHandler(this.notes, this.model.notes, this.noteCount, () => this.createNotes(), () => this.updateNotes());

    console.log(this.model);
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

  // public findInvalidControls() {
  //   const invalid = [];
  //   const controls = this.form.controls;
  //   for (const name in controls) {
  //     console.log(name, ' ', controls[name].invalid)
  //     if (controls[name].invalid) {
  //       invalid.push(name);
  //     }
  //   }
  //   console.log(invalid)
  //   console.log(this.form.invalid);
  //   return invalid;
  // }

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
      'name': new FormControl(null, { validators: [Validators.required] }),
      'idNo': new FormControl(null),
      'birthyear': new FormControl(null, { validators: [Validators.minLength(4), Validators.maxLength(4)] }),
      'gender': new FormControl(0),
      'job': new FormControl(null),
      'income': new FormControl(null),
      'size': new FormControl(null),
      'shoe': new FormControl(null),
      'disease': new FormControl(null),
      'note': new FormControl(null),
      'school': new FormControl(null),
      'grade': new FormControl(null),
      'kinship': new FormControl(null),
    });
  }


  createBudget() {
    return new FormGroup({
      'name': new FormControl(null),
      'amount': new FormControl(null),
      'type': new FormControl(Family.BudgetType.INCOME),
    });
  }

  createNeed() {
    return new FormGroup({
      'name': new FormControl(null),
    });
  }

  createNotes() {
    return new FormGroup({
      'statement': new FormControl(null),
      'createdBy': new FormControl(this.authService.getCurrentUser()._id),
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
          name: need,
        }
      ));
    });
  }

  updateNotes() {
    this.model.notes.forEach(note => {
      this.notes.push(this.formBuilder.group(
        {
          statement: note.statement,
          createdBy: note.createdBy
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

  public onSubmit(): void {
    if (this.form.value.needs) {
      this.form.value.needs = this.form.value.needs.map(need => need.name);
    }
    super.onSubmit();
  }

  public onDownload(): void {
    if (this.model._id) {
      this.busy = true;
      this.familyService.downloadPDF(this.model, () => { this.busy = false });
    }
  }



}
