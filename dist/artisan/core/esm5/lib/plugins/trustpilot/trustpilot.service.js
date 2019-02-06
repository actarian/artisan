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
var TrustPilotConfig = /** @class */ (function () {
    function TrustPilotConfig() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
    return TrustPilotConfig;
}());
export { TrustPilotConfig };
if (false) {
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitId;
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitName;
}
var TrustPilotService = /** @class */ (function () {
    function TrustPilotService(platformId, configService, onceService) {
        this.platformId = platformId;
        this.configService = configService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    TrustPilotService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.configService.options.plugins && !this.configService.options.plugins.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.configService.options.plugins.trustPilot);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    TrustPilotService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                /** @type {?} */
                var src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.Trustpilot = window['Trustpilot'];
                    return _this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    };
    TrustPilotService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TrustPilotService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ TrustPilotService.ngInjectableDef = i0.defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.OnceService)); }, token: TrustPilotService, providedIn: "root" });
    return TrustPilotService;
}());
export { TrustPilotService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUV0RDtJQUFBO1FBQ0MsbUJBQWMsR0FBVywwQkFBMEIsQ0FBQztRQUNwRCxxQkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQztJQUNyRCxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLDBDQUFvRDs7SUFDcEQsNENBQW9EOztBQUdyRDtJQVNDLDJCQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTyxnQ0FBSTs7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDMUYsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVEOztvRUFFZ0U7Ozs7Ozs7SUFFaEUsZ0NBQUk7Ozs7OztJQUFKO1FBQUEsaUJBb0JDO1FBbkJBLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hCO2lCQUFNOztvQkFDQSxHQUFHLEdBQUcsdUVBQXVFO2dCQUNuRiw2Q0FBNkM7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNuRCxHQUFHLENBQUMsVUFBQSxDQUFDO29CQUNKLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUNGLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hCO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Z0JBaERELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBUUUsTUFBTSxTQUFDLFdBQVc7Z0JBbEJaLGFBQWE7Z0JBQ2IsV0FBVzs7OzRCQU5wQjtDQStEQyxBQWxERCxJQWtEQztTQS9DWSxpQkFBaUI7OztJQUU3QixvQ0FBaUM7Ozs7O0lBQ2pDLHVDQUF3Qjs7Ozs7SUFDeEIsd0NBQXFDOzs7OztJQUdwQyx1Q0FBK0M7Ozs7O0lBQy9DLDBDQUFvQzs7Ozs7SUFDcEMsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL29uY2Uvb25jZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RDb25maWcge1xuXHRidXNpbmVzc3VuaXRJZDogc3RyaW5nID0gJzU4ZTI1M2FiMDAwMGZmMDAwNTlmYzBmZSc7XG5cdGJ1c2luZXNzdW5pdE5hbWU6IHN0cmluZyA9ICd3d3cuZXVyb3NwaW4tdmlhZ2dpLml0Jztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBUcnVzdFBpbG90Q29uZmlnO1xuXHRwcml2YXRlIFRydXN0cGlsb3Q6IGFueTtcblx0cHJpdmF0ZSBUcnVzdHBpbG90JDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zICYmICF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLnRydXN0UGlsb3QpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ1c3RQaWxvdFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMudHJ1c3RQaWxvdCcpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBUcnVzdFBpbG90Q29uZmlnKCksIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMudHJ1c3RQaWxvdCk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgVHJ1c3RQaWxvdENvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5UcnVzdHBpbG90KSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLlRydXN0cGlsb3QpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLlRydXN0cGlsb3QkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3QkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd2lkZ2V0LnRydXN0cGlsb3QuY29tL2Jvb3RzdHJhcC92NS90cC53aWRnZXQuYm9vdHN0cmFwLm1pbi5qc2A7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdUcnVzdFBpbG90Q29uZmlnLm9uY2UnLCBzcmMpO1xuXHRcdFx0XHR0aGlzLlRydXN0cGlsb3QkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuVHJ1c3RwaWxvdCA9IHdpbmRvd1snVHJ1c3RwaWxvdCddO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90JDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=