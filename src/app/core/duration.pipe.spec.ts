import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
  let durationPipe: DurationPipe;

  beforeEach(() => {
    durationPipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(durationPipe).toBeTruthy();
  });

  it('should full format duration', () => {
    expect(durationPipe.transform(95)).toBe('1h 35min');
  });

  it('should format only minutes duration', () => {
    expect(durationPipe.transform(55)).toBe('55min');
  });


});
