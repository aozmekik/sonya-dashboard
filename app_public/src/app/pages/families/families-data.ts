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
    },
    {
      _id: "id",
      name: "family_name#2",
      regDate: new Date(),
      unregDate: new Date(),
      memberCount: 4,
      area: Family.Area.EUROPE,
    },
  ];

  public static getData(): Family[] {
    return this.family;
  }
}
