/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from, of } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.service";
import * as i2 from "../../once/once.service";
var PayPalConfigStyle = /** @class */ (function () {
    function PayPalConfigStyle() {
    }
    return PayPalConfigStyle;
}());
export { PayPalConfigStyle };
if (false) {
    /** @type {?} */
    PayPalConfigStyle.prototype.label;
    /** @type {?} */
    PayPalConfigStyle.prototype.size;
    /** @type {?} */
    PayPalConfigStyle.prototype.shape;
    /** @type {?} */
    PayPalConfigStyle.prototype.color;
}
var PayPalConfigClient = /** @class */ (function () {
    function PayPalConfigClient() {
    }
    return PayPalConfigClient;
}());
export { PayPalConfigClient };
if (false) {
    /** @type {?} */
    PayPalConfigClient.prototype.sandbox;
    /** @type {?} */
    PayPalConfigClient.prototype.production;
}
var PayPalConfig = /** @class */ (function () {
    function PayPalConfig() {
    }
    return PayPalConfig;
}());
export { PayPalConfig };
if (false) {
    /** @type {?} */
    PayPalConfig.prototype.env;
    /** @type {?} */
    PayPalConfig.prototype.style;
    /** @type {?} */
    PayPalConfig.prototype.client;
    /** @type {?} */
    PayPalConfig.prototype.commit;
    /** @type {?} */
    PayPalConfig.prototype.sandboxFacilitator;
    /** @type {?} */
    PayPalConfig.prototype.payment;
    /** @type {?} */
    PayPalConfig.prototype.onAuthorize;
}
var PayPalService = /** @class */ (function () {
    function PayPalService(platformId, configService, onceService) {
        this.platformId = platformId;
        this.configService = configService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    PayPalService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.configService.options.plugins && !this.configService.options.plugins.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.configService.options.plugins.paypal);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call PayPalConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    PayPalService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                /** @type {?} */
                var src = "https://www.paypalobjects.com/api/checkout.js";
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.paypal = window['paypal'];
                    return _this.paypal;
                }));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    PayPalService.prototype.render = /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    function (options, selector) {
        var _this = this;
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap(function (paypal) {
            paypal.Button.render(_this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
    };
    /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    PayPalService.prototype.getOptions = /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    function (paypal, options) {
        /** @type {?} */
        var payload = Object.assign(this.options, options);
        payload.payment = function (data, actions) {
            return new paypal.Promise(function (resolve, reject) {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap(function (payload) {
                        return from(actions.payment.create(payload));
                    })).subscribe(function (success) { return resolve(success); }, // actions.payment.create(success)
                    function (// actions.payment.create(success)
                    error) { return reject(error); });
                }
                else {
                    console.log('PayPalService.payment callback not setted');
                    reject(null);
                }
                // Make an ajax call to get the Payment ID. This should call your back-end,
                // which should invoke the PayPal Payment Create api to retrieve the Payment ID.
                // When you have a Payment ID, you need to call the `resolve` method, e.g `resolve(data.paymentID)`
                // Or, if you have an error from your server side, you need to call `reject`, e.g. `reject(err)`
                // jQuery.post('/my-api/create-payment')
                // .done(function(data) { resolve(data.paymentID); })
                // .fail(function(err)  { reject(err); });
            });
        };
        payload.onAuthorize = function (data, actions) {
            if (options.onAuthorize) {
                return actions.payment.execute().then(function (payment) { return options.onAuthorize(payment, null); }, function (error) { return options.onAuthorize(null, error); });
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        };
        return payload;
    };
    PayPalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PayPalService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ PayPalService.ngInjectableDef = i0.defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.OnceService)); }, token: PayPalService, providedIn: "root" });
    return PayPalService;
}());
export { PayPalService };
if (false) {
    /** @type {?} */
    PayPalService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.paypal;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.paypal$;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV0RDtJQUFBO0lBS0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKQSxrQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCxrQ0FBZTs7SUFDZixrQ0FBZTs7QUFHaEI7SUFBQTtJQUdBLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEscUNBQWdCOztJQUNoQix3Q0FBbUI7O0FBR3BCO0lBQUE7SUFTQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJBLDJCQUFZOztJQUNaLDZCQUEwQjs7SUFDMUIsOEJBQTJCOztJQUMzQiw4QkFBaUI7O0lBQ2pCLDBDQUE0Qjs7SUFFNUIsK0JBQW1COztJQUNuQixtQ0FBdUI7O0FBR3hCO0lBU0MsdUJBQzhCLFVBQWtCLEVBQ3ZDLGFBQTRCLEVBQzVCLFdBQXdCO1FBRkgsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1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QUFpQzs7Ozs7SUFHaEMsbUNBQStDOzs7OztJQUMvQyxzQ0FBb0M7Ozs7O0lBQ3BDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL29uY2Uvb25jZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ1N0eWxlIHtcblx0bGFiZWw/OiBzdHJpbmc7IC8vIGxhYmVsOiBzdHJpbmdcblx0c2l6ZT86IHN0cmluZzsgLy8gc2l6ZTogc21hbGwgfCBtZWRpdW0gfCBsYXJnZSB8IHJlc3BvbnNpdmVcblx0c2hhcGU/OiBzdHJpbmc7ICAgLy8gc2hhcGU6IHBpbGwgfCByZWN0XG5cdGNvbG9yPzogc3RyaW5nOyAgIC8vIGNvbG9yOiBnb2xkIHwgYmx1ZSB8IHNpbHZlciB8IGJsYWNrXG59XG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWdDbGllbnQge1xuXHRzYW5kYm94OiBzdHJpbmc7XG5cdHByb2R1Y3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZyB7XG5cdGVudjogc3RyaW5nO1xuXHRzdHlsZT86IFBheVBhbENvbmZpZ1N0eWxlO1xuXHRjbGllbnQ6IFBheVBhbENvbmZpZ0NsaWVudDtcblx0Y29tbWl0PzogYm9vbGVhbjsgLy8gU2hvdyB0aGUgYnV5ZXIgYSAnUGF5IE5vdycgYnV0dG9uIGluIHRoZSBjaGVja291dCBmbG93XG5cdHNhbmRib3hGYWNpbGl0YXRvcj86IHN0cmluZztcblx0Ly9cblx0cGF5bWVudD86IEZ1bmN0aW9uO1xuXHRvbkF1dGhvcml6ZT86IEZ1bmN0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXlQYWxTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogUGF5UGFsQ29uZmlnO1xuXHRwcml2YXRlIHBheXBhbDogYW55O1xuXHRwcml2YXRlIHBheXBhbCQ6IE9ic2VydmFibGU8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucyAmJiAhdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5wYXlwYWwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGF5UGFsU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5wYXlwYWwnKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgUGF5UGFsQ29uZmlnKCksIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMucGF5cGFsKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBQYXlQYWxDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMucGF5cGFsKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLnBheXBhbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGF5cGFsJCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWwkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3LnBheXBhbG9iamVjdHMuY29tL2FwaS9jaGVja291dC5qc2A7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYXlQYWxDb25maWcub25jZScsIHNyYyk7XG5cdFx0XHRcdHRoaXMucGF5cGFsJCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcblx0XHRcdFx0XHRtYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBheXBhbCA9IHdpbmRvd1sncGF5cGFsJ107XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWw7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcihvcHRpb25zOiBhbnksIHNlbGVjdG9yPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJyNwYXlwYWwtYnV0dG9uJztcblx0XHRyZXR1cm4gdGhpcy5vbmNlKCkucGlwZShcblx0XHRcdG1lcmdlTWFwKHBheXBhbCA9PiB7XG5cdFx0XHRcdHBheXBhbC5CdXR0b24ucmVuZGVyKHRoaXMuZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpLCBzZWxlY3Rvcik7XG5cdFx0XHRcdHJldHVybiBvZihwYXlwYWwpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRPcHRpb25zKHBheXBhbCwgb3B0aW9ucyk6IFBheVBhbENvbmZpZyB7XG5cdFx0Y29uc3QgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRwYXlsb2FkLnBheW1lbnQgPSAoZGF0YSwgYWN0aW9ucykgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBwYXlwYWwuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb25zLnBheW1lbnQpIHtcblx0XHRcdFx0XHRvcHRpb25zLnBheW1lbnQoKS5waXBlKFxuXHRcdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0XHRcdG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJvbShhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHBheWxvYWQpKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KS5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0XHRzdWNjZXNzID0+IHJlc29sdmUoc3VjY2VzcyksIC8vIGFjdGlvbnMucGF5bWVudC5jcmVhdGUoc3VjY2Vzcylcblx0XHRcdFx0XHRcdGVycm9yID0+IHJlamVjdChlcnJvcilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdQYXlQYWxTZXJ2aWNlLnBheW1lbnQgY2FsbGJhY2sgbm90IHNldHRlZCcpO1xuXHRcdFx0XHRcdHJlamVjdChudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBNYWtlIGFuIGFqYXggY2FsbCB0byBnZXQgdGhlIFBheW1lbnQgSUQuIFRoaXMgc2hvdWxkIGNhbGwgeW91ciBiYWNrLWVuZCxcblx0XHRcdFx0Ly8gd2hpY2ggc2hvdWxkIGludm9rZSB0aGUgUGF5UGFsIFBheW1lbnQgQ3JlYXRlIGFwaSB0byByZXRyaWV2ZSB0aGUgUGF5bWVudCBJRC5cblx0XHRcdFx0Ly8gV2hlbiB5b3UgaGF2ZSBhIFBheW1lbnQgSUQsIHlvdSBuZWVkIHRvIGNhbGwgdGhlIGByZXNvbHZlYCBtZXRob2QsIGUuZyBgcmVzb2x2ZShkYXRhLnBheW1lbnRJRClgXG5cdFx0XHRcdC8vIE9yLCBpZiB5b3UgaGF2ZSBhbiBlcnJvciBmcm9tIHlvdXIgc2VydmVyIHNpZGUsIHlvdSBuZWVkIHRvIGNhbGwgYHJlamVjdGAsIGUuZy4gYHJlamVjdChlcnIpYFxuXHRcdFx0XHQvLyBqUXVlcnkucG9zdCgnL215LWFwaS9jcmVhdGUtcGF5bWVudCcpXG5cdFx0XHRcdC8vIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHsgcmVzb2x2ZShkYXRhLnBheW1lbnRJRCk7IH0pXG5cdFx0XHRcdC8vIC5mYWlsKGZ1bmN0aW9uKGVycikgIHsgcmVqZWN0KGVycik7IH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRwYXlsb2FkLm9uQXV0aG9yaXplID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcblx0XHRcdGlmIChvcHRpb25zLm9uQXV0aG9yaXplKSB7XG5cdFx0XHRcdHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpLnRoZW4oXG5cdFx0XHRcdFx0cGF5bWVudCA9PiBvcHRpb25zLm9uQXV0aG9yaXplKHBheW1lbnQsIG51bGwpLFxuXHRcdFx0XHRcdGVycm9yID0+IG9wdGlvbnMub25BdXRob3JpemUobnVsbCwgZXJyb3IpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5vbkF1dGhvcml6ZSBjYWxsYmFjayBub3Qgc2V0dGVkJyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcGF5bG9hZDtcblx0fVxuXG59XG4iXX0=