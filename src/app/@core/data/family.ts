import { Utils } from '../../utils/utils.module';

export namespace Family {

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
    medicine: string;
    note: string;
    school: string;
    grade: number;
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
  }

  export interface Keys {
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
  createdBy: string;
  name: string;
  idNo: number;
  tel: number;
  rent: number;
  address: string;
  createdAt: Date;
  warmingType: Family.WarmingType;
  city: number;
  town: number;
  district: number;
  street: number;
  nation: string;
  rating: number;
  aid: boolean;
  health: boolean;
  education: boolean;
  budgets: Family.Budget[];
  members: Family.FamilyMember[];
  needs: Family.Need[];
  notes: Family.Note[];
  images: string[];


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
    genders: Utils.toSelectingList(Family.genders),
    warmingTypes: Utils.toSelectingList(Family.warmingTypes),
    budgetTypes: Utils.toSelectingList(Family.budgetTypes),
    ratings: Utils.toSelectingList(Family.ratings),
  };

  public static default(): Family {
    const family = {
      _id: null,
      createdBy: null,
      name: null,
      idNo: null,
      tel: null,
      rent: null,
      createdAt: null,
      warmingType: this.WarmingType.NATURAL_GAS,
      city: 34,
      town: 1103,
      district: null,
      street: null,
      address: null,
      nation: null,
      rating: null,
      aid: false,
      health: false,
      education: false,
      budgets: [],
      members: [],
      needs: [],
      notes: [],
      images: null,
    };
    return family;
  }
}
