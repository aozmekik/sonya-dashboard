/**
 * the idea of an inventory is a bit different than other models. so i really am expecting
 * a future change here. it is different in the sense that we can't consider
 * each individual as an entry in the inventory table. because we usually consider them as
 * stashes, as a bunch of items (in the same kind) grouped together. but also if we
 * are to update our stash, we definitely want to know the previous record of previous stash
 * entry. so we need a branch from the past stash we can stick to, while we usually concern
 * the present state of the inventory. this is just me thinking loudly btw.
 * 1. we can't stick to a branch created on a daily basis. because changes won't appear on a
 * daily basis, instead they can and they will appear at any time.
 * 2. if we are to stick those inventory changing moments, it would be a real overhead, since
 * keeping a record of a previous state in every small change is not efficient.
 * 3. hence, i believe making our entries to be a change stating entry could be better; while
 * we only store one inventory state.
 * if we want to go back to the past, we will do it we will do it by examining the changes
 * through our current situation. of course as always, we save the memory but we lose
 * CPU here. as i said to, there is a very tricky design issue going on here, so we'll see
 * how it goes.
 */

/**
 * represent the one item class, one category of an entry in the inventory.
 * a name of a category could be a enum type but there is as much category as we don't
 * want to deal with them as we do with account types.
 */
export class Stash {
  _id: string;
  name: string; // name of the item category. this should be very repsentative.
  total: number; // how many items inside category.


  public static default(): Stash {
    return {
      _id: "id",
      name: null,
      total: null,
    }
  }
}