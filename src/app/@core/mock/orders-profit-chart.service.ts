import { ProfitChartService } from './profit-chart.service';
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChart} from '../data/orders-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChart} from '../data/profit-chart';
import { OrdersChartService } from './orders-chart.service';

@Injectable()
export class OrdersProfitChartService extends OrdersProfitChartData {

  private summary = [
    {
      title: 'Bu Yıl',
      value: 3654,
    },
    {
      title: 'Bu Ay',
      value: 946,
    },
    {
      title: 'Bu Hafta',
      value: 654,
    },
    {
      title: 'Bugün',
      value: 230,
    },
  ];

  constructor(private ordersChartService: OrdersChartService,
              private profitChartService: ProfitChartService) {
    super();
  }

  getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]> {
    return observableOf(this.summary);
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.ordersChartService.getOrdersChartData(period));
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.profitChartService.getProfitChartData(period));
  }
}
