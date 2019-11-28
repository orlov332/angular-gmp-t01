import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe<T> implements PipeTransform {

  transform(value: Array<T>, props?, orders?): Array<T> {
    return _.orderBy(value, props, orders);
  }

}
