// TODO. campaign model for the campaings.

/**
 * represents the campaign model.
 * this is the very early prototype of the campaign model.
 */

export class Campaign {
    _id: string;
    name: string;
    share: number; // share price.
    total: number; // how many shares has been taken. 
    startingDate: Date;
    dueDate: Date;

    public static default(): Campaign {
        const campaign = {
            _id: "id123",
            name: "campaign#1",
            share: 200,
            total: 2,
            startingDate: new Date(),
            dueDate: new Date()
        }
        return campaign;
    }

}
