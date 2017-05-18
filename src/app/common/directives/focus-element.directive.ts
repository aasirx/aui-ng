import {AfterViewInit, Directive, ElementRef} from '@angular/core';

/**
 * Directive to move the focus to element where the directive it defined as attribute.
 */
@Directive({
    selector: '[auiNgAutoFocus]'
})
export class AuiNgAutoFocusDirective implements AfterViewInit {

    constructor(
        private elementRef: ElementRef
    ) {}

    ngAfterViewInit() {
        this.setFocus();
    }

    setFocus() {
        this.elementRef.nativeElement.focus();
    }
}
