/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { DisposableComponent } from '../../disposable/disposable.component';
import { GoogleTagManagerService } from './google-tag-manager.service';
export class GoogleTagManagerComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} router
     * @param {?} googleTagManager
     */
    constructor(platformId, configService, router, googleTagManager) {
        super();
        this.platformId = platformId;
        this.configService = configService;
        this.router = router;
        this.googleTagManager = googleTagManager;
        this.useIframe = true;
        this.pageView = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(e => e instanceof NavigationEnd)).subscribe((e) => {
                /** @type {?} */
                const url = `${this.configService.options.origin}${e.urlAfterRedirects}`;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (this.dataLayer) {
                    this.pageView.emit({ dataLayer: this.dataLayer, url });
                }
                else {
                    this.googleTagManager.once().pipe(takeUntil(this.unsubscribe)).subscribe(dataLayer => {
                        // console.log('dataLayer', dataLayer);
                        this.id = this.googleTagManager.options.id;
                        this.iframeUrl = `https://www.googletagmanager.com/ns.html?id=${this.id}`;
                        this.dataLayer = dataLayer;
                        this.pageView.emit({ dataLayer: this.dataLayer, url });
                    });
                }
            });
        }
    }
}
GoogleTagManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ws-google-tag-manager',
                template: `
	<!-- Google Tag Manager (noscript) -->
		<noscript *ngIf="useIframe && dataLayer">
			<iframe [src]="iframeUrl | safeUrl" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
	<!-- End Google Tag Manager (noscript) -->`
            }] }
];
/** @nocollapse */
GoogleTagManagerComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: Router },
    { type: GoogleTagManagerService }
];
GoogleTagManagerComponent.propDecorators = {
    pageView: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFZdkUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjs7Ozs7OztJQVNqRSxZQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixNQUFjLEVBQ2QsZ0JBQXlDO1FBRWpELEtBQUssRUFBRSxDQUFDO1FBTHFCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFYbEQsY0FBUyxHQUFZLElBQUksQ0FBQztRQUtULGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUy9DLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksYUFBYSxDQUFDLENBQ3ZDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFOztzQkFDMUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDeEUsaUdBQWlHO2dCQUNqRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDdkQ7cUJBQU07b0JBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3ZCLHVDQUF1Qzt3QkFDdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRywrQ0FBK0MsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxDQUFDLENBQUMsQ0FBQztpQkFDSDtZQUNGLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7WUFuREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7NENBS2lDO2FBQzNDOzs7O3lDQVlFLE1BQU0sU0FBQyxXQUFXO1lBeEJaLGFBQWE7WUFGRSxNQUFNO1lBSXJCLHVCQUF1Qjs7O3VCQW1COUIsTUFBTTs7OztJQUxQLDhDQUEwQjs7SUFDMUIsdUNBQVc7O0lBQ1gsOENBQWtCOztJQUNsQiw4Q0FBaUI7O0lBRWpCLDZDQUErQzs7Ozs7SUFHOUMsK0NBQStDOzs7OztJQUMvQyxrREFBb0M7Ozs7O0lBQ3BDLDJDQUFzQjs7Ozs7SUFDdEIscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3cy1nb29nbGUtdGFnLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8IS0tIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxuXHRcdDxub3NjcmlwdCAqbmdJZj1cInVzZUlmcmFtZSAmJiBkYXRhTGF5ZXJcIj5cblx0XHRcdDxpZnJhbWUgW3NyY109XCJpZnJhbWVVcmwgfCBzYWZlVXJsXCIgaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3Zpc2liaWxpdHk6aGlkZGVuXCI+PC9pZnJhbWU+XG5cdFx0PC9ub3NjcmlwdD5cblx0PCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdHVzZUlmcmFtZTogYm9vbGVhbiA9IHRydWU7XG5cdGlkOiBzdHJpbmc7XG5cdGlmcmFtZVVybDogc3RyaW5nO1xuXHRkYXRhTGF5ZXI6IGFueVtdO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgcGFnZVZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBnb29nbGVUYWdNYW5hZ2VyOiBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdFx0ZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuXHRcdFx0KS5zdWJzY3JpYmUoKGU6IE5hdmlnYXRpb25FbmQpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gYCR7dGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMub3JpZ2lufSR7ZS51cmxBZnRlclJlZGlyZWN0c31gO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudC5OYXZpZ2F0aW9uRW5kJywgZS5pZCwgZS51cmwsIGUudXJsQWZ0ZXJSZWRpcmVjdHMsIHVybCk7XG5cdFx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHRcdHRoaXMucGFnZVZpZXcuZW1pdCh7IGRhdGFMYXllcjogdGhpcy5kYXRhTGF5ZXIsIHVybCB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmdvb2dsZVRhZ01hbmFnZXIub25jZSgpLnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdFx0XHQpLnN1YnNjcmliZShkYXRhTGF5ZXIgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2RhdGFMYXllcicsIGRhdGFMYXllcik7XG5cdFx0XHRcdFx0XHR0aGlzLmlkID0gdGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9wdGlvbnMuaWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmlmcmFtZVVybCA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPSR7dGhpcy5pZH1gO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIgPSBkYXRhTGF5ZXI7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VWaWV3LmVtaXQoeyBkYXRhTGF5ZXI6IHRoaXMuZGF0YUxheWVyLCB1cmwgfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=