/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../../disposable/disposable.component';
import { PayPalConfig, PayPalService } from './paypal.service';
export class PayPalWidgetComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} paypalService
     */
    constructor(platformId, paypalService) {
        super();
        this.platformId = platformId;
        this.paypalService = paypalService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(paypal => {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    }
}
PayPalWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ws-paypal-widget-component',
                template: `<div id="#paypal-widget-button"></div>`
            }] }
];
/** @nocollapse */
PayPalWidgetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PayPalService }
];
PayPalWidgetComponent.propDecorators = {
    paypalOptions: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU8vRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1COzs7OztJQUs3RCxZQUM4QixVQUFrQixFQUN2QyxhQUE0QjtRQUVwQyxLQUFLLEVBQUUsQ0FBQztRQUhxQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBR3JDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FDMUUsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BCLHdEQUF3RDtZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7O1lBekJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUUsd0NBQXdDO2FBQ2xEOzs7O3lDQVFFLE1BQU0sU0FBQyxXQUFXO1lBYkUsYUFBYTs7OzRCQVNsQyxLQUFLOzs7O0lBQU4sOENBQXFDOztJQUNyQyx1Q0FBZ0I7Ozs7O0lBR2YsMkNBQStDOzs7OztJQUMvQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXlQYWxDb25maWcsIFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BheXBhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd3MtcGF5cGFsLXdpZGdldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCIjcGF5cGFsLXdpZGdldC1idXR0b25cIj48L2Rpdj5gLFxufSlcblxuZXhwb3J0IGNsYXNzIFBheVBhbFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwYXlwYWxPcHRpb25zOiBQYXlQYWxDb25maWc7XG5cdGxvYWRlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBheXBhbFNlcnZpY2U6IFBheVBhbFNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucGF5cGFsU2VydmljZS5yZW5kZXIodGhpcy5wYXlwYWxPcHRpb25zLCAnI3BheXBhbC13aWRnZXQtYnV0dG9uJykucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZShwYXlwYWwgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsV2lkZ2V0Q29tcG9uZW50LnJlbmRlcmVkJywgcGF5cGFsKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==