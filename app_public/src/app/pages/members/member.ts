// TODO. some private features related to a member is considerable.

export namespace Member {
  export const enum Group {
    COMMITTEE, // from steering committee
    ACTIVE, // active member can change database by taking an item from stash.
    PASSIVE, // viewer member.
  }

  export interface IHash {
    // to convert enum types to string.
    [type: number]: string;
  }
}

/**
 * represents the member model.
 * very earlier prototype of a model.
 */
export class Member {
  _id: string;
  name: string;
  regDate: Date; // date of registration.
  unregDate: Date; // date of unregistration.
  active: boolean; // current status of the membership.
  group: Member.Group; // group of the member.

  public static groups: Member.IHash = {
    [Member.Group.COMMITTEE]: "Yönetici Üye",
    [Member.Group.ACTIVE]: "Aktif Üye",
    [Member.Group.PASSIVE]: "Pasif Üye",
  };

  public static table2array(table): string[] {
    return Object.keys(table).map(key => table[key]);
  }
}
