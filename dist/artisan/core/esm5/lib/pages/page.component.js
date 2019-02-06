/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, Input, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
import { Page } from './page';
/**
 * @record
 */
export function PageInit() { }
if (false) {
    /**
     * @return {?}
     */
    PageInit.prototype.PageInit = function () { };
}
var PageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageComponent, _super);
    function PageComponent(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.scrollToTop();
        return _this;
    }
    Object.defineProperty(PageComponent.prototype, "platformId", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.injector.get(PLATFORM_ID)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "routeService", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(RouteService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Router);
        },
        enumerable: true,
        configurable: true
    });
    // !!! Scroll to top on page change
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    PageComponent.prototype.scrollToTop = 
    // !!! Scroll to top on page change
    /**
     * @private
     * @return {?}
     */
    function () {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe(function (e) {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    };
    /**
     * @return {?}
     */
    PageComponent.prototype.getId = /**
     * @return {?}
     */
    function () {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    };
    /**
     * @return {?}
     */
    PageComponent.prototype.getSlug = /**
     * @return {?}
     */
    function () {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    };
    PageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-page',
                    template: "<h1>I'm a default view!</h1>"
                }] }
    ];
    /** @nocollapse */
    PageComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    PageComponent.propDecorators = {
        page: [{ type: Input }],
        params: [{ type: Input }],
        queryParams: [{ type: Input }]
    };
    return PageComponent;
}(DisposableComponent));
export { PageComponent };
if (false) {
    /** @type {?} */
    PageComponent.prototype.page;
    /** @type {?} */
    PageComponent.prototype.params;
    /** @type {?} */
    PageComponent.prototype.queryParams;
    /**
     * @type {?}
     * @protected
     */
    PageComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BhZ2VzL3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFFOUIsOEJBRUM7Ozs7O0lBREEsOENBQWlCOztBQUdsQjtJQUttQyx5Q0FBbUI7SUFrQnJELHVCQUNXLFFBQWtCO1FBRDdCLFlBR0MsaUJBQU8sU0FFUDtRQUpVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFHNUIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBakJELHNCQUFJLHFDQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFVLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVNELG1DQUFtQzs7Ozs7O0lBQzNCLG1DQUFXOzs7Ozs7SUFBbkI7UUFDQyxnREFBZ0Q7UUFDaEQsK0VBQStFO1FBQy9FLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDJDQUEyQztZQUMzQyxvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxFQUFFO29CQUNsQyxPQUFPO2lCQUNQO2dCQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7O0lBRUQsNkJBQUs7OztJQUFMO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCwrQkFBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBcERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDhCQUE4QjtpQkFDeEM7Ozs7Z0JBZG1CLFFBQVE7Ozt1QkFrQjFCLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQTZDUCxvQkFBQztDQUFBLEFBdERELENBS21DLG1CQUFtQixHQWlEckQ7U0FqRFksYUFBYTs7O0lBRXpCLDZCQUFvQjs7SUFDcEIsK0JBQW9DOztJQUNwQyxvQ0FBeUM7Ozs7O0lBZXhDLGlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi9yb3V0ZXMvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XG5cdFBhZ2VJbml0KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dzLXBhZ2UnLFxuXHR0ZW1wbGF0ZTogYDxoMT5JJ20gYSBkZWZhdWx0IHZpZXchPC9oMT5gLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBwYWdlOiBQYWdlO1xuXHRASW5wdXQoKSBwYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblx0QElucHV0KCkgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcblxuXHRnZXQgcGxhdGZvcm1JZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChQTEFURk9STV9JRCkgYXMgc3RyaW5nO1xuXHR9XG5cblx0Z2V0IHJvdXRlU2VydmljZSgpOiBSb3V0ZVNlcnZpY2Uge1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChSb3V0ZVNlcnZpY2UpO1xuXHR9XG5cblx0Z2V0IHJvdXRlcigpOiBSb3V0ZXIge1xuXHRcdHJldHVybiB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnNjcm9sbFRvVG9wKCk7XG5cdH1cblxuXHQvLyAhISEgU2Nyb2xsIHRvIHRvcCBvbiBwYWdlIGNoYW5nZVxuXHRwcml2YXRlIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuXHRcdC8vICEhISBQTEFURk9STV9JRCBkZXBlbmRhbmN5IG1hbnVhbGx5IGFjdGl2YXRlZFxuXHRcdC8vIGNvbnN0IHBsYXRmb3JtSWQ6IHN0cmluZyA9IFJvdXRlU2VydmljZS5pbmplY3Rvci5nZXQoUExBVEZPUk1fSUQpIGFzIHN0cmluZztcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Ly8gISEhIFJvdXRlciBkZXBlbmRhbmN5IG1hbnVhbGx5IGFjdGl2YXRlZFxuXHRcdFx0Ly8gY29uc3Qgcm91dGVyID0gUm91dGVTZXJ2aWNlLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIShlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0SWQoKTogbnVtYmVyIHwgc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UuZ2V0SWQoKSB8fCAodGhpcy5wYWdlID8gdGhpcy5wYWdlLmlkIDogMCk7XG5cdH1cblxuXHRnZXRTbHVnKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlLmdldFNsdWcoKSB8fCAodGhpcy5wYWdlID8gdGhpcy5wYWdlLnNsdWcgOiAnJyk7XG5cdH1cblxufVxuIl19