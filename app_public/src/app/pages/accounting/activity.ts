export namespace Activity {
  /**
   * types of accounts that can be added (perhaps also according to campaigns)
   * within the system.
   */
  export interface AccountTypes {
    _id: string;
    name: string;
    type: Type;
    state: boolean; // active or passive.
    // kind: string; an uncertain future feature.
  }

  export const enum Type {
    INCOME,
    OUTGO,
    TRANSFER,
    VIRMAN,
  }

  export const enum About { // not sure about this name though.
    MEMBER,
    CURRENT, // for cari in turkish.
    OTHER,
  }

  export const enum BankSafe {
    TLSAFE,
    BANK,
    BILL,
  }

  export interface IHash {
    // to convert enum types to string.
    [type: number]: string;
  }
}

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

  /**
   * factory design pattern.
   */
  private constructor() {}
  // public static activity = new Activity();
  public static default(): Activity {
    const activity = new Activity();
    activity._id = "ID";
    activity.activityType = Activity.Type.INCOME;
    activity.about = Activity.About.MEMBER;
    activity._date = new Date();
    activity.scriptNo = "";
    activity.bankSafe = Activity.BankSafe.BANK;
    activity.campaign = "";
    activity.name = "";
    activity.accountType = {
      _id: "ID",
      name: "Tip",
      type: Activity.Type.OUTGO,
      state: true,
    };
    activity.comment = "";
    activity.amount = null;
    return activity;
  }

  /*
   * hash-table definitions might seem unnecessary here.
   * grabbing strings from enum types could have been done
   * in a little faster way with string arrays and enum indexes.
   * but, I didn't go with that design choice. (which is error prone)
   * since enums might change in future, indexes can shift and
   * cause bad errors. robustness preferred to fastness here.
   */
  public static ActivityTypes: Activity.IHash = {
    [Activity.Type.INCOME]: "Gelir",
    [Activity.Type.OUTGO]: "Gider",
    [Activity.Type.TRANSFER]: "Transfer",
    [Activity.Type.VIRMAN]: "Virman",
  };
  public static ActivityAbouts: Activity.IHash = {
    [Activity.About.CURRENT]: "Cari",
    [Activity.About.MEMBER]: "Üye",
    [Activity.About.OTHER]: "Diğer",
  };
  public static ActivityBankSafes: Activity.IHash = {
    [Activity.BankSafe.BANK]: "Banka",
    [Activity.BankSafe.BILL]: "Senet",
    [Activity.BankSafe.TLSAFE]: "TL Kasa",
  };
  public static table2array(table): string[] {
    return Object.keys(table).map((key) => table[key]);
  }
}
