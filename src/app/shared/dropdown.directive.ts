import {
  Directive,
  HostListener,
  HostBinding,
  ViewChild,
  Renderer2,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen: Boolean = false;
  constructor(private someEl: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') click(eventData: Event) {
    const dropdownEl = this.someEl.nativeElement.getElementsByClassName('dropdown-menu')[0];
    if (this.isOpen) {
      this.renderer.removeClass(this.someEl.nativeElement, 'show');
      this.renderer.removeClass(dropdownEl, 'show');
    } else {
      this.renderer.addClass(this.someEl.nativeElement, 'show');
      this.renderer.addClass(dropdownEl, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}

