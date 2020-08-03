import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Family } from "../family";
import { Utils } from '../../../utils/utils.module';
import { CustomFormComponent } from '../../generic-components/custom-form/custom-form.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  constructor(public formBuilder: FormBuilder) {
    super(formBuilder);
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
      'income': new FormControl(this.model.income),
    });

    this.memberCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.generateMemberForm();
      });


    this.memberCount.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.memberCount.value >= this.model.members.length) {
          this.model.members.forEach(member => {
            this.members.push(this.formBuilder.group({ name: member.name, age: member.age }))
          });
        }
      });

    this.model.members.forEach(member => {
      this.members.push(this.formBuilder.group({ name: member.name, age: member.age }))
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  generateMemberForm() {
    this.members.clear();
    let count;
    if (this.model.members)
    {
      count = this.memberCount.value >= this.model.members.length ?
      this.memberCount.value - this.model.members.length :
      this.memberCount.value;
    }
    else
      count = this.memberCount.value;
    
    if (this.memberCount.value <= 99) {
      for (let x = 0; x < count; x++) {
        this.members.push(this.createMember());
      }
    }
  }

  createMember() {
    return new FormGroup({
      'name': new FormControl(null, { validators: [Validators.required,] }),
      'age': new FormControl(null, { validators: [Validators.required, Validators.maxLength(3)] })
    });
  }

  get memberCount() {
    return this.form.get('memberCount');
  }

  get members() {
    return this.form.get('members') as FormArray;
  }
}
