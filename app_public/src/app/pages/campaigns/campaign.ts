/**
 * represents the campaign model.
 * this is the very early prototype of the campaign model.
 */

import { Status } from '../../@core/data/status';

export class Campaign {
  _id: string;
  name: string;
  share: number; // share price.
  goal: number; // goal price for this campaign.
  total: number; // how many shares has been taken.
  startingDate: string;
  dueDate: string;
  status: Status;

  public static default(): Campaign {
    const campaign = {
      _id: "id123",
      name: "",
      share: null,
      goal: null,
      total: null,
      startingDate: new Date().toLocaleString(),
      dueDate: new Date().toLocaleDateString(),
      status: Status.ACTIVE,
    };
    return campaign;
  }
}
