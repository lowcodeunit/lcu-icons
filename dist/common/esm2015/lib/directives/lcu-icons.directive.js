import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ThemeColorPickerService } from '@lcu/common';
export class LcuIconsDirective {
    constructor(elRef, renderer, themeService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.themeService = themeService;
    }
    onMouseEnter() {
        this.hoverEffect(this.getThemeColor(), 'underline');
    }
    onMouseLeave() {
        this.hoverEffect('', 'initial');
    }
    ngOnInit() {
        this.currentColor = this.getThemeColor();
    }
    getThemeColor() {
        const theme = this.themeService.GetColorClass().value;
        return 'color-swatch-' + theme.substring(theme.indexOf('-') + 1, theme.lastIndexOf('-'));
    }
    hoverEffect(color, decoration) {
        const title = this.elRef.nativeElement.querySelector('.mat-card-title');
        this.renderer.setStyle(title, 'text-decoration', decoration);
        if (!color && this.currentColor) {
            this.renderer.removeClass(title, this.currentColor);
        }
        else if (color !== this.currentColor) {
            this.renderer.removeClass(title, this.currentColor);
        }
        if (color) {
            this.renderer.addClass(title, color);
            this.currentColor = color;
        }
    }
}
LcuIconsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lcu-icons]'
            },] }
];
LcuIconsDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ThemeColorPickerService }
];
LcuIconsDirective.propDecorators = {
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWljb25zLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hLzEvcy9wcm9qZWN0cy9jb21tb24vc3JjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGN1LWljb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUt0RCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQ1UsS0FBaUIsRUFDakIsUUFBbUIsRUFDbkIsWUFBcUM7UUFGckMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtJQUMzQyxDQUFDO0lBRXVCLFlBQVk7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUUyQixZQUFZO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDdEQsT0FBTyxlQUFlLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFhLEVBQUUsVUFBa0I7UUFDbkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7WUFMMkIsVUFBVTtZQUFnQixTQUFTO1lBQ3RELHVCQUF1Qjs7OzJCQWU3QixZQUFZLFNBQUMsWUFBWTsyQkFJekIsWUFBWSxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICdAbGN1L2NvbW1vbic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tsY3UtaWNvbnNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGN1SWNvbnNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogVGhlbWVDb2xvclBpY2tlclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgdGhpcy5ob3ZlckVmZmVjdCh0aGlzLmdldFRoZW1lQ29sb3IoKSwgJ3VuZGVybGluZScpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIHRoaXMuaG92ZXJFZmZlY3QoJycsICdpbml0aWFsJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRDb2xvciA9IHRoaXMuZ2V0VGhlbWVDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUaGVtZUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHRoaXMudGhlbWVTZXJ2aWNlLkdldENvbG9yQ2xhc3MoKS52YWx1ZTtcclxuICAgIHJldHVybiAnY29sb3Itc3dhdGNoLScgKyB0aGVtZS5zdWJzdHJpbmcodGhlbWUuaW5kZXhPZignLScpICsgMSwgdGhlbWUubGFzdEluZGV4T2YoJy0nKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvdmVyRWZmZWN0KGNvbG9yOiBzdHJpbmcsIGRlY29yYXRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hdC1jYXJkLXRpdGxlJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRpdGxlLCAndGV4dC1kZWNvcmF0aW9uJywgZGVjb3JhdGlvbik7XHJcblxyXG4gICAgaWYgKCFjb2xvciAmJiB0aGlzLmN1cnJlbnRDb2xvcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRpdGxlLCB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbG9yICE9PSB0aGlzLmN1cnJlbnRDb2xvcikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRpdGxlLCB0aGlzLmN1cnJlbnRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGl0bGUsIGNvbG9yKTtcclxuICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==