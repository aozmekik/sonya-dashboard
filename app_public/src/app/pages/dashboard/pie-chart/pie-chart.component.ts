import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-pie-charts",
  template: `
    <nb-card size="large">
      <nb-card-header>
        Kampanya Bağış Dilimleri
      </nb-card-header>
      <nb-card-body>
        <span style="white-space: pre-line"> &nbsp;</span>
        <span style="white-space: pre-line"> &nbsp;</span>
        <span style="white-space: pre-line"> &nbsp;</span>
        <span style="white-space: pre-line"> &nbsp; </span>

        <div echarts [options]="options" class="echart"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class PieChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Kampanya#1",
            "Kampanya#2",
            "Kampanya#3",
            "Kampanya#4",
            "Kampanya#5",
          ],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: "Kampanyalar",
            type: "pie",
            radius: "90%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "Kampanya#1" },
              { value: 310, name: "Kampanya#2" },
              { value: 234, name: "Kampanya#3" },
              { value: 135, name: "Kampanya#4" },
              { value: 1548, name: "Kampanya#5" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
