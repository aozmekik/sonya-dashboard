
/**
 * represents mock data service for a stash change request.
 */

import { InventoryData } from '../../inventory/inventory-data';
import { NeedRequest } from './need-request';
import { StashChangeRequest } from '../../inventory/stash-change-request-list/stash-change-request';


export class NeedRequestData {
  constructor() {}

  private static needRequests: NeedRequest[] = [
    {
      _id: "id",
      need: InventoryData.getData()[0],
      date: new Date().toLocaleString(),
      requester: "member a",
      group: StashChangeRequest.Group.MEMBER,
      status: StashChangeRequest.Status.UNTOUCHED,
      reason: "reason1",
    },
    {
      _id: "id",
      need:  InventoryData.getData()[1],
      date: new Date().toLocaleString(),
      requester: "member b",
      group: StashChangeRequest.Group.MEMBER,
      status: StashChangeRequest.Status.UNTOUCHED,
      reason: "reason2",
    },
  ];

  public static getData(): NeedRequest[] {
    return this.needRequests;
  }
}
