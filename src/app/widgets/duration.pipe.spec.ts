import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
  let durationPipe: DurationPipe;

  beforeEach(() => {
    durationPipe = new DurationPipe();
  });

  it('create an instance', () => {
    expect(durationPipe).toBeTruthy();
  });

  it('should full format length', () => {
    expect(durationPipe.transform(95)).toBe('1h 35min');
  });

  it('should format only minutes length', () => {
    expect(durationPipe.transform(55)).toBe('55min');
  });

  it('should accept zero value', () => {
    expect(durationPipe.transform(0)).toBe('no data');
  });

  it('should accept null value', () => {
    expect(durationPipe.transform(null)).toBe('no data');
  });

  it('should accept undefined value', () => {
    expect(durationPipe.transform(undefined)).toBe('no data');
  });

});
