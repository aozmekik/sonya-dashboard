import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from "rxjs";
import { ProgressInfo, StatsProgressBarData } from "../data/stats-progress-bar";

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: "Gelen Bağış Toplamı",
      value: 300,
      activeProgress: 70,
      description: "Son 100 TL",
    },
    {
      title: "Gelen Bağışlar",
      value: 10,
      activeProgress: 30,
      description: "Son 10 bağış",
    },
    {
      title: "Kalan Gün",
      value: 5,
      activeProgress: 80,
      description: "Buraya bir şey yaz"
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
