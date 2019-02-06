/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../../disposable/disposable.component';
import { PayPalConfig, PayPalService } from './paypal.service';
var PayPalWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PayPalWidgetComponent, _super);
    function PayPalWidgetComponent(platformId, paypalService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.paypalService = paypalService;
        return _this;
    }
    /**
     * @return {?}
     */
    PayPalWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    };
    PayPalWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-paypal-widget-component',
                    template: "<div id=\"#paypal-widget-button\"></div>"
                }] }
    ];
    /** @nocollapse */
    PayPalWidgetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PayPalService }
    ]; };
    PayPalWidgetComponent.propDecorators = {
        paypalOptions: [{ type: Input }]
    };
    return PayPalWidgetComponent;
}(DisposableComponent));
export { PayPalWidgetComponent };
if (false) {
    /** @type {?} */
    PayPalWidgetComponent.prototype.paypalOptions;
    /** @type {?} */
    PayPalWidgetComponent.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    PayPalWidgetComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    PayPalWidgetComponent.prototype.paypalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0Q7SUFLMkMsaURBQW1CO0lBSzdELCtCQUM4QixVQUFrQixFQUN2QyxhQUE0QjtRQUZyQyxZQUlDLGlCQUFPLFNBQ1A7UUFKNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBR3JDLENBQUM7Ozs7SUFFRCwrQ0FBZTs7O0lBQWY7UUFDQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUMxRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2pCLHdEQUF3RDtZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7Z0JBekJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsMENBQXdDO2lCQUNsRDs7Ozs2Q0FRRSxNQUFNLFNBQUMsV0FBVztnQkFiRSxhQUFhOzs7Z0NBU2xDLEtBQUs7O0lBb0JQLDRCQUFDO0NBQUEsQUEzQkQsQ0FLMkMsbUJBQW1CLEdBc0I3RDtTQXRCWSxxQkFBcUI7OztJQUVqQyw4Q0FBcUM7O0lBQ3JDLHVDQUFnQjs7Ozs7SUFHZiwyQ0FBK0M7Ozs7O0lBQy9DLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBheVBhbENvbmZpZywgUGF5UGFsU2VydmljZSB9IGZyb20gJy4vcGF5cGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3cy1wYXlwYWwtd2lkZ2V0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cIiNwYXlwYWwtd2lkZ2V0LWJ1dHRvblwiPjwvZGl2PmAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGF5UGFsV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIHBheXBhbE9wdGlvbnM6IFBheVBhbENvbmZpZztcblx0bG9hZGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGF5cGFsU2VydmljZTogUGF5UGFsU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYXlwYWxTZXJ2aWNlLnJlbmRlcih0aGlzLnBheXBhbE9wdGlvbnMsICcjcGF5cGFsLXdpZGdldC1idXR0b24nKS5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdCkuc3Vic2NyaWJlKHBheXBhbCA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYXlQYWxXaWRnZXRDb21wb25lbnQucmVuZGVyZWQnLCBwYXlwYWwpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuIl19