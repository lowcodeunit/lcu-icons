(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/flex-layout'), require('@lcu/common'), require('@angular/material/icon'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@lowcodeunit/lcu-icons-common', ['exports', '@angular/core', '@angular/forms', '@angular/flex-layout', '@lcu/common', '@angular/material/icon', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.lowcodeunit = global.lowcodeunit || {}, global.lowcodeunit['lcu-icons-common'] = {}), global.ng.core, global.ng.forms, global.ng.flexLayout, global.common, global.ng.material.icon, global.ng.platformBrowser));
}(this, (function (exports, i0, forms, flexLayout, common, i2, i1) { 'use strict';

    var LcuIconsService = /** @class */ (function () {
        function LcuIconsService() {
        }
        LcuIconsService.prototype.getCardData = function () {
            return [
                {
                    LcuIconsId: 1,
                    Content: "A coding standard makes sure that all the developers working on the project are following certain specified guidelines.\n                  The code can be easily understood and a proper consistency is maintained. Consistency has a positive impact on the\n                  quality of the program and one should maintain it while coding. Also, it should be taken care that the guidelines are\n                  homogeneously followed across different levels of the system and they do not contradict each other. The finished program\n                  code should look like that it has been written by a single developer, in a single session.",
                    Title: 'Angular Style Guide',
                    Subtitle: 'Best Practices for Developers to Follow',
                    Icon: 'done_all',
                    Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/35/Style-Guide-Angular'
                },
                {
                    LcuIconsId: 2,
                    Content: "A style guide helps to ensure a continuous brand experience. It means that no matter how, when or where a customer\n                  experiences a brand, they are experiencing the same underlying traits. It\u2019s this consistency across every touch-point\n                  that helps build a brand and brand loyalty. And with 2.4 billion Internet users around the world (and growing), it\u2019s\n                  really more critical than ever for businesses to establish a comprehensive style guide.",
                    Title: 'Fathym UI/UX Style Guide',
                    Subtitle: "Follow Some of Fathym's Favorite Designs",
                    Icon: 'palette',
                    Url: 'https://fathym.visualstudio.com/Documentation/_wiki/wikis/Documentation.wiki/37/Style-Guide-Design'
                },
                {
                    LcuIconsId: 3,
                    Content: "Fathym\u2019s low-code framework is designed to give developers the freedom and best practice workflows to rapidly create\n                  IoT and data-driven applications that are agnostic to tools, platforms and clouds. Each element of the framework is\n                  built from Low-Code Units (LCUs) \u2013 modular building blocks of code that can be as large as an application, or as\n                  small as a data visualization.",
                    Title: "Fathym's Low-Code Framework",
                    Subtitle: "Find More Information About Fathym's IoT Solutions",
                    Icon: 'code',
                    Url: 'https://fathym.com/low-code-framework/'
                }
            ];
        };
        return LcuIconsService;
    }());
    LcuIconsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LcuIconsService_Factory() { return new LcuIconsService(); }, token: LcuIconsService, providedIn: "root" });
    LcuIconsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LcuIconsService.ctorParameters = function () { return []; };

    var LcuIconsComponent = /** @class */ (function () {
        function LcuIconsComponent() {
            this.cardSelected = new i0.EventEmitter();
        }
        LcuIconsComponent.prototype.ngOnInit = function () { };
        LcuIconsComponent.prototype.SelectCard = function (url) {
            this.cardSelected.emit();
            if (url) {
                window.open(url);
            }
        };
        return LcuIconsComponent;
    }());
    LcuIconsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lcu-lcu-icons',
                    template: "<mat-card lcu-icons id=\"lcuIconsCard{{card.LcuIconsId}}\" class=\"lcu-icons-card\" (click)=\"SelectCard(card.Url)\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"lcu-icons-card-avatar\">\r\n        <mat-icon color=\"primary\">{{card.Icon}}</mat-icon>\r\n        </div>\r\n        <mat-card-title class=\"paragraph-title\">{{card.Title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"plain-text\">{{card.Subtitle}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"lcu-icons-card-content\">\r\n        {{card.Content}}\r\n    </mat-card-content>\r\n</mat-card>\r\n  ",
                    styles: [".lcu-icons-card{cursor:pointer;display:inline-block;margin:5px;min-height:250px}.lcu-icons-card .lcu-icons-card-avatar .mat-icon{font-size:40px}.lcu-icons-card .lcu-icons-card-content{line-height:20px;padding:5px;text-align:justify}"]
                },] }
    ];
    LcuIconsComponent.ctorParameters = function () { return []; };
    LcuIconsComponent.propDecorators = {
        card: [{ type: i0.Input }],
        cardSelected: [{ type: i0.Output }]
    };

    var LcuIconsDirective = /** @class */ (function () {
        function LcuIconsDirective(elRef, renderer, themeService) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.themeService = themeService;
        }
        LcuIconsDirective.prototype.onMouseEnter = function () {
            this.hoverEffect(this.getThemeColor(), 'underline');
        };
        LcuIconsDirective.prototype.onMouseLeave = function () {
            this.hoverEffect('', 'initial');
        };
        LcuIconsDirective.prototype.ngOnInit = function () {
            this.currentColor = this.getThemeColor();
        };
        LcuIconsDirective.prototype.getThemeColor = function () {
            var theme = this.themeService.GetColorClass().value;
            return 'color-swatch-' + theme.substring(theme.indexOf('-') + 1, theme.lastIndexOf('-'));
        };
        LcuIconsDirective.prototype.hoverEffect = function (color, decoration) {
            var title = this.elRef.nativeElement.querySelector('.mat-card-title');
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
        };
        return LcuIconsDirective;
    }());
    LcuIconsDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[lcu-icons]'
                },] }
    ];
    LcuIconsDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: common.ThemeColorPickerService }
    ]; };
    LcuIconsDirective.propDecorators = {
        onMouseEnter: [{ type: i0.HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: i0.HostListener, args: ['mouseleave',] }]
    };

    /**
     * Registers custom svg icons to use with <mat-icon>
     *
     * <mat-icon color="primary" svgIcon="svgHome"></mat-icon>
     *
     * Can use material theme colors when SVG fill property is removed
     */
    var SvgToMatIconService = /** @class */ (function () {
        function SvgToMatIconService(domSanitizer, matIconRegistry) {
            this.domSanitizer = domSanitizer;
            this.matIconRegistry = matIconRegistry;
        }
        /**
         *
         * @param icons List of svg icons
         * @param basePath base path to svg icons (/assets/svgs/etc.)
         */
        SvgToMatIconService.prototype.SetIcons = function (icons, basePath) {
            var _this = this;
            this.icons = icons;
            this.icons.forEach(function (icon) {
                _this.matIconRegistry.addSvgIcon(icon.Name, _this.setPath("" + basePath + icon.IconPath));
            });
        };
        /**
         * Return list of icons
         */
        SvgToMatIconService.prototype.GetIcons = function () {
            return this.icons;
        };
        /**
         * Register icon path
         *
         * @param url path to svg
         */
        SvgToMatIconService.prototype.setPath = function (url) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SvgToMatIconService;
    }());
    SvgToMatIconService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SvgToMatIconService_Factory() { return new SvgToMatIconService(i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.MatIconRegistry)); }, token: SvgToMatIconService, providedIn: "root" });
    SvgToMatIconService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SvgToMatIconService.ctorParameters = function () { return [
        { type: i1.DomSanitizer },
        { type: i2.MatIconRegistry }
    ]; };

    var LcuIconsModule = /** @class */ (function () {
        function LcuIconsModule() {
        }
        LcuIconsModule.forRoot = function () {
            return {
                ngModule: LcuIconsModule,
                providers: [LcuIconsService, SvgToMatIconService]
            };
        };
        return LcuIconsModule;
    }());
    LcuIconsModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LcuIconsComponent, LcuIconsDirective],
                    imports: [
                        common.FathymSharedModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        flexLayout.FlexLayoutModule,
                        common.MaterialModule
                    ],
                    exports: [LcuIconsComponent, LcuIconsDirective],
                    entryComponents: []
                },] }
    ];

    var LcuIconsModel = /** @class */ (function () {
        function LcuIconsModel() {
        }
        return LcuIconsModel;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var LcuIconsManagementStateContext = /** @class */ (function (_super) {
        __extends(LcuIconsManagementStateContext, _super);
        // Constructors
        function LcuIconsManagementStateContext(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        // API Methods
        LcuIconsManagementStateContext.prototype.GetLcuIconsById = function (id) {
            this.Execute({
                Arguments: {
                    LcuIconsId: id
                },
                Type: 'GetLcuIconsById'
            });
        };
        //  Helpers
        LcuIconsManagementStateContext.prototype.defaultValue = function () {
            return { Loading: true };
        };
        LcuIconsManagementStateContext.prototype.loadStateKey = function () {
            return 'main';
        };
        LcuIconsManagementStateContext.prototype.loadStateName = function () {
            return 'lcu-icons';
        };
        return LcuIconsManagementStateContext;
    }(common.StateContext));
    LcuIconsManagementStateContext.ɵprov = i0.ɵɵdefineInjectable({ factory: function LcuIconsManagementStateContext_Factory() { return new LcuIconsManagementStateContext(i0.ɵɵinject(i0.INJECTOR)); }, token: LcuIconsManagementStateContext, providedIn: "root" });
    LcuIconsManagementStateContext.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LcuIconsManagementStateContext.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };

    var LcuIconsManagementState = /** @class */ (function () {
        function LcuIconsManagementState() {
        }
        return LcuIconsManagementState;
    }());

    var LcuIconsUtils = /** @class */ (function () {
        function LcuIconsUtils() {
        }
        LcuIconsUtils.upperLcuIcons = function (input) {
            return input.toUpperCase();
        };
        return LcuIconsUtils;
    }());

    var SVGToMatIconModel = /** @class */ (function () {
        function SVGToMatIconModel() {
        }
        return SVGToMatIconModel;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LcuIconsComponent = LcuIconsComponent;
    exports.LcuIconsDirective = LcuIconsDirective;
    exports.LcuIconsManagementState = LcuIconsManagementState;
    exports.LcuIconsManagementStateContext = LcuIconsManagementStateContext;
    exports.LcuIconsModel = LcuIconsModel;
    exports.LcuIconsModule = LcuIconsModule;
    exports.LcuIconsService = LcuIconsService;
    exports.LcuIconsUtils = LcuIconsUtils;
    exports.SVGToMatIconModel = SVGToMatIconModel;
    exports.SvgToMatIconService = SvgToMatIconService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lowcodeunit-lcu-icons-common.umd.js.map
