import { Utils } from '../../utils/utils.module';

export namespace Family {

  export const enum Status {
    NOT_QUESTIONED, // to be questioned.
    QUESTIONED,
    HELP, // suitable for help.
    TRACE, // suitable for trace.
    EDUCATION, // suitable for education.
    NO_HELP,
    NO_TRACE,
    NO_EDUCATION,
  }

  export const enum WarmingType {
    NATURAL_GAS,
    STOVE,
    ELECTRIC_HEATER
  }

  export const enum Gender {
    MAN,
    WOMAN
  }

  export interface FamilyMember {
    idNo: number;
    name: string;
    birthyear: number;
    gender: Gender;
    job: string;
    income: number;
    size: string;
    shoe: number;
    disease: string;
    note: string;
    school: string;
    grade: string;
    kinship: string;
  }

  export const enum BudgetType {
    INCOME,
    EXPENSE,
    BILL
  }

  export const enum Rating {
    VERY_LOW,
    LOW,
    NORMAL,
    GOOD,
    VERY_GOOD
  }

  export interface Budget {
    name: string;
    amount: number;
    type: BudgetType;
  }

  export interface Note {
    statement: string;
    members: string;
    rating: Rating;
  }

  export interface Keys {
    statuses: string[];
    genders: string[],
    warmingTypes: string[],
    budgetTypes: string[],
    ratings: string[]
  }

  export interface Need {
    name: string;
  }

}

/**
 * represents the family model.
 * very earlier/representative prototype of a model.
 */
export class Family {
  _id: string;

  clerk: string; // the member who added this family

  /* general */
  name: string;
  idNumber: number;
  telephone: number;
  rent: number;
  regDate: string;
  warmingType: Family.WarmingType;
  address: string;
  district: string;
  nation: string;

  /* details */
  status: Family.Status;
  budgets: Family.Budget[];
  members: Family.FamilyMember[];
  needs: Family.Need[];
  notes: Family.Note[];


  public static readonly statuses: Utils.IHash = {
    [Family.Status.NOT_QUESTIONED]: 'Sorgulama Yapılacak',
    [Family.Status.QUESTIONED]: 'Sorgulama Yapıldı',
    [Family.Status.HELP]: 'Yardıma Uygun',
    [Family.Status.TRACE]: 'Takibe Uygun',
    [Family.Status.EDUCATION]: 'Eğitime Uygun',
    [Family.Status.NO_HELP]: 'Yardıma Uygun Değil',
    [Family.Status.NO_TRACE]: 'Takibe Uygun Değil',
    [Family.Status.NO_EDUCATION]: 'Eğitime Uygun Değil',
  };

  public static readonly genders: Utils.IHash = {
    [Family.Gender.MAN]: 'Erkek',
    [Family.Gender.WOMAN]: 'Kadın',
  }

  public static readonly warmingTypes: Utils.IHash = {
    [Family.WarmingType.NATURAL_GAS]: 'Doğal Gaz',
    [Family.WarmingType.ELECTRIC_HEATER]: 'Elektrikli Isıtıcı',
    [Family.WarmingType.STOVE]: 'Kömür',
  }

  public static readonly budgetTypes: Utils.IHash = {
    [Family.BudgetType.INCOME]: 'Gelir',
    [Family.BudgetType.EXPENSE]: 'Gider',
    [Family.BudgetType.BILL]: 'Fatura',
  }

  public static readonly ratings: Utils.IHash = {
    [Family.Rating.VERY_LOW]: 'Çok Zayıf',
    [Family.Rating.LOW]: 'Zayıf',
    [Family.Rating.NORMAL]: 'Normal',
    [Family.Rating.GOOD]: 'İyi',
    [Family.Rating.VERY_GOOD]: 'Çok İyi'
  }

  public static readonly keys: Family.Keys = {
    statuses: Utils.keys(Family.statuses),
    genders: Utils.keys(Family.genders),
    warmingTypes: Utils.keys(Family.warmingTypes),
    budgetTypes: Utils.keys(Family.budgetTypes),
    ratings: Utils.keys(Family.ratings),
  };

  public static default(): Family {
    const family = {
      _id: 'id123',
      clerk: null,
      name: null,
      idNumber: null,
      telephone: null,
      rent: null,
      regDate: new Date().toLocaleString(),
      warmingType: this.WarmingType.NATURAL_GAS,
      address: null,
      district: null,
      nation: null,
      status: this.Status.NOT_QUESTIONED,
      budgets: [],
      members: [],
      needs: [],
      notes: [],
    };
    return family;
  }
}
