import { Utils } from '../../utils/utils.module';
import { Family } from '../families/family';

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
  regDate: Date; /* date of registration. */
  unregDate: Date; /* date of unregistration. */
  active: boolean; /* current status of the membership. */
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
}
