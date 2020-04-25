// TODO. some private features related to a member is considerable.

export namespace Member {
  export const enum Group {
    COMMITTEE, // from steering committee
    ASSOCIATE, // reguler member.
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
  // TODO. just copy paste it. couldn't find the error.
  _id: string;
  name: string;
  regDate: Date; // date of registration.
  unregDate: Date; // date of unregistration.
  active: boolean; // current status of the membership.
  group: Member.Group; // group of the member.

  public static groups: Member.IHash = {
    [Member.Group.ASSOCIATE]: "Normal",
    [Member.Group.COMMITTEE]: "Kurul",
  };

  public static table2array(table): string[] {
    return Object.keys(table).map(key => table[key]);
  }
}
