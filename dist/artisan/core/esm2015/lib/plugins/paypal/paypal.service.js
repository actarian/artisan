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
export class PayPalConfigStyle {
}
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
export class PayPalConfigClient {
}
if (false) {
    /** @type {?} */
    PayPalConfigClient.prototype.sandbox;
    /** @type {?} */
    PayPalConfigClient.prototype.production;
}
export class PayPalConfig {
}
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
export class PayPalService {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} onceService
     */
    constructor(platformId, configService, onceService) {
        this.platformId = platformId;
        this.configService = configService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.configService.options.plugins && !this.configService.options.plugins.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.configService.options.plugins.paypal);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                /** @type {?} */
                const src = `https://www.paypalobjects.com/api/checkout.js`;
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map(x => {
                    this.paypal = window['paypal'];
                    return this.paypal;
                }));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    render(options, selector) {
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap(paypal => {
            paypal.Button.render(this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
    }
    /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    getOptions(paypal, options) {
        /** @type {?} */
        const payload = Object.assign(this.options, options);
        payload.payment = (data, actions) => {
            return new paypal.Promise((resolve, reject) => {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap(payload => {
                        return from(actions.payment.create(payload));
                    })).subscribe(success => resolve(success), // actions.payment.create(success)
                    // actions.payment.create(success)
                    error => reject(error));
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
        payload.onAuthorize = (data, actions) => {
            if (options.onAuthorize) {
                return actions.payment.execute().then(payment => options.onAuthorize(payment, null), error => options.onAuthorize(null, error));
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        };
        return payload;
    }
}
PayPalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PayPalService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: OnceService }
];
/** @nocollapse */ PayPalService.ngInjectableDef = i0.defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.OnceService)); }, token: PayPalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV0RCxNQUFNLE9BQU8saUJBQWlCO0NBSzdCOzs7SUFKQSxrQ0FBZTs7SUFDZixpQ0FBYzs7SUFDZCxrQ0FBZTs7SUFDZixrQ0FBZTs7QUFHaEIsTUFBTSxPQUFPLGtCQUFrQjtDQUc5Qjs7O0lBRkEscUNBQWdCOztJQUNoQix3Q0FBbUI7O0FBR3BCLE1BQU0sT0FBTyxZQUFZO0NBU3hCOzs7SUFSQSwyQkFBWTs7SUFDWiw2QkFBMEI7O0lBQzFCLDhCQUEyQjs7SUFDM0IsOEJBQWlCOztJQUNqQiwwQ0FBNEI7O0lBRTVCLCtCQUFtQjs7SUFDbkIsbUNBQXVCOztBQU14QixNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBTXpCLFlBQzhCLFVBQWtCLEVBQ3ZDLGFBQTRCLEVBQzVCLFdBQXdCO1FBRkgsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7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LE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNiO2dCQUNELDJFQUEyRTtnQkFDM0UsZ0ZBQWdGO2dCQUNoRixtR0FBbUc7Z0JBQ25HLGdHQUFnRztnQkFDaEcsd0NBQXdDO2dCQUN4QyxxREFBcUQ7Z0JBQ3JELDBDQUEwQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN4QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUNwQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUM3QyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUN6QyxDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO2FBQzdEO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7O1lBbEdELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FRRSxNQUFNLFNBQUMsV0FBVztZQXBDWixhQUFhO1lBQ2IsV0FBVzs7Ozs7SUE4Qm5CLGdDQUE2Qjs7Ozs7SUFDN0IsK0JBQW9COzs7OztJQUNwQixnQ0FBaUM7Ozs7O0lBR2hDLG1DQUErQzs7Ozs7SUFDL0Msc0NBQW9DOzs7OztJQUNwQyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmNlL29uY2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWdTdHlsZSB7XG5cdGxhYmVsPzogc3RyaW5nOyAvLyBsYWJlbDogc3RyaW5nXG5cdHNpemU/OiBzdHJpbmc7IC8vIHNpemU6IHNtYWxsIHwgbWVkaXVtIHwgbGFyZ2UgfCByZXNwb25zaXZlXG5cdHNoYXBlPzogc3RyaW5nOyAgIC8vIHNoYXBlOiBwaWxsIHwgcmVjdFxuXHRjb2xvcj86IHN0cmluZzsgICAvLyBjb2xvcjogZ29sZCB8IGJsdWUgfCBzaWx2ZXIgfCBibGFja1xufVxuXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlnQ2xpZW50IHtcblx0c2FuZGJveDogc3RyaW5nO1xuXHRwcm9kdWN0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWcge1xuXHRlbnY6IHN0cmluZztcblx0c3R5bGU/OiBQYXlQYWxDb25maWdTdHlsZTtcblx0Y2xpZW50OiBQYXlQYWxDb25maWdDbGllbnQ7XG5cdGNvbW1pdD86IGJvb2xlYW47IC8vIFNob3cgdGhlIGJ1eWVyIGEgJ1BheSBOb3cnIGJ1dHRvbiBpbiB0aGUgY2hlY2tvdXQgZmxvd1xuXHRzYW5kYm94RmFjaWxpdGF0b3I/OiBzdHJpbmc7XG5cdC8vXG5cdHBheW1lbnQ/OiBGdW5jdGlvbjtcblx0b25BdXRob3JpemU/OiBGdW5jdGlvbjtcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGF5UGFsU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFBheVBhbENvbmZpZztcblx0cHJpdmF0ZSBwYXlwYWw6IGFueTtcblx0cHJpdmF0ZSBwYXlwYWwkOiBPYnNlcnZhYmxlPGFueT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMgJiYgIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMucGF5cGFsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BheVBhbFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMucGF5cGFsJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFBheVBhbENvbmZpZygpLCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLnBheXBhbCk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgUGF5UGFsQ29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLnBheXBhbCkge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5wYXlwYWwpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnBheXBhbCQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanNgO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsQ29uZmlnLm9uY2UnLCBzcmMpO1xuXHRcdFx0XHR0aGlzLnBheXBhbCQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wYXlwYWwgPSB3aW5kb3dbJ3BheXBhbCddO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBheXBhbCQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIob3B0aW9uczogYW55LCBzZWxlY3Rvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcjcGF5cGFsLWJ1dHRvbic7XG5cdFx0cmV0dXJuIHRoaXMub25jZSgpLnBpcGUoXG5cdFx0XHRtZXJnZU1hcChwYXlwYWwgPT4ge1xuXHRcdFx0XHRwYXlwYWwuQnV0dG9uLnJlbmRlcih0aGlzLmdldE9wdGlvbnMocGF5cGFsLCBvcHRpb25zKSwgc2VsZWN0b3IpO1xuXHRcdFx0XHRyZXR1cm4gb2YocGF5cGFsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpOiBQYXlQYWxDb25maWcge1xuXHRcdGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0cGF5bG9hZC5wYXltZW50ID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcblx0XHRcdHJldHVybiBuZXcgcGF5cGFsLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5wYXltZW50KSB7XG5cdFx0XHRcdFx0b3B0aW9ucy5wYXltZW50KCkucGlwZShcblx0XHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdFx0XHRtZXJnZU1hcChwYXlsb2FkID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZyb20oYWN0aW9ucy5wYXltZW50LmNyZWF0ZShwYXlsb2FkKSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCkuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdFx0c3VjY2VzcyA9PiByZXNvbHZlKHN1Y2Nlc3MpLCAvLyBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHN1Y2Nlc3MpXG5cdFx0XHRcdFx0XHRlcnJvciA9PiByZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5wYXltZW50IGNhbGxiYWNrIG5vdCBzZXR0ZWQnKTtcblx0XHRcdFx0XHRyZWplY3QobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gTWFrZSBhbiBhamF4IGNhbGwgdG8gZ2V0IHRoZSBQYXltZW50IElELiBUaGlzIHNob3VsZCBjYWxsIHlvdXIgYmFjay1lbmQsXG5cdFx0XHRcdC8vIHdoaWNoIHNob3VsZCBpbnZva2UgdGhlIFBheVBhbCBQYXltZW50IENyZWF0ZSBhcGkgdG8gcmV0cmlldmUgdGhlIFBheW1lbnQgSUQuXG5cdFx0XHRcdC8vIFdoZW4geW91IGhhdmUgYSBQYXltZW50IElELCB5b3UgbmVlZCB0byBjYWxsIHRoZSBgcmVzb2x2ZWAgbWV0aG9kLCBlLmcgYHJlc29sdmUoZGF0YS5wYXltZW50SUQpYFxuXHRcdFx0XHQvLyBPciwgaWYgeW91IGhhdmUgYW4gZXJyb3IgZnJvbSB5b3VyIHNlcnZlciBzaWRlLCB5b3UgbmVlZCB0byBjYWxsIGByZWplY3RgLCBlLmcuIGByZWplY3QoZXJyKWBcblx0XHRcdFx0Ly8galF1ZXJ5LnBvc3QoJy9teS1hcGkvY3JlYXRlLXBheW1lbnQnKVxuXHRcdFx0XHQvLyAuZG9uZShmdW5jdGlvbihkYXRhKSB7IHJlc29sdmUoZGF0YS5wYXltZW50SUQpOyB9KVxuXHRcdFx0XHQvLyAuZmFpbChmdW5jdGlvbihlcnIpICB7IHJlamVjdChlcnIpOyB9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0cGF5bG9hZC5vbkF1dGhvcml6ZSA9IChkYXRhLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHRpZiAob3B0aW9ucy5vbkF1dGhvcml6ZSkge1xuXHRcdFx0XHRyZXR1cm4gYWN0aW9ucy5wYXltZW50LmV4ZWN1dGUoKS50aGVuKFxuXHRcdFx0XHRcdHBheW1lbnQgPT4gb3B0aW9ucy5vbkF1dGhvcml6ZShwYXltZW50LCBudWxsKSxcblx0XHRcdFx0XHRlcnJvciA9PiBvcHRpb25zLm9uQXV0aG9yaXplKG51bGwsIGVycm9yKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BheVBhbFNlcnZpY2Uub25BdXRob3JpemUgY2FsbGJhY2sgbm90IHNldHRlZCcpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHBheWxvYWQ7XG5cdH1cblxufVxuIl19