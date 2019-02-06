/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { DisposableComponent } from '../../disposable/disposable.component';
import { GoogleTagManagerService } from './google-tag-manager.service';
var GoogleTagManagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GoogleTagManagerComponent, _super);
    function GoogleTagManagerComponent(platformId, configService, router, googleTagManager) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.configService = configService;
        _this.router = router;
        _this.googleTagManager = googleTagManager;
        _this.useIframe = true;
        _this.pageView = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleTagManagerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function (e) {
                /** @type {?} */
                var url = "" + _this.configService.options.origin + e.urlAfterRedirects;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (_this.dataLayer) {
                    _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                }
                else {
                    _this.googleTagManager.once().pipe(takeUntil(_this.unsubscribe)).subscribe(function (dataLayer) {
                        // console.log('dataLayer', dataLayer);
                        _this.id = _this.googleTagManager.options.id;
                        _this.iframeUrl = "https://www.googletagmanager.com/ns.html?id=" + _this.id;
                        _this.dataLayer = dataLayer;
                        _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                    });
                }
            });
        }
    };
    GoogleTagManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-google-tag-manager',
                    template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->"
                }] }
    ];
    /** @nocollapse */
    GoogleTagManagerComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: Router },
        { type: GoogleTagManagerService }
    ]; };
    GoogleTagManagerComponent.propDecorators = {
        pageView: [{ type: Output }]
    };
    return GoogleTagManagerComponent;
}(DisposableComponent));
export { GoogleTagManagerComponent };
if (false) {
    /** @type {?} */
    GoogleTagManagerComponent.prototype.useIframe;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.id;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.iframeUrl;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.pageView;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.googleTagManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBVStDLHFEQUFtQjtJQVNqRSxtQ0FDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsTUFBYyxFQUNkLGdCQUF5QztRQUpsRCxZQU1DLGlCQUFPLFNBQ1A7UUFONkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFYbEQsZUFBUyxHQUFZLElBQUksQ0FBQztRQUtULGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQVMvQyxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQUEsaUJBdUJDO1FBdEJBLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLGFBQWEsRUFBMUIsQ0FBMEIsQ0FBQyxDQUN2QyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQWdCOztvQkFDdEIsR0FBRyxHQUFHLEtBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxpQkFBbUI7Z0JBQ3hFLGlHQUFpRztnQkFDakcsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztpQkFDdkQ7cUJBQU07b0JBQ04sS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO3dCQUNwQix1Q0FBdUM7d0JBQ3ZDLEtBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQzNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsaURBQStDLEtBQUksQ0FBQyxFQUFJLENBQUM7d0JBQzFFLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO3dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztvQkFDeEQsQ0FBQyxDQUFDLENBQUM7aUJBQ0g7WUFDRixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7Z0JBbkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscVJBS2lDO2lCQUMzQzs7Ozs2Q0FZRSxNQUFNLFNBQUMsV0FBVztnQkF4QlosYUFBYTtnQkFGRSxNQUFNO2dCQUlyQix1QkFBdUI7OzsyQkFtQjlCLE1BQU07O0lBb0NSLGdDQUFDO0NBQUEsQUFyREQsQ0FVK0MsbUJBQW1CLEdBMkNqRTtTQTNDWSx5QkFBeUI7OztJQUVyQyw4Q0FBMEI7O0lBQzFCLHVDQUFXOztJQUNYLDhDQUFrQjs7SUFDbEIsOENBQWlCOztJQUVqQiw2Q0FBK0M7Ozs7O0lBRzlDLCtDQUErQzs7Ozs7SUFDL0Msa0RBQW9DOzs7OztJQUNwQywyQ0FBc0I7Ozs7O0lBQ3RCLHFEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE91dHB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd3MtZ29vZ2xlLXRhZy1tYW5hZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0PCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cblx0XHQ8bm9zY3JpcHQgKm5nSWY9XCJ1c2VJZnJhbWUgJiYgZGF0YUxheWVyXCI+XG5cdFx0XHQ8aWZyYW1lIFtzcmNdPVwiaWZyYW1lVXJsIHwgc2FmZVVybFwiIGhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPlxuXHRcdDwvbm9zY3JpcHQ+XG5cdDwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHR1c2VJZnJhbWU6IGJvb2xlYW4gPSB0cnVlO1xuXHRpZDogc3RyaW5nO1xuXHRpZnJhbWVVcmw6IHN0cmluZztcblx0ZGF0YUxheWVyOiBhbnlbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBhZ2VWaWV3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgZ29vZ2xlVGFnTWFuYWdlcjogR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRcdGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcblx0XHRcdCkuc3Vic2NyaWJlKChlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3RoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLm9yaWdpbn0ke2UudXJsQWZ0ZXJSZWRpcmVjdHN9YDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQuTmF2aWdhdGlvbkVuZCcsIGUuaWQsIGUudXJsLCBlLnVybEFmdGVyUmVkaXJlY3RzLCB1cmwpO1xuXHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VWaWV3LmVtaXQoeyBkYXRhTGF5ZXI6IHRoaXMuZGF0YUxheWVyLCB1cmwgfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9uY2UoKS5waXBlKFxuXHRcdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHRcdFx0KS5zdWJzY3JpYmUoZGF0YUxheWVyID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhTGF5ZXInLCBkYXRhTGF5ZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5pZCA9IHRoaXMuZ29vZ2xlVGFnTWFuYWdlci5vcHRpb25zLmlkO1xuXHRcdFx0XHRcdFx0dGhpcy5pZnJhbWVVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD0ke3RoaXMuaWR9YDtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyID0gZGF0YUxheWVyO1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlVmlldy5lbWl0KHsgZGF0YUxheWVyOiB0aGlzLmRhdGFMYXllciwgdXJsIH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuIl19