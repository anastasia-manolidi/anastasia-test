import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elemRef: ElementRef ,private renderer: Renderer2){
    renderer.listen(elemRef, 'click', () => {
      console.log(this);
    });
  }

}
