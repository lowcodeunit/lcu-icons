import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, Input, Output, Directive, ElementRef, Renderer2, HostListener, ɵɵinject, NgModule, INJECTOR, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeColorPickerService, FathymSharedModule, MaterialModule, StateContext } from '@lcu/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

class LcuIconsService {
    constructor() { }
    getCardData() {
        return [
            {
                LcuIconsId: 1,
                Content: `A coding standard makes sure that all the developers working on the project are following certain specified guidelines.
                  The code can be easily understood and a proper consistency is maintained. Consistency has a positive impact on the
                  quality of the program and one should maintain it while coding. Also, it should be taken care that the guidelines are
                  homogeneously followed across different levels of the system and they do not contradict each other. The finished program
                  code should look like that it has been written by a single developer, in a single session.`,
                Title: 'Angular Style Guide',
                Subtitle: 'Best Practices for Developers to Follow',
                Icon: 'done_all',
                Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/35/Style-Guide-Angular'
            },
            {
                LcuIconsId: 2,
                Content: `A style guide helps to ensure a continuous brand experience. It means that no matter how, when or where a customer
                  experiences a brand, they are experiencing the same underlying traits. It’s this consistency across every touch-point
                  that helps build a brand and brand loyalty. And with 2.4 billion Internet users around the world (and growing), it’s
                  really more critical than ever for businesses to establish a comprehensive style guide.`,
                Title: 'Fathym UI/UX Style Guide',
                Subtitle: `Follow Some of Fathym's Favorite Designs`,
                Icon: 'palette',
                Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/37/Style-Guide-Design'
            },
            {
                LcuIconsId: 3,
                Content: `Fathym’s low-code framework is designed to give developers the freedom and best practice workflows to rapidly create
                  IoT and data-driven applications that are agnostic to tools, platforms and clouds. Each element of the framework is
                  built from Low-Code Units (LCUs) – modular building blocks of code that can be as large as an application, or as
                  small as a data visualization.`,
                Title: `Fathym's Low-Code Framework`,
                Subtitle: `Find More Information About Fathym's IoT Solutions`,
                Icon: 'code',
                Url: 'https://fathym.com/low-code-framework/'
            }
        ];
    }
}
LcuIconsService.ɵprov = ɵɵdefineInjectable({ factory: function LcuIconsService_Factory() { return new LcuIconsService(); }, token: LcuIconsService, providedIn: "root" });
LcuIconsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LcuIconsService.ctorParameters = () => [];

class LcuIconsComponent {
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

class LcuIconsDirective {
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

/**
 * Registers custom svg icons to use with <mat-icon>
 *
 * <mat-icon color="primary" svgIcon="svgHome"></mat-icon>
 *
 * Can use material theme colors when SVG fill property is removed
 */
class SvgToMatIconService {
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
SvgToMatIconService.ɵprov = ɵɵdefineInjectable({ factory: function SvgToMatIconService_Factory() { return new SvgToMatIconService(ɵɵinject(DomSanitizer), ɵɵinject(MatIconRegistry)); }, token: SvgToMatIconService, providedIn: "root" });
SvgToMatIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SvgToMatIconService.ctorParameters = () => [
    { type: DomSanitizer },
    { type: MatIconRegistry }
];

class LcuIconsModule {
    static forRoot() {
        return {
            ngModule: LcuIconsModule,
            providers: [LcuIconsService, SvgToMatIconService]
        };
    }
}
LcuIconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LcuIconsComponent, LcuIconsDirective],
                imports: [
                    FathymSharedModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FlexLayoutModule,
                    MaterialModule
                ],
                exports: [LcuIconsComponent, LcuIconsDirective],
                entryComponents: []
            },] }
];

class LcuIconsModel {
}

class LcuIconsManagementStateContext extends StateContext {
    // Constructors
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    // API Methods
    GetLcuIconsById(id) {
        this.Execute({
            Arguments: {
                LcuIconsId: id
            },
            Type: 'GetLcuIconsById'
        });
    }
    //  Helpers
    defaultValue() {
        return { Loading: true };
    }
    loadStateKey() {
        return 'main';
    }
    loadStateName() {
        return 'lcu-icons';
    }
}
LcuIconsManagementStateContext.ɵprov = ɵɵdefineInjectable({ factory: function LcuIconsManagementStateContext_Factory() { return new LcuIconsManagementStateContext(ɵɵinject(INJECTOR)); }, token: LcuIconsManagementStateContext, providedIn: "root" });
LcuIconsManagementStateContext.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LcuIconsManagementStateContext.ctorParameters = () => [
    { type: Injector }
];

class LcuIconsManagementState {
}

class LcuIconsUtils {
    static upperLcuIcons(input) {
        return input.toUpperCase();
    }
}

class SVGToMatIconModel {
    constructor() { }
}

/**
 * Generated bundle index. Do not edit.
 */

export { LcuIconsComponent, LcuIconsDirective, LcuIconsManagementState, LcuIconsManagementStateContext, LcuIconsModel, LcuIconsModule, LcuIconsService, LcuIconsUtils, SVGToMatIconModel, SvgToMatIconService };
//# sourceMappingURL=lowcodeunit-lcu-icons-common.js.map
