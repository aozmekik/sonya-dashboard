export class Activity {
  _id: string; // mongoDB object id.
  activityType: Activity.Type; // incomes, outgoes, transfer, (also virman).
  about: Activity.About; // member, current (cari), other
  _date: Date;
  scriptNo: string; // in turkish, makbuz/fatura no.
  bankSafe: Activity.BankSafe;
  campaign: string;
  name: string;
  accountType: Activity.AccountTypes;
  comment: string; // explanation field.
  amount: number;
}

export namespace Activity {
  /**
   * types of accounts that can be added (perhaps also according to campaigns)
   * within the system.
   */
  export interface AccountTypes {
    _id: string;
    name: string;
  }

  export const enum Type {
    Income,
    Outgo,
    Transfer,
    Virman,
  }

  export const enum About { // not sure about this name though.
    Member,
    Current, // for cari in turkish.
    Other,
  }

  export const enum BankSafe {
    TLSafe,
    Bank,
    Bill,
  }
}

