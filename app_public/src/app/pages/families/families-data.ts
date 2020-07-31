import { Family } from "./family";

// only for representative frontend. will be deleted soon.
export class FamiliesData {
  private static family: Family[] = [
    {
      _id: "id",
      name: "family_name#1",
      regDate: new Date().toLocaleString(),
      unregDate: new Date().toLocaleString(),
      memberCount: 6,
      area: Family.Area.ANATOLIA,
      address: "address1",
      registeredMember: "member1",
      status: Family.Status.UNAIDED,
      members: [{name: "member1", age:12}, {name: "member2", age:6}],
      comment: "comment1"
    },
    {
      _id: "id",
      name: "family_name#2",
      regDate: new Date().toLocaleString(),
      unregDate: new Date().toLocaleString(),
      memberCount: 4,
      area: Family.Area.EUROPE,
      address: "address1",
      registeredMember: "member2",
      status: Family.Status.UNIDENTIFIED,
      members: [{name: "member4", age:40}, {name: "member2", age:12}],
      comment: "comment2"
    },
  ];

  public static getData(): Family[] {
    return this.family;
  }
}
