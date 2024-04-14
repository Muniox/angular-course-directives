import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit  {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  // jest to lepsze podejście, ponieważ angular może działać jako serwis worker, przez co nie będziemy mieli dostępu
  // do elementu dom, dzięki renderer możemy zmieć style bez dostępu do DOM
}
