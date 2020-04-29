import { OrdersChartService } from './orders-chart.service';
import { TrafficListService } from './traffic-list.service';
import { TrafficBarService } from './traffic-bar.service';
import { StatsBarService } from './stats-bar.service';
import { StatsBarAnimationChartComponent } from './../../pages/dashboard/profit-card/front-side/stats-bar-animation-chart.component';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { PeriodsService } from './periods.service';
import { OrdersProfitChartService } from './orders-profit-chart.service';
import { ProfitChartService } from './profit-chart.service';

const SERVICES = [
  UserService,
  ProfitBarAnimationChartService,
  StatsBarAnimationChartComponent,
  StatsBarService,
  TrafficBarService,
  TrafficListService,
  PeriodsService,
  OrdersChartService, 
  OrdersProfitChartService,
  ProfitChartService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
