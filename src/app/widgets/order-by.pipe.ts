import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';
import {fromJS} from 'immutable';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe<T> implements PipeTransform {

  transform(value: T[], props?, orders?): T[] {
    if (value) {
      return fromJS(_.orderBy(value, props, orders));
    } else {
      return [];
    }
  }

}
