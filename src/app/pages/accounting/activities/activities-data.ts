import { SmartTableData } from '../../../@core/data/smart-table';
import { Activity } from './activity';

interface IHash { // to convert enum types to string.
  [type: number]: string;
}

export class ActivitiesData extends SmartTableData {
  /*
   * hash-table definitions might seem unnecessary here.
   * grabbing strings from enum types could have been done
   * in a little faster way with string arrays and enum indexes.
   * but, I didn't go with that design choice. (which is error prone)
   * since enums might change in future, indexes can shift and
   * cause bad errors. robustness preferred to fastness here.
   */
  public static ActivityTypes: IHash = {
    [Activity.Type.Income]: 'Gelir',
    [Activity.Type.Outgo]: 'Gider',
    [Activity.Type.Transfer]: 'Transfer',
    [Activity.Type.Virman]: 'Virman',
  };
  public static ActivityAbouts: IHash = {
    [Activity.About.Current]: 'Cari',
    [Activity.About.Member]: 'Üye',
    [Activity.About.Other]: 'Diğer',
  };
  public static ActivityBankSafes: IHash = {
    [Activity.BankSafe.Bank]: 'Banka',
    [Activity.BankSafe.Bill]: 'Senet',
    [Activity.BankSafe.TLSafe]: 'TL Kasa',
  };



  private Activities: Activity[] = [{
    _id: '590d8dc7a7cb5b8e3f1bfc48',
    activityType: Activity.Type.Income,
    about: Activity.About.Current,
    _date: new Date(),
    scriptNo: 'A01234',
    bankSafe: Activity.BankSafe.Bank,
    name: 'Semih Özmekik',
    campaign: 'Campaign02',
    accountType: new Activity.AccountTypes('Bağış'),
    comment: 'Lorem ipsum sir color dir amet liranta coreasta simonya malaefti',
    amount: 100,
  },
    {
    _id: '590d8dc7a7cb5b8e3f1bfc48',
    activityType: Activity.Type.Income,
    about: Activity.About.Current,
    _date: new Date(),
    scriptNo: 'A11234',
    bankSafe: Activity.BankSafe.Bank, name: 'Yasin Kömürcü',
    campaign: 'Campaign1',
    accountType: new Activity.AccountTypes('Ödeme'),
    comment: 'Lorem ipsum sir color dir amet liranta coreasta simonya malaefti',
    amount: 100,
  }];

  /**
   * returns the printable json of the activity.
   * i.e., some properties of activities are stored in enum types.
   * grabs the strings from those enum types.
   * @param a, Activity.
   */
  private static adjust(a: Activity): any {
    return {
      activityType: this.ActivityTypes[a.activityType],
      about:  this.ActivityAbouts[a.about],
      _date: a._date.toLocaleDateString(), // cleanier date, and turkish.
      scriptNo: a.scriptNo,
      bankSafe: this.ActivityBankSafes[a.bankSafe],
      name: a.name,
      campaign: a.campaign,
      accountType: a.accountType.getName(),
      comment: a.comment,
      amount: a.amount.toString() + '₺', // prettier money format.
    };
  }

  getData(): Activity[] {
    return this.Activities.map(a => ActivitiesData.adjust(a));
  }



}
