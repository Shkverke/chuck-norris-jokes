import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  getRandomColor() {
    const color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
    return color;
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.getRandomColor();
  }
}
