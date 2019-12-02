import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';
import {fromJS, List} from 'immutable';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe<T> implements PipeTransform {

  transform(value: List<T>, props?, orders?): List<T> {
    if (value) {
      return fromJS(_.orderBy(value.toJS(), props, orders));
    } else {
      return List.of();
    }
  }

}
