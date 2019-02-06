/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { DisposableComponent } from '../../disposable/disposable.component';
import { TrustPilotService } from './trustpilot.service';
var TrustPilotWidgetOptions = /** @class */ (function () {
    function TrustPilotWidgetOptions(options) {
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
    TrustPilotWidgetOptions.newFromConfig = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new TrustPilotWidgetOptions(options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    TrustPilotWidgetOptions.prototype.set = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    };
    return TrustPilotWidgetOptions;
}());
export { TrustPilotWidgetOptions };
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
var TrustPilotWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TrustPilotWidgetComponent, _super);
    function TrustPilotWidgetComponent(platformId, configService, elementRef, trustPilot) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.configService = configService;
        _this.elementRef = elementRef;
        _this.trustPilot = trustPilot;
        _this.init();
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    TrustPilotWidgetComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.configService.options.plugins && !this.configService.options.plugins.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.configService.options.plugins.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    };
    /**
     * @return {?}
     */
    TrustPilotWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(function (Trustpilot) {
                    Trustpilot.loadFromElement(_this.elementRef.nativeElement.firstElementChild);
                    _this.loaded = true;
                });
            }
        }
    };
    TrustPilotWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-trustpilot-widget-component',
                    template: "<ng-container>\n\t<ng-container [ngSwitch]=\"options.templateId\">\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\n\t\t\t<!-- PRODUCT REVIEWS -->\n\t\t\t<div class=\"trustpilot-comments\">\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\n\t\t\t<!-- EVALUATE -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\n\t\t\t<!-- MINI -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\n\t\t\t<!-- STARTER -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\n\t\t\t<!-- CAROUSEL -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ng-container>\n</ng-container>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
                }] }
    ];
    /** @nocollapse */
    TrustPilotWidgetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: ElementRef },
        { type: TrustPilotService }
    ]; };
    TrustPilotWidgetComponent.propDecorators = {
        options: [{ type: Input }],
        sku: [{ type: Input }]
    };
    return TrustPilotWidgetComponent;
}(DisposableComponent));
export { TrustPilotWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFO0lBWUMsaUNBQ0MsT0FBaUM7UUFUbEMsV0FBTSxHQUFZLE9BQU8sQ0FBQztRQUUxQixnQkFBVyxHQUFZLE9BQU8sQ0FBQztRQUMvQixlQUFVLEdBQVksTUFBTSxDQUFDO1FBQzdCLFVBQUssR0FBWSxPQUFPLENBQUM7UUFDekIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQVksV0FBVyxDQUFDO1FBSzVCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDOzs7OztJQUVNLHFDQUFhOzs7O0lBQXBCLFVBQXFCLE9BQTBCO1FBQzlDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELHFDQUFHOzs7O0lBQUgsVUFBSyxPQUFpQztRQUNyQyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsOEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7O0lBN0JBLDZDQUFvQjs7SUFDcEIsaURBQXdCOztJQUN4QixtREFBMEI7O0lBQzFCLHlDQUEwQjs7SUFDMUIsc0NBQWE7O0lBQ2IsOENBQStCOztJQUMvQiw2Q0FBNkI7O0lBQzdCLHdDQUF5Qjs7SUFDekIsd0NBQXNCOztJQUN0Qix3Q0FBNkI7O0FBc0I5QjtJQU8rQyxxREFBbUI7SUFPakUsbUNBQzhCLFVBQWtCLEVBQ3ZDLGFBQTRCLEVBQzVCLFVBQXNCLEVBQ3RCLFVBQTZCO1FBSnRDLFlBTUMsaUJBQU8sU0FFUDtRQVA2QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixnQkFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFHckMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOztJQUNiLENBQUM7Ozs7O0lBRU8sd0NBQUk7Ozs7SUFBWjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzFGLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQUEsaUJBWUM7UUFYQSxnRkFBZ0Y7UUFDaEYsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLDRCQUE0QjtZQUN0SCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVTtvQkFDckIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7YUFDSDtTQUNEO0lBQ0YsQ0FBQzs7Z0JBNUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQywwckdBQWlEO29CQUVqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7aUJBQ3pDOzs7OzZDQVVFLE1BQU0sU0FBQyxXQUFXO2dCQW5EWixhQUFhO2dCQUZhLFVBQVU7Z0JBSWxCLGlCQUFpQjs7OzBCQTZDMUMsS0FBSztzQkFDTCxLQUFLOztJQWtDUCxnQ0FBQztDQUFBLEFBOUNELENBTytDLG1CQUFtQixHQXVDakU7U0F2Q1kseUJBQXlCOzs7SUFFckMsMkNBQWdCOztJQUNoQixzREFBb0M7O0lBQ3BDLDRDQUEyQzs7SUFDM0Msd0NBQXNCOzs7OztJQUdyQiwrQ0FBK0M7Ozs7O0lBQy9DLGtEQUFvQzs7Ozs7SUFDcEMsK0NBQThCOzs7OztJQUM5QiwrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcnVzdFBpbG90Q29uZmlnLCBUcnVzdFBpbG90U2VydmljZSB9IGZyb20gJy4vdHJ1c3RwaWxvdC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0dGVtcGxhdGVJZD86IHN0cmluZztcblx0YnVzaW5lc3N1bml0SWQ/OiBzdHJpbmc7XG5cdGJ1c2luZXNzdW5pdE5hbWU/OiBzdHJpbmc7XG5cdGxvY2FsZT86IHN0cmluZyA9ICdpdC1JVCc7XG5cdHNrdT86IHN0cmluZztcblx0c3R5bGVIZWlnaHQ/OiBzdHJpbmcgPSAnMzUwcHgnO1xuXHRzdHlsZVdpZHRoPzogc3RyaW5nID0gJzEwMCUnO1xuXHR0aGVtZT86IHN0cmluZyA9ICdsaWdodCc7XG5cdGdyb3VwPzogc3RyaW5nID0gJ29uJztcblx0c3RhcnM/OiBzdHJpbmcgPSAnMSwyLDMsNCw1JztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMsXG5cdCkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBuZXdGcm9tQ29uZmlnKG9wdGlvbnM/OiBUcnVzdFBpbG90Q29uZmlnKTogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMge1xuXHRcdHJldHVybiBuZXcgVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRzZXQ/KG9wdGlvbnM/OiBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyk6IFRydXN0UGlsb3RXaWRnZXRPcHRpb25zIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd3MtdHJ1c3RwaWxvdC13aWRnZXQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRsb2FkZWQ6IGJvb2xlYW47XG5cdHRydXN0UGlsb3RPcHRpb25zOiBUcnVzdFBpbG90Q29uZmlnO1xuXHRASW5wdXQoKSBvcHRpb25zPzogVHJ1c3RQaWxvdFdpZGdldE9wdGlvbnM7XG5cdEBJbnB1dCgpIHNrdT86IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgdHJ1c3RQaWxvdDogVHJ1c3RQaWxvdFNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zICYmICF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLnRydXN0UGlsb3QpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ1c3RQaWxvdFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMudHJ1c3RQaWxvdCcpO1xuXHRcdH1cblx0XHR0aGlzLnRydXN0UGlsb3RPcHRpb25zID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy50cnVzdFBpbG90O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBUcnVzdFBpbG90V2lkZ2V0T3B0aW9ucyh0aGlzLnRydXN0UGlsb3RPcHRpb25zKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudC5uZ09uSW5pdCcsIHRoaXMub3B0aW9ucywgdGhpcy5sb2FkZWQpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkgeyAvLyAmJiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uXG5cdFx0XHRpZiAoIXRoaXMubG9hZGVkKSB7XG5cdFx0XHRcdHRoaXMudHJ1c3RQaWxvdC5vbmNlKCkucGlwZShcblx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdFx0KS5zdWJzY3JpYmUoVHJ1c3RwaWxvdCA9PiB7XG5cdFx0XHRcdFx0VHJ1c3RwaWxvdC5sb2FkRnJvbUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXHRcdFx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==