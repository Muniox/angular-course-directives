import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit  {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  // jest to lepsze podejście, ponieważ angular może działać jako serwis worker, przez co nie będziemy mieli dostępu
  // do elementu dom, dzięki renderer możemy, zmieć style bez dostępu do "DOM"

  @HostListener('mouseenter') mouseover(
    // eventData: MouseEvent
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') mouseout(
    // eventData: MouseEvent
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent'
  }
}
