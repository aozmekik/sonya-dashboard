import { Stash } from './stash';

// only for representative frontend. will be deleted soon.
export class InventoryData {
  private static inventory: Stash[] = [
    {
      _id: "id",
      name: "stash name a",
      total: 400,
    },
    {
      _id: "id",
      name: "stash name b",
      total: 100,
    },
  ];

  public static getData(): Stash[] {
    return this.inventory;
  }
}
