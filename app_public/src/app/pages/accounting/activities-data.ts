import { Activity } from './activity';

export class ActivitiesData {
  public static AccountType: [
    {_id: '123', name: 'hesaptipi1'}, {_id: '124', name: 'hesaptipi2'},
  ];

  private Activities: Activity[] = [{
    _id: '590d8dc7a7cb5b8e3f1bfc48',
    activityType: Activity.Type.Income,
    about: Activity.About.Current,
    _date: new Date(),
    scriptNo: 'A01234',
    bankSafe: Activity.BankSafe.Bank,
    name: 'Semih Özmekik',
    campaign: 'Campaign02',
    accountType: {_id: '2', name: 'selam'},
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
    accountType: {_id: '1', name: 'test'},
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
      activityType: Activity.ActivityTypes[a.activityType],
      about:  Activity.ActivityAbouts[a.about],
      _date: a._date.toLocaleDateString(), // cleanier date, and turkish.
      scriptNo: a.scriptNo,
      bankSafe: Activity.ActivityBankSafes[a.bankSafe],
      name: a.name,
      campaign: a.campaign,
      accountType: a.accountType.name,
      comment: a.comment,
      amount: a.amount.toString() + '₺', // prettier money format.
    };
  }

  getData(): Activity[] {
    return this.Activities.map(a => ActivitiesData.adjust(a));
  }



}
