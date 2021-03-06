import {OrderByPipe} from './order-by.pipe';
import {fromJS, List} from 'immutable';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should accept null/undefined', () => {
    expect(pipe.transform(undefined)).toBeDefined();
    expect(pipe.transform(null)).toBeDefined();
  });

  it('should sort primitives', () => {
    expect(pipe.transform(List.of(2, 5, 8, 1, 0, 1))).toEqual(List.of(0, 1, 1, 2, 5, 8));
  });

  it('should sort objects', () => {
    expect(pipe.transform(List.of({prop: 2}, {prop: 5}, {prop: 8}, {prop: 1}, {prop: 0}, {prop: 1}), ['prop']))
      .toEqual(fromJS([{prop: 0}, {prop: 1}, {prop: 1}, {prop: 2}, {prop: 5}, {prop: 8}]));
  });

  it('should sort objects DESC', () => {
    expect(pipe.transform(List.of({prop: 2}, {prop: 5}, {prop: 8}, {prop: 1}, {prop: 0}, {prop: 1}), ['prop'], ['desc']))
      .toEqual(fromJS([
        {prop: 8},
        {prop: 5},
        {prop: 2},
        {prop: 1},
        {prop: 1},
        {prop: 0},
      ]));
  });

});
