import { Family } from "./family";

// only for representative frontend. will be deleted soon.
export class FamiliesData {
  private static family: Family[] = [
    {
      _id: "id",
      name: "family_name#1",
      regDate: new Date(),
      unregDate: new Date(),
      memberCount: 6,
      area: Family.Area.ANATOLIA,
      registeredMember: "member1",
      status: Family.Status.UNAIDED,
      members: [{name: "member1", age:12}, {name: "member2", age:6}],
    },
    {
      _id: "id",
      name: "family_name#2",
      regDate: new Date(),
      unregDate: new Date(),
      memberCount: 4,
      area: Family.Area.EUROPE,
      registeredMember: "member2",
      status: Family.Status.UNIDENTIFIED,
      members: [{name: "member4", age:40}, {name: "member2", age:12}],
    },
  ];

  public static getData(): Family[] {
    return this.family;
  }
}
