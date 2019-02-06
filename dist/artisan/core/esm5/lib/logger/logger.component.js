/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Logger } from './logger';
var LoggerComponent = /** @class */ (function () {
    function LoggerComponent(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    LoggerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-logger',
                    template: "<div class=\"error-http\" *ngIf=\"logger.httpError\">\n\t<span>error</span>&nbsp;\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\n</div>\n<!--\n<div *ngIf=\"logger.logs.length\">\n\t<ul class=\"list-group \">\n\t\t<li class=\"list-group-item\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\n\t\t</li>\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\n\t\t\t<span>{{log}}</span>\n\t\t</li>\n\t</ul>\n\t<br>\n</div>\n-->\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [".error-http{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"]
                }] }
    ];
    /** @nocollapse */
    LoggerComponent.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return LoggerComponent;
}());
export { LoggerComponent };
if (false) {
    /** @type {?} */
    LoggerComponent.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQztJQU9DLHlCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7Ozs7SUFFdEMsa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBVkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxXQUFXO29CQUNyQixxdEJBQXNDO29CQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7aUJBQ3pDOzs7O2dCQVBRLE1BQU07O0lBYWYsc0JBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSxlQUFlOzs7SUFDZixpQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd3MtbG9nZ2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xvZ2dlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2xvZ2dlci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29uc3RydWN0b3IocHVibGljIGxvZ2dlcjogTG9nZ2VyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxufVxuIl19