"use strict";!function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}();