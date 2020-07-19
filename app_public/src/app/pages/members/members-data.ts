import { Member } from "./member";
import { Family } from '../families/family';

// only for representative frontend. will be deleted soon.
export class MembersData {
  private static members: Member[] = [
    {
      _id: "id",
      name: "member_name#1",
      regDate: new Date(),
      unregDate: new Date(),
      active: true,
      group: Member.Group.ACTIVE,
      telephone: 12344569,
      address: "address#1",
      activeArea: Family.Area.ANATOLIA,
      age: 20,
      gender: Member.Gender.FEMALE,
      job: "job#1",
    },
    {
      _id: "id",
      name: "member_name#2",
      regDate: new Date(),
      unregDate: new Date(),
      active: true,
      group: Member.Group.ACTIVE,
      telephone: 12344569,
      address: "address#2",
      activeArea: Family.Area.EUROPE,
      age: 20,
      gender: Member.Gender.MALE,
      job: "job#2",
    },
  ];

  public static getData(): Member[] {
    return this.members;
  }
}
