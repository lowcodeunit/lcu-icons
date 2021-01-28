import { Component, Input, Output, EventEmitter } from '@angular/core';
export class LcuIconsComponent {
    constructor() {
        this.cardSelected = new EventEmitter();
    }
    ngOnInit() { }
    SelectCard(url) {
        this.cardSelected.emit();
        if (url) {
            window.open(url);
        }
    }
}
LcuIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lcu-lcu-icons',
                template: "<mat-card lcu-icons id=\"lcuIconsCard{{card.LcuIconsId}}\" class=\"lcu-icons-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-icons-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-icons-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
                styles: [".lcu-icons-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-icons-card .lcu-icons-card-avatar .mat-icon{font-size:40px}.lcu-icons-card .lcu-icons-card-content{line-height:20px;padding:5px;text-align:justify}"]
            },] }
];
LcuIconsComponent.ctorParameters = () => [];
LcuIconsComponent.propDecorators = {
    card: [{ type: Input }],
    cardSelected: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWljb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9hLzEvcy9wcm9qZWN0cy9jb21tb24vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2xjdS1pY29ucy9sY3UtaWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRL0UsTUFBTSxPQUFPLGlCQUFpQjtJQU01QjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUM5QyxDQUFDO0lBRU0sUUFBUSxLQUFXLENBQUM7SUFFcEIsVUFBVSxDQUFDLEdBQVk7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixJQUFJLEdBQUcsRUFBRTtZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw0bkJBQXlDOzthQUUxQzs7OzttQkFHRSxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExjdUljb25zTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGN1LWljb25zLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGN1LWxjdS1pY29ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xjdS1pY29ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGN1LWljb25zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExjdUljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNhcmQ6IExjdUljb25zTW9kZWw7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FyZFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhcmRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gIHB1YmxpYyBTZWxlY3RDYXJkKHVybD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXJkU2VsZWN0ZWQuZW1pdCgpO1xyXG5cclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==