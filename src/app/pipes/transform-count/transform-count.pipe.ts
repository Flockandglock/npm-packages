import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCount'
})
export class TransformCountPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000) {
      return `${Math.floor(value/1000)}K`;
    } else if (value >= 1000000) {
      return `${Math.floor(value/1000000)}M`;
    } else {
      return `${value}`;
    }
  }

}
