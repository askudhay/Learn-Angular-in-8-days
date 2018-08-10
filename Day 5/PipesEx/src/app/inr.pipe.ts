import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iNR'
})
export class INRPipe implements PipeTransform {

  transform(no: number, args?: any): any {
    return '₹' + no ;
  }

}
