import { TrafficListService } from './mock/traffic-list.service';
import { TrafficBarData } from './data/traffic-bar';
import { StatsProgressBarService } from './mock/stats-progress-bar.service';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService } from './utils';
import { UserData } from './data/users';
import { UserService } from './mock/users.service';
import { MockDataModule } from './mock/mock-data.module';
import { StatsBarData } from './data/stats-bar';
import { StatsBarService } from './mock/stats-bar.service';
import { StatsProgressBarData } from './data/stats-progress-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';
import { ProfitBarAnimationChartService } from './mock/profit-bar-animation-chart.service';
import { TrafficBarService } from './mock/traffic-bar.service';
import { TrafficListData } from './data/traffic-list';
import { OrdersChartData } from './data/orders-chart';
import { OrdersChartService } from './mock/orders-chart.service';
import { OrdersProfitChartData } from './data/orders-profit-chart';
import { OrdersProfitChartService } from './mock/orders-profit-chart.service';

const socialLinks = [
  // {
  //   url: 'https://github.com/akveo/nebular',
  //   target: '_blank',
  //   icon: 'github',
  // },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: StatsBarData, useClass: StatsBarService},
  { provide: StatsProgressBarData, useClass: StatsProgressBarService},
  { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService},
  { provide: TrafficBarData, useClass: TrafficBarService},
  { provide: TrafficListData, useClass: TrafficListService},
  { provide: OrdersChartData, useClass: OrdersChartService},
  { provide: OrdersProfitChartData, useClass: OrdersProfitChartService},
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
