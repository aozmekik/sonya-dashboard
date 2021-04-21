import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ElectricityService } from './../../@core/mock/electricity.service';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { LegendChartComponent } from './charts-panel/legend-chart/legend-chart.component';
import { OrdersProfitChartService } from './../../@core/mock/orders-profit-chart.service';
import { OrdersChartService } from './../../@core/mock/orders-chart.service';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartsPanelComponent } from './charts-panel/charts-panel.component';
import { TrafficBarService } from './../../@core/mock/traffic-bar.service';
import { TrafficListService } from './../../@core/mock/traffic-list.service';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import { StatsBarService } from './../../@core/mock/stats-bar.service';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { LayoutService } from './../../@core/utils/layout.service';
import { StatsProgressBarService } from './../../@core/mock/stats-progress-bar.service';
import { NgModule } from '@angular/core';
import { NbCardModule, NbProgressBarModule, NbThemeService, NbIconModule, NbListComponent, NbListModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ProgressSectionComponent } from './progress-section/progress-section.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ProfitBarAnimationChartService } from '../../@core/mock/profit-bar-animation-chart.service';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { PeriodsService } from '../../@core/mock/periods.service';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { UserActivityService } from '../../@core/mock/user-activity.service';
import { UserActivityComponent } from './user-activity/user-activity.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbProgressBarModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbIconModule,
    NbListModule,
    NbSelectModule,
    NbTabsetModule,
    // NbButtonModule,
    // LeafletModule,
    // NbButtonModule,
  ],
  declarations: [
    ProgressSectionComponent, // TODO. arrange this. too much for one file.
    DashboardComponent,
    ProfitCardComponent,
    StatsCardFrontComponent,
    StatsCardBackComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    TrafficBackCardComponent,
    TrafficBarChartComponent,
    TrafficBarComponent,
    TrafficFrontCardComponent,
    TrafficCardsHeaderComponent,
    TrafficRevealCardComponent,
    ChartsPanelComponent,
    ProfitChartComponent,
    OrdersChartComponent,
    ChartPanelSummaryComponent,
    ChartPanelHeaderComponent,
    LegendChartComponent,
    UserActivityComponent,
    ElectricityChartComponent,
    ElectricityComponent,
    PieChartComponent,
  ],
  providers: [
    StatsProgressBarService,
    StatsBarService,
    NbThemeService,
    LayoutService,
    ProfitBarAnimationChartService,
    TrafficListService,
    TrafficBarService,
    PeriodsService,
    OrdersChartService,
    OrdersProfitChartService,
    UserActivityService,
    ElectricityService,
  ]
})
export class DashboardModule { }
