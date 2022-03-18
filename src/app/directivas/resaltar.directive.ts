import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  
  @Input('appResaltar') resaltarColor:string = 'teal';
  @Input() colorBase:string = '';

  constructor(private el : ElementRef) {
    console.log(el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('onMouseEnter');
    this.resaltar(this.resaltarColor || this.colorBase ||'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('onMouseLeave');
    this.resaltar('');
  }

  private resaltar(color:string):void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
