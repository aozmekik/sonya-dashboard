import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export namespace Utils {
  export interface IHash {
    // to convert enum types to string.
    [type: number]: string;
  }
  export function datePrepareFunction(date: Date): string {
    return date.toLocaleDateString();
  }

  export function table2selector(table: IHash): any {
    let selector: { value: string; title: string }[] = [];

    for (var key in table) {
      var value = table[key];
      selector[key] = { value: key.toString(), title: value };
    }
    return selector;
  }

  export function keys(table): string[] {
    return Object.keys(table).map((key) => table[key]);
  }

  export function toSelectingList(table: IHash): any {
    const selectingList = [];

    for (let key in table)
      selectingList.push({ label: table[key], value: +key });
    return selectingList;
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class UtilsModule { }
