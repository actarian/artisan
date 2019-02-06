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
export class GoogleTagManagerPageViewEvent {
}
if (false) {
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.url;
}
export class GoogleTagManagerConfig {
}
if (false) {
    /** @type {?} */
    GoogleTagManagerConfig.prototype.id;
}
export class GoogleTagManagerService {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} zone
     * @param {?} onceService
     * @param {?} logger
     */
    constructor(platformId, configService, zone, onceService, logger) {
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
    init() {
        if (!this.configService.options.plugins && !this.configService.options.plugins.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.configService.options.plugins.googleTagManager);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
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
                const id = this.options.id;
                /** @type {?} */
                const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
                /** @type {?} */
                const dataLayer = window['dataLayer'];
                dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map(x => {
                    // console.log('dataLayer', dataLayer, x);
                    this.dataLayer = dataLayer;
                    return dataLayer;
                }));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    push(payload) {
        this.zone.runOutsideAngular(() => {
            if (this.dataLayer) {
                this.dataLayer.push(payload);
                this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                this.once().pipe(first()).subscribe(dataLayer => {
                    if (this.dataLayer) {
                        this.dataLayer.push(payload);
                        this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                });
            }
        });
    }
}
GoogleTagManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleTagManagerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: NgZone },
    { type: OnceService },
    { type: Logger }
];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i0.NgZone), i0.inject(i2.OnceService), i0.inject(i3.Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFdEQsTUFBTSxPQUFPLDZCQUE2QjtDQUd6Qzs7O0lBRkEsa0RBQWlCOztJQUNqQiw0Q0FBWTs7QUFHYixNQUFNLE9BQU8sc0JBQXNCO0NBRWxDOzs7SUFEQSxvQ0FBVzs7QUFNWixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQU9uQyxZQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixJQUFZLEVBQ1osV0FBd0IsRUFDeEIsTUFBYztRQUpPLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1gs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Q3pCLDZDQUFzQzs7Ozs7SUFHckMsNkNBQStDOzs7OztJQUMvQyxnREFBb0M7Ozs7O0lBQ3BDLHVDQUFvQjs7Ozs7SUFDcEIsOENBQWdDOzs7OztJQUNoQyx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmNlL29uY2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyUGFnZVZpZXdFdmVudCB7XG5cdGRhdGFMYXllcjogYW55W107XG5cdHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbmZpZyB7XG5cdGlkOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogR29vZ2xlVGFnTWFuYWdlckNvbmZpZztcblxuXHRwcml2YXRlIGRhdGFMYXllcjogYW55W107XG5cdHByaXZhdGUgZGF0YUxheWVyJDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucyAmJiAhdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5nb29nbGVUYWdNYW5hZ2VyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmdvb2dsZVRhZ01hbmFnZXInKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgR29vZ2xlVGFnTWFuYWdlckNvbmZpZygpLCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLmdvb2dsZVRhZ01hbmFnZXIpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEdvb2dsZVRhZ01hbmFnZXJDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZGF0YUxheWVyKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhTGF5ZXIkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGFMYXllciQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3dbJ2RhdGFMYXllciddID0gd2luZG93WydkYXRhTGF5ZXInXSB8fCBbXTtcblx0XHRcdFx0Y29uc3QgaWQgPSB0aGlzLm9wdGlvbnMuaWQ7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JHtpZH1gO1xuXHRcdFx0XHRjb25zdCBkYXRhTGF5ZXIgPSB3aW5kb3dbJ2RhdGFMYXllciddO1xuXHRcdFx0XHRkYXRhTGF5ZXIucHVzaCh7ICdndG0uc3RhcnQnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgZXZlbnQ6ICdndG0uanMnIH0pO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5vbmNlJywgc3JjLCBkYXRhTGF5ZXIpO1xuXHRcdFx0XHR0aGlzLmRhdGFMYXllciQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2RhdGFMYXllcicsIGRhdGFMYXllciwgeCk7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllciA9IGRhdGFMYXllcjtcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhTGF5ZXI7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YUxheWVyJDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHB1c2gocGF5bG9hZDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHR0aGlzLmRhdGFMYXllci5wdXNoKHBheWxvYWQpO1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcucHVzaCcsIHBheWxvYWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vbmNlKCkucGlwZShcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHQpLnN1YnNjcmliZShkYXRhTGF5ZXIgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIucHVzaChwYXlsb2FkKTtcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5wdXNoJywgcGF5bG9hZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vKlxuPCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgLS0+XG48c2NyaXB0PihmdW5jdGlvbih3LGQscyxsLGkpe3dbbF09d1tsXXx8W107d1tsXS5wdXNoKHsnZ3RtLnN0YXJ0Jzpcbm5ldyBEYXRlKCkuZ2V0VGltZSgpLGV2ZW50OidndG0uanMnfSk7dmFyIGY9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcbmo9ZC5jcmVhdGVFbGVtZW50KHMpLGRsPWwhPSdkYXRhTGF5ZXInPycmbD0nK2w6Jyc7ai5hc3luYz10cnVlO2ouc3JjPVxuJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nK2krZGw7Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqLGYpO1xufSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdkYXRhTGF5ZXInLCdHVE0tVFMySDZWRycpOzwvc2NyaXB0PlxuPCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPlxuKi9cblxuLypcbjwhLS0gYWZ0ZXIgPGJvZHk+IC0tPlxuPCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cbjxub3NjcmlwdD48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9R1RNLVRTMkg2VkdcIlxuaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3Zpc2liaWxpdHk6aGlkZGVuXCI+PC9pZnJhbWU+PC9ub3NjcmlwdD5cbjwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxuKi9cblxuLypcbndpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gJ2V2ZW50JzogJ1BhZ2V2aWV3JyxcbiAndXJsJzogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuY29tL3NvbWV0aGluZy9jb250YWN0LXVzJ1xuIH0pO1xuKi9cblxuXG4iXX0=