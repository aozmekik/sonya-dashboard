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
import { NbCardModule, NbProgressBarModule, NbThemeService, NbIconModule, NbListComponent, NbListModule, NbSelectModule } from '@nebular/theme';

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
  ]
})
export class DashboardModule { }
