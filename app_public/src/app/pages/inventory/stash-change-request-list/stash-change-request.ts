import { Stash } from '../stash';
import { Member } from '../../members/member';

export namespace StashChangeRequest {
    export const enum Group {
        ADMIN, // changes via the panel
        MEMBER, // changes via the mobile.
    }

    export const enum Status {
        UNTOUCHED,
        APPROVED,
        DISAPPROVED,
    }
}

// TODO. sync problem of a take requests and database 
/**
 * this requesting a change class is here because, i thought maybe we need an interplace
 * between the system and the admin panel, to avoid wrong changes to the database and let
 * the admin be in control of the requests. but the problem is if we don't update database
 * quickly due to giving requests, a sync problem will occur. i gave this scenario below.
 * scenario which is very likely to be happen in waiting approval design:
 * say there is only one item left from stash#1.
 * request1, requesting an item from stash#1 -> waiting for approval.
 * request2, requesting an item from stash#1 -> waiting for approval. 
 * what is the solution going to be here, block request2 or allow them both?
 * in both ways, this design would be a very poor choice. that's way i don't go with this 
 * design. instead you will find my solution down below.   
 */

 // TODO. add a changes tab for responding those requests.

/**
 * @see Stash.
 * represents the alteration request of a stash.
 * this change request will be done by the active members which has only a taking interface
 * from a stash. a possible scenario would be: member requests a taking change from stash,
 * then database will be changed due to given taking information. then admin will see
 * those changes on the panel, and (in the first case) if she approves it, nothing changes
 * (since the database has already been changed). this is just a way of saying, 
 * 'ok, everything is cool with that change.' Or (second case) she might disapprove this
 * change and database will change back to it's previous state as if this change has never
 * happened. this scenario is like, someone said 'i took this item from storage.', yet
 * he didn't take it for some reason. and admin knows that he didn't take it, and she 
 * disapproves it. this design solves the sync problem mentioned above, and it sounds 
 * intuitively correct too.   
 */
export class StashChangeRequest {
    _id: string;
    change: Stash; // changing stash.
    take: number; // taking request.
    date: string; // time of the request.
    changer: Member; // owner of the request
    group: StashChangeRequest.Group; // group of the owner.
    status: StashChangeRequest.Status;
}
