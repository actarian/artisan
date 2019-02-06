/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '../../disposable/disposable.component';
import { Modal, ModalData } from './modal';
var ModalViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ModalViewComponent, _super);
    function ModalViewComponent(resolver) {
        var _this = _super.call(this) || this;
        _this.resolver = resolver;
        return _this;
    }
    Object.defineProperty(ModalViewComponent.prototype, "modal", {
        set: /**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            if (this.component) {
                this.component.destroy();
            }
            if (!modal) {
                this.component = null;
                return;
            }
            /** @type {?} */
            var providers = Object.keys(modal.providers).map(function (key) {
                return { provide: key, useValue: modal.providers[key] };
            });
            providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(providers);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(modal.component);
            /** @type {?} */
            var component = factory.create(injector);
            this.modalContainer.insert(component.hostView);
            this.component = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    };
    ModalViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-modal-view-component',
                    template: "<ng-container #modalContainer></ng-container>\r\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ModalViewComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    ModalViewComponent.propDecorators = {
        modalContainer: [{ type: ViewChild, args: ['modalContainer', { read: ViewContainerRef },] }],
        modal: [{ type: Input }]
    };
    return ModalViewComponent;
}(DisposableComponent));
export { ModalViewComponent };
if (false) {
    /** @type {?} */
    ModalViewComponent.prototype.component;
    /** @type {?} */
    ModalViewComponent.prototype.modalContainer;
    /**
     * @type {?}
     * @private
     */
    ModalViewComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBZ0IsS0FBSyxFQUF1QixrQkFBa0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEwsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFM0M7SUFNd0MsOENBQW1CO0lBNkIxRCw0QkFDUyxRQUFrQztRQUQzQyxZQUdDLGlCQUFPLFNBQ1A7UUFIUSxjQUFRLEdBQVIsUUFBUSxDQUEwQjs7SUFHM0MsQ0FBQztJQTNCRCxzQkFBYSxxQ0FBSzs7Ozs7UUFBbEIsVUFBbUIsS0FBWTtZQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPO2FBQ1A7O2dCQUNLLFNBQVMsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO2dCQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3pELENBQUMsQ0FBQztZQUNGLFNBQVMsQ0FBQyxJQUFJLENBQ2IsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQzVDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQ25DLENBQUM7O2dCQUNJLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDOztnQkFDdEQsUUFBUSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQzs7Z0JBQ3ZHLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O2dCQUNoRSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7O0lBUUQsd0NBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOztnQkE5Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDZEQUEwQztvQkFFMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2lCQUN6Qzs7OztnQkFUbUIsd0JBQXdCOzs7aUNBYzFDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt3QkFFdEQsS0FBSzs7SUFvQ1AseUJBQUM7Q0FBQSxBQWhERCxDQU13QyxtQkFBbUIsR0EwQzFEO1NBMUNZLGtCQUFrQjs7O0lBRTlCLHVDQUE2Qjs7SUFFN0IsNENBQTBGOzs7OztJQTBCekYsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgUHJvdmlkZXIsIFJlZmxlY3RpdmVJbmplY3RvciwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsRGF0YSB9IGZyb20gJy4vbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3cy1tb2RhbC12aWV3LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC12aWV3LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbW9kYWwtdmlldy5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxWaWV3Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcblxuXHRAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBtb2RhbENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRASW5wdXQoKSBzZXQgbW9kYWwobW9kYWw6IE1vZGFsKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdGlmICghbW9kYWwpIHtcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gbnVsbDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcHJvdmlkZXJzOiBQcm92aWRlciA9IE9iamVjdC5rZXlzKG1vZGFsLnByb3ZpZGVycykubWFwKGtleSA9PiB7XG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBrZXksIHVzZVZhbHVlOiBtb2RhbC5wcm92aWRlcnNba2V5XSB9O1xuXHRcdH0pO1xuXHRcdHByb3ZpZGVycy5wdXNoKFxuXHRcdFx0eyBwcm92aWRlOiBNb2RhbERhdGEsIHVzZVZhbHVlOiBtb2RhbC5kYXRhIH0sXG5cdFx0XHR7IHByb3ZpZGU6IE1vZGFsLCB1c2VWYWx1ZTogbW9kYWwgfSxcblx0XHQpO1xuXHRcdGNvbnN0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUocHJvdmlkZXJzKTtcblx0XHRjb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocmVzb2x2ZWRJbnB1dHMsIHRoaXMubW9kYWxDb250YWluZXIucGFyZW50SW5qZWN0b3IpO1xuXHRcdGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KG1vZGFsLmNvbXBvbmVudCk7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXHRcdHRoaXMubW9kYWxDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb21wb25lbnQgPSBudWxsO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=