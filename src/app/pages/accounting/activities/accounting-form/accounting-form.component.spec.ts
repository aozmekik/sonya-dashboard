import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingFormComponent } from './accounting-form.component';

describe('AccountingFormComponent', () => {
  let component: AccountingFormComponent;
  let fixture: ComponentFixture<AccountingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
