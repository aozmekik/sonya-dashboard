import { Member } from "./member";
import { Family } from '../families/family';
import { Status } from '../../@core/data/status';

// only for representative frontend. will be deleted soon.
export class MembersData {
  private static members: Member[] = [
    {
      _id: "id",
      name: "member name a",
      regDate: new Date().toLocaleString(),
      unregDate: new Date().toLocaleString(),
      active: Status.ACTIVE,
      group: Member.Group.ACTIVE,
      telephone: 12345678911,
      address: "address1",
      activeArea: Family.Area.ANATOLIA,
      age: 20,
      gender: Member.Gender.FEMALE,
      job: "job b",
    },
    {
      _id: "id",
      name: "member name b",
      regDate: new Date().toLocaleString(),
      unregDate: new Date().toLocaleString(),
      active: Status.ACTIVE,
      group: Member.Group.ACTIVE,
      telephone: 12345678911,
      address: "address2",
      activeArea: Family.Area.EUROPE,
      age: 20,
      gender: Member.Gender.MALE,
      job: "job a",
    },
  ];

  public static getData(): Member[] {
    return this.members;
  }
}
