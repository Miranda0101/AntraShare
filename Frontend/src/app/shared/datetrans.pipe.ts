import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetrans'
})
export class DatetransPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): void {
    // const postTime = new Date(value);
    const currTime = Date.now().toString();
    console.log(+currTime-+value);
  }

}
