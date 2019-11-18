import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      const hours = Math.trunc(value / 60);
      const minutes = value - hours * 60;

      let hStr = '';
      if (hours > 0) {
        hStr = `${hours}h `;
      }

      return `${hStr}${minutes}min`;
    } else {
      return 'no data';
    }

  }

}
