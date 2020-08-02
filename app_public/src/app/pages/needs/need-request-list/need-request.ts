import { Stash } from '../../inventory/stash';
import { StashChangeRequest } from '../../inventory/stash-change-request-list/stash-change-request';

export class NeedRequest {
    _id: string;
    need: Stash; // changing stash.
    date: string; // time of the request.
    requester: string; // owner of the request
    group: StashChangeRequest.Group; // group of the owner.
    status: StashChangeRequest.Status;
    reason: string;
}
