import { Member } from "./member";

// only for representative frontend. will be deleted soon.
export class MembersData {
  private static members: Member[] = [
    {
      _id: "id",
      name: "member_name#1",
      regDate: new Date(),
      unregDate: new Date(),
      active: true,
      group: Member.Group.ASSOCIATE,
    },
    {
      _id: "id",
      name: "member_name#2",
      regDate: new Date(),
      unregDate: new Date(),
      active: true,
      group: Member.Group.ASSOCIATE,
    },
  ];

  public static getData(): Member[] {
    return this.members;
  }
}
