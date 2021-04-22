import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'area' })
export class FamilyAreaPipe implements PipeTransform {

  transform(area: number): number {
    return area;
  }
}
