import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2010', '2011', '2012',
      '2013', '2014', '2015',
      '2016', '2017', '2018',
    ];
  }

  getMonths() {
    return [
      'Oca', 'Şub', 'Mar',
      'Nis', 'May', 'Haz',
      'Tem', 'Ağu', 'Eyl',
      'Eki', 'Kas', 'Ara',
    ];
  }

  getWeeks() {
    return [
      'Pazt',
      'Salı',
      'Çarş',
      'Perş',
      'Cuma',
      'Cmts',
      'Pazar',
    ];
  }
}