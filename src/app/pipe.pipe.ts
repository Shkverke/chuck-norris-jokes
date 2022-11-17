import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
})
export class PipePipe implements PipeTransform {
  transform(value: string): string {
    let str = value.charAt(0).toUpperCase() + value.slice(1);
    return str;
  }
}
