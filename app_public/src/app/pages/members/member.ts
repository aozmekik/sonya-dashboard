import { statusValues } from './../../@core/data/status';
import { Utils } from '../../utils/utils.module';
import { Family } from '../families/family';
import { Status } from '../../@core/data/status';
import { Util } from 'leaflet';

export namespace Member {
  export const enum Group {
    COMMITTEE, /* from steering committee */
    ACTIVE, /* active member can change database by taking an item from stash. */
    PASSIVE, /* viewer/read-only member. */
  }

  export const enum Gender {
    MALE,
    FEMALE
  }

  export const enum Nation {
    Turk,
    Syrian,
  }

  export const enum MaritalStatus {
    Married,
    Single,
  }

  export const enum Education {
    Undergraduate,
    Graduate,
    HighSchool,
  }

  export const enum Committee {
    Education,
    Orphan,
    Buy,
    Media,
    Identification,
  }

  export const enum BloodType {
    APositive,
    ANegative,
    BPositive,
    BNegative,
    ABPositive,
    ABNegative,
    ZeroPositive,
    ZeroNegative,
  }

  export interface Keys {
    groups: string[];
    genders: string[];
    nations: string[];
    maritalStatuses: string[];
    educations: string[];
    committees: string[];
    bloodTypes: string[];
    statuses: string[];
  }
}

/**
 * represents the member model.
 * very earlier prototype of a model.
 */
export class Member {
  _id: string;
  name: string;
  regDate: string; /* date of registration. */
  unregDate: string; /* date of unregistration. */
  status: Status; /* current status of the membership. */
  group: Member.Group; /* group of the member. */

  /* some private fields for members */
  telephone: number;
  address: string;
  area: string; // TODO. change the place of area.Family.Area
  gender: Member.Gender;
  job: string;

  birthday: string;
  birthplace: string;
  idNo: number; /* TC */
  fatherName: string;
  motherName: string;
  nation: Member.Nation;
  maritalStatus: Member.MaritalStatus;
  bloodType: Member.BloodType;
  email: string;
  education: Member.Education;
  workplace: string;
  registeredProvince: string;
  committee: Member.Committee;

  public static readonly groups: Utils.IHash = {
    [Member.Group.COMMITTEE]: "Yönetici Üye",
    [Member.Group.ACTIVE]: "Aktif Üye",
    [Member.Group.PASSIVE]: "Pasif Üye",
  };

  public static readonly genders: Utils.IHash = {
    [Member.Gender.MALE]: "Erkek",
    [Member.Gender.FEMALE]: "Kadın",
  };

  public static readonly nations: Utils.IHash = {
    [Member.Nation.Turk]: "T.C.",
    [Member.Nation.Syrian]: "Suriye"
  };

  public static readonly maritalStatutes: Utils.IHash = {
    [Member.MaritalStatus.Married]: "Evli",
    [Member.MaritalStatus.Single]: "Bekar"
  };

  public static readonly educations: Utils.IHash = {
    [Member.Education.Graduate]: "Yüksek Lisans",
    [Member.Education.Undergraduate]: "Lisans",
    [Member.Education.HighSchool]: "Lise"
  };

  public static readonly committees: Utils.IHash = {
    [Member.Committee.Buy]: "Satın Alma",
    [Member.Committee.Education]: "Eğitim",
    [Member.Committee.Identification]: "Tespit",
    [Member.Committee.Media]: "Medya",
    [Member.Committee.Orphan]: "Yetim",
  };

  public static bloodTypes: Utils.IHash = {
    [Member.BloodType.APositive]: "A+",
    [Member.BloodType.ANegative]: "A-",
    [Member.BloodType.BPositive]: "B+",
    [Member.BloodType.BNegative]: "B-",
    [Member.BloodType.ABPositive]: "AB+",
    [Member.BloodType.ABNegative]: "AB-",
    [Member.BloodType.ZeroPositive]: "0+",
    [Member.BloodType.ZeroNegative]: "0-",
  };

  public static default(): Member {
    const member = {
      _id: "id123",
      name: null,
      regDate: new Date().toLocaleString(),
      unregDate: null,
      status: Status.ACTIVE,
      group: Member.Group.COMMITTEE,
      telephone: null,
      address: null,
      area: null,
      gender: Member.Gender.MALE,
      job: null,
      birthday: null,
      birthplace: null,
      idNo: null,
      fatherName: null,
      motherName: null,
      nation: Member.Nation.Turk,
      maritalStatus: Member.MaritalStatus.Single,
      bloodType: Member.BloodType.APositive,
      email: null,
      education: Member.Education.Undergraduate,
      workplace: null,
      registeredProvince: null,
      committee: Member.Committee.Identification
    };
    return member;
  };

  public static readonly keys: Member.Keys = {
    groups: Utils.keys(Member.groups),
    genders: Utils.keys(Member.genders),
    nations: Utils.keys(Member.nations),
    maritalStatuses: Utils.keys(Member.maritalStatutes),
    educations: Utils.keys(Member.educations),
    committees: Utils.keys(Member.committees),
    bloodTypes: Utils.keys(Member.bloodTypes),
    statuses: statusValues,
  };


}
