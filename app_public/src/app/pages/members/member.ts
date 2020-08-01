import { Utils } from '../../utils/utils.module';
import { Family } from '../families/family';
import { Status } from '../../@core/data/status';

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
  active: Status; /* current status of the membership. */
  group: Member.Group; /* group of the member. */

  /* some private fields for members */
  telephone: number;
  address: string;
  activeArea: Family.Area; // TODO. change the place of area.
  age: number;
  gender: Member.Gender;
  job: string;

  public static groups: Utils.IHash = {
    [Member.Group.COMMITTEE]: "Yönetici Üye",
    [Member.Group.ACTIVE]: "Aktif Üye",
    [Member.Group.PASSIVE]: "Pasif Üye",
  };

  public static genders: Utils.IHash = {
    [Member.Gender.MALE]: "Erkek",
    [Member.Gender.FEMALE]: "Kadın",
  }
}
