import { Utils } from '../../utils/utils.module';

export namespace Family {

  /* representative, pretty straight forward areas for the time-being. */
  export const enum Area {
    ANATOLIA,
    EUROPE,
  }

  export const enum Status
  {
    UNIDENTIFIED, /* the family is not identified */
    AIDED, /* the family identified and help has been made */
    UNAIDED, /* the family identified and help has not been made */
    UNFIT, /* the family was identified and help was deemed unsuitable */
  }

  export interface FamilyMember
  {
    name: string;
    age: number; 
  }

}

/**
 * represents the family model.
 * very earlier/representative prototype of a model.
 */
export class Family {
  _id: string;
  name: string; /* family surname. */
  regDate: Date; /* date of registration. */
  unregDate: Date; /* date of unregistration. */
  memberCount: number; /* number of members in the family. */
  area: Family.Area; /* the region where the family lives. */
  registeredMember: string; /* person who registered the family. */
  status: Family.Status;
  members: Family.FamilyMember[]; /* members living in the family */

  public static readonly Areas: Utils.IHash = {
    [Family.Area.ANATOLIA]: "Anadolu",
    [Family.Area.EUROPE]: "Avrupa",
  };

  public static readonly statutes: Utils.IHash = {
    [Family.Status.UNIDENTIFIED]: "Tespit Yapılmadı",
    [Family.Status.AIDED]: "Yardım Edildi",
    [Family.Status.UNAIDED]: "Yardım Edilmedi",
    [Family.Status.UNFIT]: "Uygun Görülmedi",
  };
}
