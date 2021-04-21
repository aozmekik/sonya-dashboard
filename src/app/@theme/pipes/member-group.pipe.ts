import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../../pages/members/member';

@Pipe({ name: 'memberGroup' })
export class MemberGroupPipe implements PipeTransform {

  transform(group: number): string {
    return Member.groups[group];
  }
}
