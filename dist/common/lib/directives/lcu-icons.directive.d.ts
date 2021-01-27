import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ThemeColorPickerService } from '@lcu/common';
export declare class LcuIconsDirective implements OnInit {
    private elRef;
    private renderer;
    private themeService;
    private currentColor;
    constructor(elRef: ElementRef, renderer: Renderer2, themeService: ThemeColorPickerService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    ngOnInit(): void;
    private getThemeColor;
    private hoverEffect;
}
//# sourceMappingURL=lcu-icons.directive.d.ts.map