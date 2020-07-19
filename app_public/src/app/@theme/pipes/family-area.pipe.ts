import { Pipe, PipeTransform } from '@angular/core';
import { Family } from '../../pages/families/family';

@Pipe({ name: 'area' })
export class FamilyAreaPipe implements PipeTransform {

  transform(area: number): string {
    return Family.Areas[area];
  }
}
