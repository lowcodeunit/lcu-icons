import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/material/icon";
/**
 * Registers custom svg icons to use with <mat-icon>
 *
 * <mat-icon color="primary" svgIcon="svgHome"></mat-icon>
 *
 * Can use material theme colors when SVG fill property is removed
 */
export class SvgToMatIconService {
    constructor(domSanitizer, matIconRegistry) {
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
    }
    /**
     *
     * @param icons List of svg icons
     * @param basePath base path to svg icons (/assets/svgs/etc.)
     */
    SetIcons(icons, basePath) {
        this.icons = icons;
        this.icons.forEach((icon) => {
            this.matIconRegistry.addSvgIcon(icon.Name, this.setPath(`${basePath}${icon.IconPath}`));
        });
    }
    /**
     * Return list of icons
     */
    GetIcons() {
        return this.icons;
    }
    /**
     * Register icon path
     *
     * @param url path to svg
     */
    setPath(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SvgToMatIconService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SvgToMatIconService_Factory() { return new SvgToMatIconService(i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.MatIconRegistry)); }, token: SvgToMatIconService, providedIn: "root" });
SvgToMatIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SvgToMatIconService.ctorParameters = () => [
    { type: DomSanitizer },
    { type: MatIconRegistry }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXRvLW1hdC1pY29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRDovYS8xL3MvcHJvamVjdHMvY29tbW9uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pY29ucy9zdmctdG8tbWF0LWljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFtQixNQUFNLDJCQUEyQixDQUFDOzs7O0FBTzFFOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyxtQkFBbUI7SUFROUIsWUFDWSxZQUEwQixFQUMxQixlQUFnQztRQURoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDRyxRQUFRLENBQUMsS0FBK0IsRUFBRSxRQUFnQjtRQUUvRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQXVCLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FDN0IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sT0FBTyxDQUFDLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLDhCQUE4QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7WUF2REosVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSxZQUFZO1lBRFosZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0SWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFNWR1RvTWF0SWNvbk1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N2Zy10by1tYXQtaWNvbi5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBzdmcgaWNvbnMgdG8gdXNlIHdpdGggPG1hdC1pY29uPlxyXG4gKlxyXG4gKiA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCIgc3ZnSWNvbj1cInN2Z0hvbWVcIj48L21hdC1pY29uPlxyXG4gKlxyXG4gKiBDYW4gdXNlIG1hdGVyaWFsIHRoZW1lIGNvbG9ycyB3aGVuIFNWRyBmaWxsIHByb3BlcnR5IGlzIHJlbW92ZWRcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgU3ZnVG9NYXRJY29uU2VydmljZSB7XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIExpc3Qgb2YgaWNvbnNcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgaWNvbnM6IEFycmF5PFNWR1RvTWF0SWNvbk1vZGVsPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcm90ZWN0ZWQgbWF0SWNvblJlZ2lzdHJ5OiBNYXRJY29uUmVnaXN0cnkpIHtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSBpY29ucyBMaXN0IG9mIHN2ZyBpY29uc1xyXG4gICAgKiBAcGFyYW0gYmFzZVBhdGggYmFzZSBwYXRoIHRvIHN2ZyBpY29ucyAoL2Fzc2V0cy9zdmdzL2V0Yy4pXHJcbiAgICAqL1xyXG4gIHB1YmxpYyBTZXRJY29ucyhpY29uczogQXJyYXk8U1ZHVG9NYXRJY29uTW9kZWw+LCBiYXNlUGF0aDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5pY29ucyA9IGljb25zO1xyXG5cclxuICAgIHRoaXMuaWNvbnMuZm9yRWFjaCgoaWNvbjogU1ZHVG9NYXRJY29uTW9kZWwpID0+IHtcclxuICAgICAgdGhpcy5tYXRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbihcclxuICAgICAgICBpY29uLk5hbWUsXHJcbiAgICAgICAgdGhpcy5zZXRQYXRoKGAke2Jhc2VQYXRofSR7aWNvbi5JY29uUGF0aH1gKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiBsaXN0IG9mIGljb25zXHJcbiAgICovXHJcbiAgcHVibGljIEdldEljb25zKCk6IEFycmF5PFNWR1RvTWF0SWNvbk1vZGVsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pY29ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGljb24gcGF0aFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCBwYXRoIHRvIHN2Z1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzZXRQYXRoKHVybDogc3RyaW5nKTogU2FmZVJlc291cmNlVXJsICB7XHJcbiAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVybCk7XHJcbiAgICB9XHJcbn1cclxuIl19