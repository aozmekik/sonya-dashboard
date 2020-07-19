import { Utils } from '../../utils/utils.module';

export namespace Family {

  /* representative, pretty straight forward areas for the time-being. */
  export const enum Area {
    ANATOLIA,
    EUROPE,
  }

}

/**
 * represents the family model.
 * very earlier/representative prototype of a model.
 */
export class Family {
  _id: string;
  name: string;
  regDate: Date; /* date of registration. */
  unregDate: Date; /* date of unregistration. */
  memberCount: number; /* number of members in the family */
  area: Family.Area;
  // TODO. additional features.

  public static readonly Areas: Utils.IHash = {
    [Family.Area.ANATOLIA]: "Anadolu",
    [Family.Area.EUROPE]: "Avrupa",
  };
}
