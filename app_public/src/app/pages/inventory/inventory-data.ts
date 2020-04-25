import { Stash } from './stash';

// only for representative frontend. will be deleted soon.
export class InventoryData {
  private static inventory: Stash[] = [
    {
      _id: "id",
      name: "stash#1",
      total: 400,
    },
    {
      _id: "id",
      name: "stash#2",
      total: 100,
    },
  ];

  public static getData(): Stash[] {
    return this.inventory;
  }
}
