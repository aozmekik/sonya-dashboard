import { Activity } from "./activity"; // TODO. this is going to be a service. will be deleted also.
import { Status } from '../../@core/data/status';

export class ActivitiesData {
  public static AccountType: [
    { _id: "123"; name: "hesaptipi1" },
    { _id: "124"; name: "hesaptipi2" }
  ];

  private Activities: Activity[] = [
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      activityType: Activity.Type.INCOME,
      about: Activity.About.CURRENT,
      date: new Date().toLocaleString(),
      scriptNo: "A01234",
      bankSafe: Activity.BankSafe.BANK,
      name: "Semih Özmekik",
      campaign: "Campaign02",
      accountType: {
        _id: "ID",
        name: "selam",
        type: Activity.Type.OUTGO,
        status: Status.ACTIVE,
      },
      comment:
        "Lorem ipsum sir color dir amet liranta coreasta simonya malaefti",
      amount: 100,
    },
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      activityType: Activity.Type.VIRMAN,
      about: Activity.About.CURRENT,
      date: new Date().toLocaleString(),
      scriptNo: "A11234",
      bankSafe: Activity.BankSafe.BANK,
      name: "Yasin Kömürcü",
      campaign: "Campaign1",
      accountType: {
        _id: "ID",
        name: "Tip",
        type: Activity.Type.OUTGO,
        status: Status.ACTIVE,
      },
      comment:
        "Lorem ipsum sir color dir amet liranta coreasta simonya malaefti",
      amount: 100,
    },
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      activityType: Activity.Type.OUTGO,
      about: Activity.About.CURRENT,
      date: new Date().toLocaleString(),
      scriptNo: "A11234",
      bankSafe: Activity.BankSafe.BANK,
      name: "Burak Elibaş",
      campaign: "Campaign3",
      accountType: {
        _id: "ID",
        name: "Tip",
        type: Activity.Type.OUTGO,
        status: Status.ACTIVE,
      },
      comment:
        "Lorem ipsum sir color dir amet liranta coreasta simonya malaefti",
      amount: 100,
    },
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      activityType: Activity.Type.TRANSFER,
      about: Activity.About.CURRENT,
      date: new Date().toLocaleString(),
      scriptNo: "A11234",
      bankSafe: Activity.BankSafe.BANK,
      name: "Burak Elibaş",
      campaign: "Campaign3",
      accountType: {
        _id: "ID",
        name: "Tip",
        type: Activity.Type.OUTGO,
        status: Status.ACTIVE,
      },
      comment:
        "Lorem ipsum sir color dir amet liranta coreasta simonya malaefti",
      amount: 100,
    },
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      activityType: Activity.Type.OUTGO,
      about: Activity.About.CURRENT,
      date: new Date().toLocaleString(),
      scriptNo: "A11234",
      bankSafe: Activity.BankSafe.BANK,
      name: "Burak Elibaş",
      campaign: "Campaign3",
      accountType: {
        _id: "ID",
        name: "Tip",
        type: Activity.Type.OUTGO,
        status: Status.ACTIVE,
      },
      comment:
        "Lorem ipsum sir color dir amet liranta coreasta simonya malaefti",
      amount: 100,
    },
  ];

  getData(): Activity[] {
    return this.Activities;
  }
}
