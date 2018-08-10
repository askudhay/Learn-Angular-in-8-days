import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mB'
})
export class MBPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value / 1024).toFixed(10) + 'MB';
  }

}
