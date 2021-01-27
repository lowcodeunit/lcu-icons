import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SVGToMatIconModel } from '../../models/svg-to-mat-icon.model';
export declare class SvgToMatIconService {
    protected domSanitizer: DomSanitizer;
    protected matIconRegistry: MatIconRegistry;
    /**
     * List of icons
     */
    protected icons: Array<SVGToMatIconModel>;
    constructor(domSanitizer: DomSanitizer, matIconRegistry: MatIconRegistry);
    /**
     *
     * @param icons List of svg icons
     * @param basePath base path to svg icons (/assets/svgs/etc.)
     */
    SetIcons(icons: Array<SVGToMatIconModel>, basePath: string): void;
    /**
     * Return list of icons
     */
    GetIcons(): Array<SVGToMatIconModel>;
    /**
     * Register icon path
     *
     * @param url path to svg
     */
    protected setPath(url: string): SafeResourceUrl;
}
//# sourceMappingURL=svg-to-mat-icon.service.d.ts.map