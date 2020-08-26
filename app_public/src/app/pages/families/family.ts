import { Utils } from '../../utils/utils.module';
import { Member } from '../members/member';

export namespace Family {

  /* representative, pretty straight forward areas for the time-being. */
  export const enum Area {
    ANATOLIA,
    EUROPE,
  }

  export const enum Status
  {
    UNIDENTIFIED, /* the family is not identified */
    AIDED, /* the family identified and help has been made */
    UNAIDED, /* the family identified and help has not been made */
    UNFIT, /* the family was identified and help was deemed unsuitable */
  }

  export const enum Body
  {
    XS,
    S,
    M,
    L,
    XL,
    XXL,
  }

  export interface FamilyMember
  {
    idNo: number;
    name: string;
    birthyear: number;
    gender: Member.Gender;
    job: string;
    income: number;
    body: Family.Body;
    shoe: number;
    disease: string;
  }

  /* records of the corporations that helped this family */
  export interface Income
  {
    name: string; /* name of the organization */
    amount: number; /* amount helped */
  }

  /* educational records of children in the family */
  export interface Education
  {
    name: string;
    school: string;
    grade: number;
  }

  export interface Outgo
  {
    name: string;
    amount: number;
  }

  export interface Bill
  {
    name: string;
    contract: number; /* mukavele no */
  }

}

/**
 * represents the family model.
 * very earlier/representative prototype of a model.
 */
export class Family {
  _id: string;
  name: string; /* family surname. */
  nation: Member.Nation; /* family nationality */
  regDate: string; /* date of registration. */
  memberCount: number; /* number of members in the family. */
  area: Family.Area; /* the region where the family lives. */
  address: string; /* home address of the family */
  registeredMember: string; /* person who registered the family. */
  status: Family.Status; /* aid and identification status about the family.*/
  members: Family.FamilyMember[]; /* members living in the family */
  incomes: Family.Income[]; /* organizations where the family receives assistance */
  educations: Family.Education[]; /* educational status of children in the family */
  outgoes: Family.Outgo[]; /* family expenses */
  bills: Family.Bill[]; /* family bills */
  comment: string; /* additional information about the family */

  public static readonly Areas: Utils.IHash = {
    [Family.Area.ANATOLIA]: "Anadolu",
    [Family.Area.EUROPE]: "Avrupa",
  };

  public static readonly statutes: Utils.IHash = {
    [Family.Status.UNIDENTIFIED]: "Tespit Yapılmadı",
    [Family.Status.AIDED]: "Yardım Edildi",
    [Family.Status.UNAIDED]: "Yardım Edilmedi",
    [Family.Status.UNFIT]: "Uygun Görülmedi",
  };

  public static readonly bodies: Utils.IHash = {
    [Family.Body.XS]: "XS",
    [Family.Body.S]: "S",
    [Family.Body.M]: "M",
    [Family.Body.L]: "L",
    [Family.Body.XL]: "XL",
    [Family.Body.XXL]: "XXL",
  }

  public static default(): Family {
    const family = {
      _id: "id123",
      name: null,
      nation: Member.Nation.Syrian,
      regDate: new Date().toLocaleString(),
      memberCount: null,
      status: this.Status.UNIDENTIFIED,
      telephone: null,
      address: null,
      area: Family.Area.ANATOLIA,
      registeredMember: null,
      members: [],
      comment: null,
      incomes: [],
      educations: [],
      outgoes: [],
      bills: []
    };
    return family;
  }
}
