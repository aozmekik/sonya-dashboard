import { Campaign } from './campaign';

export class CampaignsData {
  
    private static campaigns: Campaign[] = 
    [   {
            _id: "id",
            name: "campaign#1",
            share: 50,
            goal: 1000,
            total: 200,
            startingDate: new Date(),
            dueDate: new Date(),
        }, 
        {
            _id: "id",
            name: "campaign#2",
            share: 60,
            goal: 1000,
            total: 200,
            startingDate: new Date(),
            dueDate: new Date(),
        },
    ] 

    public static getData(): Campaign []{
        return this.campaigns;
    }

}
