import { Family } from "./family";

// only for representative frontend. will be deleted soon.
export class FamiliesData {
  private static family: Family[] = [
    {
      _id: "id",
      name: "family name a",
      regDate: new Date().toLocaleString(),
      memberCount: 2,
      area: Family.Area.ANATOLIA,
      address: "address1",
      registeredMember: "member1",
      status: Family.Status.UNAIDED,
      members: [{name: "membera", age:12}, {name: "memberb", age:6}],
      comment: "comment1"
    },
    {
      _id: "id",
      name: "family_name#2",
      regDate: new Date().toLocaleString(),
      memberCount: 3,
      area: Family.Area.EUROPE,
      address: "address1",
      registeredMember: "member2",
      status: Family.Status.UNIDENTIFIED,
      members: [{name: "membera", age:40}, {name: "memberb", age:12}, {name: "memberc", age:12}],
      comment: "comment2"
    },
  ];

  public static getData(): Family[] {
    return this.family;
  }
}
