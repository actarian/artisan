/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { DisposableComponent } from '../../disposable/disposable.component';
import { TrustPilotService } from './trustpilot.service';
export class TrustPilotWidgetOptions {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.locale = 'it-IT';
        this.styleHeight = '350px';
        this.styleWidth = '100%';
        this.theme = 'light';
        this.group = 'on';
        this.stars = '1,2,3,4,5';
        if (options) {
            Object.assign(this, options);
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static newFromConfig(options) {
        return new TrustPilotWidgetOptions(options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    set(options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    }
}
if (false) {
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.templateId;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.businessunitId;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.businessunitName;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.locale;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.sku;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.styleHeight;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.styleWidth;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.theme;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.group;
    /** @type {?} */
    TrustPilotWidgetOptions.prototype.stars;
}
export class TrustPilotWidgetComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} elementRef
     * @param {?} trustPilot
     */
    constructor(platformId, configService, elementRef, trustPilot) {
        super();
        this.platformId = platformId;
        this.configService = configService;
        this.elementRef = elementRef;
        this.trustPilot = trustPilot;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.configService.options.plugins && !this.configService.options.plugins.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.configService.options.plugins.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(Trustpilot => {
                    Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
                    this.loaded = true;
                });
            }
        }
    }
}
TrustPilotWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ws-trustpilot-widget-component',
                template: "<ng-container>\n\t<ng-container [ngSwitch]=\"options.templateId\">\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\n\t\t\t<!-- PRODUCT REVIEWS -->\n\t\t\t<div class=\"trustpilot-comments\">\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\n\t\t\t<!-- EVALUATE -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\n\t\t\t<!-- MINI -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\n\t\t\t<!-- STARTER -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\n\t\t\t<!-- CAROUSEL -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ng-container>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
            }] }
];
/** @nocollapse */
TrustPilotWidgetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: ElementRef },
    { type: TrustPilotService }
];
TrustPilotWidgetComponent.propDecorators = {
    options: [{ type: Input }],
    sku: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.loaded;
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.trustPilotOptions;
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.options;
    /** @type {?} */
    TrustPilotWidgetComponent.prototype.sku;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TrustPilotWidgetComponent.prototype.trustPilot;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQW9CLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0UsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVluQyxZQUNDLE9BQWlDO1FBVGxDLFdBQU0sR0FBWSxPQUFPLENBQUM7UUFFMUIsZ0JBQVcsR0FBWSxPQUFPLENBQUM7UUFDL0IsZUFBVSxHQUFZLE1BQU0sQ0FBQztRQUM3QixVQUFLLEdBQVksT0FBTyxDQUFDO1FBQ3pCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFZLFdBQVcsQ0FBQztRQUs1QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQTBCO1FBQzlDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBRSxPQUFpQztRQUNyQyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0NBQ0Q7OztJQTdCQSw2Q0FBb0I7O0lBQ3BCLGlEQUF3Qjs7SUFDeEIsbURBQTBCOztJQUMxQix5Q0FBMEI7O0lBQzFCLHNDQUFhOztJQUNiLDhDQUErQjs7SUFDL0IsNkNBQTZCOztJQUM3Qix3Q0FBeUI7O0lBQ3pCLHdDQUFzQjs7SUFDdEIsd0NBQTZCOztBQTZCOUIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjs7Ozs7OztJQU9qRSxZQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixVQUFzQixFQUN0QixVQUE2QjtRQUVyQyxLQUFLLEVBQUUsQ0FBQztRQUxxQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFHckMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDMUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsZ0ZBQWdGO1FBQ2hGLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSw0QkFBNEI7WUFDdEgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDeEIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7YUFDSDtTQUNEO0lBQ0YsQ0FBQzs7O1lBNUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQywwckdBQWlEO2dCQUVqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7eUNBVUUsTUFBTSxTQUFDLFdBQVc7WUFuRFosYUFBYTtZQUZhLFVBQVU7WUFJbEIsaUJBQWlCOzs7c0JBNkMxQyxLQUFLO2tCQUNMLEtBQUs7Ozs7SUFITiwyQ0FBZ0I7O0lBQ2hCLHNEQUFvQzs7SUFDcEMsNENBQTJDOztJQUMzQyx3Q0FBc0I7Ozs7O0lBR3JCLCtDQUErQzs7Ozs7SUFDL0Msa0RBQW9DOzs7OztJQUNwQywrQ0FBOEI7Ozs7O0lBQzlCLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRydXN0UGlsb3RDb25maWcsIFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi90cnVzdHBpbG90LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHR0ZW1wbGF0ZUlkPzogc3RyaW5nO1xuXHRidXNpbmVzc3VuaXRJZD86IHN0cmluZztcblx0YnVzaW5lc3N1bml0TmFtZT86IHN0cmluZztcblx0bG9jYWxlPzogc3RyaW5nID0gJ2l0LUlUJztcblx0c2t1Pzogc3RyaW5nO1xuXHRzdHlsZUhlaWdodD86IHN0cmluZyA9ICczNTBweCc7XG5cdHN0eWxlV2lkdGg/OiBzdHJpbmcgPSAnMTAwJSc7XG5cdHRoZW1lPzogc3RyaW5nID0gJ2xpZ2h0Jztcblx0Z3JvdXA/OiBzdHJpbmcgPSAnb24nO1xuXHRzdGFycz86IHN0cmluZyA9ICcxLDIsMyw0LDUnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyxcblx0KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIG5ld0Zyb21Db25maWcob3B0aW9ucz86IFRydXN0UGlsb3RDb25maWcpOiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyB7XG5cdFx0cmV0dXJuIG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyhvcHRpb25zKTtcblx0fVxuXG5cdHNldD8ob3B0aW9ucz86IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKTogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3cy10cnVzdHBpbG90LXdpZGdldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdGxvYWRlZDogYm9vbGVhbjtcblx0dHJ1c3RQaWxvdE9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XG5cdEBJbnB1dCgpIG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucztcblx0QElucHV0KCkgc2t1Pzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSB0cnVzdFBpbG90OiBUcnVzdFBpbG90U2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMgJiYgIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMudHJ1c3RQaWxvdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XG5cdFx0fVxuXHRcdHRoaXMudHJ1c3RQaWxvdE9wdGlvbnMgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLnRydXN0UGlsb3Q7XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zKHRoaXMudHJ1c3RQaWxvdE9wdGlvbnMpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50Lm5nT25Jbml0JywgdGhpcy5vcHRpb25zLCB0aGlzLmxvYWRlZCk7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7IC8vICYmIGVudmlyb25tZW50LnByb2R1Y3Rpb25cblx0XHRcdGlmICghdGhpcy5sb2FkZWQpIHtcblx0XHRcdFx0dGhpcy50cnVzdFBpbG90Lm9uY2UoKS5waXBlKFxuXHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0XHQpLnN1YnNjcmliZShUcnVzdHBpbG90ID0+IHtcblx0XHRcdFx0XHRUcnVzdHBpbG90LmxvYWRGcm9tRWxlbWVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG5cdFx0XHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19