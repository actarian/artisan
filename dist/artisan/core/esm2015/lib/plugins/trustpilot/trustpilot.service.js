/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.service";
import * as i2 from "../../once/once.service";
export class TrustPilotConfig {
    constructor() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
}
if (false) {
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitId;
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitName;
}
export class TrustPilotService {
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
        if (!this.configService.options.plugins && !this.configService.options.plugins.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.configService.options.plugins.trustPilot);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                /** @type {?} */
                const src = `https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`;
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(x => {
                    this.Trustpilot = window['Trustpilot'];
                    return this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    }
}
TrustPilotService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TrustPilotService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: OnceService }
];
/** @nocollapse */ TrustPilotService.ngInjectableDef = i0.defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.OnceService)); }, token: TrustPilotService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TrustPilotService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.Trustpilot;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.Trustpilot$;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV0RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBQ0MsbUJBQWMsR0FBVywwQkFBMEIsQ0FBQztRQUNwRCxxQkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQztJQUNyRCxDQUFDO0NBQUE7OztJQUZBLDBDQUFvRDs7SUFDcEQsNENBQW9EOztBQU1yRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFNN0IsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsV0FBd0I7UUFGSCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzFGLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7Ozs7SUFNRCxJQUFJO1FBQ0gsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7aUJBQU07O3NCQUNBLEdBQUcsR0FBRyx1RUFBdUU7Z0JBQ25GLDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FDRixDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7OztZQWhERCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBUUUsTUFBTSxTQUFDLFdBQVc7WUFsQlosYUFBYTtZQUNiLFdBQVc7Ozs7O0lBWW5CLG9DQUFpQzs7Ozs7SUFDakMsdUNBQXdCOzs7OztJQUN4Qix3Q0FBcUM7Ozs7O0lBR3BDLHVDQUErQzs7Ozs7SUFDL0MsMENBQW9DOzs7OztJQUNwQyx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25jZS9vbmNlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdENvbmZpZyB7XG5cdGJ1c2luZXNzdW5pdElkOiBzdHJpbmcgPSAnNThlMjUzYWIwMDAwZmYwMDA1OWZjMGZlJztcblx0YnVzaW5lc3N1bml0TmFtZTogc3RyaW5nID0gJ3d3dy5ldXJvc3Bpbi12aWFnZ2kuaXQnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90U2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XG5cdHByaXZhdGUgVHJ1c3RwaWxvdDogYW55O1xuXHRwcml2YXRlIFRydXN0cGlsb3QkOiBPYnNlcnZhYmxlPGFueT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMgJiYgIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMudHJ1c3RQaWxvdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFRydXN0UGlsb3RDb25maWcoKSwgdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy50cnVzdFBpbG90KTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBUcnVzdFBpbG90Q29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLlRydXN0cGlsb3QpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuVHJ1c3RwaWxvdCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuVHJ1c3RwaWxvdCQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdCQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93aWRnZXQudHJ1c3RwaWxvdC5jb20vYm9vdHN0cmFwL3Y1L3RwLndpZGdldC5ib290c3RyYXAubWluLmpzYDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1RydXN0UGlsb3RDb25maWcub25jZScsIHNyYyk7XG5cdFx0XHRcdHRoaXMuVHJ1c3RwaWxvdCQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5UcnVzdHBpbG90ID0gd2luZG93WydUcnVzdHBpbG90J107XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3QkO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==