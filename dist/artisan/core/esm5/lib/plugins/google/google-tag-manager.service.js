/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { Logger } from '../../logger/logger';
import { OnceService } from '../../once/once.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.service";
import * as i2 from "../../once/once.service";
import * as i3 from "../../logger/logger";
var GoogleTagManagerPageViewEvent = /** @class */ (function () {
    function GoogleTagManagerPageViewEvent() {
    }
    return GoogleTagManagerPageViewEvent;
}());
export { GoogleTagManagerPageViewEvent };
if (false) {
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.url;
}
var GoogleTagManagerConfig = /** @class */ (function () {
    function GoogleTagManagerConfig() {
    }
    return GoogleTagManagerConfig;
}());
export { GoogleTagManagerConfig };
if (false) {
    /** @type {?} */
    GoogleTagManagerConfig.prototype.id;
}
var GoogleTagManagerService = /** @class */ (function () {
    function GoogleTagManagerService(platformId, configService, zone, onceService, logger) {
        this.platformId = platformId;
        this.configService = configService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    GoogleTagManagerService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.configService.options.plugins && !this.configService.options.plugins.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.configService.options.plugins.googleTagManager);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleTagManagerConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    GoogleTagManagerService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                /** @type {?} */
                var id = this.options.id;
                /** @type {?} */
                var src = "https://www.googletagmanager.com/gtm.js?id=" + id;
                /** @type {?} */
                var dataLayer_1 = window['dataLayer'];
                dataLayer_1.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map(function (x) {
                    // console.log('dataLayer', dataLayer, x);
                    _this.dataLayer = dataLayer_1;
                    return dataLayer_1;
                }));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    GoogleTagManagerService.prototype.push = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.dataLayer) {
                _this.dataLayer.push(payload);
                _this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                _this.once().pipe(first()).subscribe(function (dataLayer) {
                    if (_this.dataLayer) {
                        _this.dataLayer.push(payload);
                        _this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                });
            }
        });
    };
    GoogleTagManagerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleTagManagerService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: NgZone },
        { type: OnceService },
        { type: Logger }
    ]; };
    /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i0.NgZone), i0.inject(i2.OnceService), i0.inject(i3.Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
    return GoogleTagManagerService;
}());
export { GoogleTagManagerService };
if (false) {
    /** @type {?} */
    GoogleTagManagerService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.dataLayer;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.dataLayer$;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.onceService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFdEQ7SUFBQTtJQUdBLENBQUM7SUFBRCxvQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0RBQWlCOztJQUNqQiw0Q0FBWTs7QUFHYjtJQUFBO0lBRUEsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxvQ0FBVzs7QUFHWjtJQVVDLGlDQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixJQUFZLEVBQ1osV0FBd0IsRUFDeEIsTUFBYztRQUpPLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2Is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QUhPLE1BQU07Z0JBSzFCLFdBQVc7Z0JBRFgsTUFBTTs7O2tDQU5mO0NBNkZDLEFBM0VELElBMkVDO1NBeEVZLHVCQUF1Qjs7O0lBRW5DLDBDQUF1Qzs7Ozs7SUFFdkMsNENBQXlCOzs7OztJQUN6Qiw2Q0FBc0M7Ozs7O0lBR3JDLDZDQUErQzs7Ozs7SUFDL0MsZ0RBQW9DOzs7OztJQUNwQyx1Q0FBb0I7Ozs7O0lBQ3BCLDhDQUFnQzs7Ozs7SUFDaEMseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25jZS9vbmNlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlclBhZ2VWaWV3RXZlbnQge1xuXHRkYXRhTGF5ZXI6IGFueVtdO1xuXHR1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJDb25maWcge1xuXHRpZDogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IEdvb2dsZVRhZ01hbmFnZXJDb25maWc7XG5cblx0cHJpdmF0ZSBkYXRhTGF5ZXI6IGFueVtdO1xuXHRwcml2YXRlIGRhdGFMYXllciQ6IE9ic2VydmFibGU8YW55W10+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0XHRwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMgJiYgIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMuZ29vZ2xlVGFnTWFuYWdlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGVUYWdNYW5hZ2VyU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5nb29nbGVUYWdNYW5hZ2VyJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZVRhZ01hbmFnZXJDb25maWcoKSwgdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5nb29nbGVUYWdNYW5hZ2VyKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55W10+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmRhdGFMYXllcik7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YUxheWVyJCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRhTGF5ZXIkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93WydkYXRhTGF5ZXInXSA9IHdpbmRvd1snZGF0YUxheWVyJ10gfHwgW107XG5cdFx0XHRcdGNvbnN0IGlkID0gdGhpcy5vcHRpb25zLmlkO1xuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPSR7aWR9YDtcblx0XHRcdFx0Y29uc3QgZGF0YUxheWVyID0gd2luZG93WydkYXRhTGF5ZXInXTtcblx0XHRcdFx0ZGF0YUxheWVyLnB1c2goeyAnZ3RtLnN0YXJ0JzogbmV3IERhdGUoKS5nZXRUaW1lKCksIGV2ZW50OiAnZ3RtLmpzJyB9KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcub25jZScsIHNyYywgZGF0YUxheWVyKTtcblx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhTGF5ZXInLCBkYXRhTGF5ZXIsIHgpO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIgPSBkYXRhTGF5ZXI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF0YUxheWVyO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGFMYXllciQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRwdXNoKHBheWxvYWQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIucHVzaChwYXlsb2FkKTtcblx0XHRcdFx0dGhpcy5sb2dnZXIubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLnB1c2gnLCBwYXlsb2FkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub25jZSgpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoZGF0YUxheWVyID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyLnB1c2gocGF5bG9hZCk7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZ2dlci5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcucHVzaCcsIHBheWxvYWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLypcbjwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPlxuPHNjcmlwdD4oZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6XG5uZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG5qPWQuY3JlYXRlRWxlbWVudChzKSxkbD1sIT0nZGF0YUxheWVyJz8nJmw9JytsOicnO2ouYXN5bmM9dHJ1ZTtqLnNyYz1cbidodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTtcbn0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLVRTMkg2VkcnKTs8L3NjcmlwdD5cbjwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAtLT5cbiovXG5cbi8qXG48IS0tIGFmdGVyIDxib2R5PiAtLT5cbjwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XG48bm9zY3JpcHQ+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPUdUTS1UUzJINlZHXCJcbmhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPjwvbm9zY3JpcHQ+XG48IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cbiovXG5cbi8qXG53aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICdldmVudCc6ICdQYWdldmlldycsXG4gJ3VybCc6ICdodHRwczovL3d3dy5leGFtcGxlLmNvbS9zb21ldGhpbmcvY29udGFjdC11cydcbiB9KTtcbiovXG5cblxuIl19