/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../../disposable/disposable.component';
import { ModalService } from './modal.service';
export class ModalContainerComponent extends DisposableComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.modalCount = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map((modals) => {
            this.modalCount = modals.length;
            /** @type {?} */
            const modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe((modal) => {
            this.className = modal ? modal.className : null;
        });
    }
    /**
     * @return {?}
     */
    doClose() {
        this.modalService.close();
    }
    /**
     * @return {?}
     */
    doPrev() {
        this.modalService.prev();
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ws-modal-container-component',
                template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal-bg\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal-page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"modal-prev\" (click)=\"doPrev()\" title=\"Indietro\" *ngIf=\"modalCount > 1\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-prev\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t\tindietro\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"modal-close\" (click)=\"doClose()\" title=\"Chiudi finestra\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-close\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<ws-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></ws-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".modal{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;width:100%;height:100%;z-index:10000;margin:0;padding:0;overflow:hidden;pointer-events:none;opacity:0;transition:opacity 250ms ease-in-out}.modal.active{opacity:1;pointer-events:all}.modal-bg{position:fixed;z-index:0;background:#1e1e1e;opacity:.87;top:0;left:0;bottom:0;right:0}.modal-page{position:relative;z-index:1;background:#fff;max-height:90vh;max-width:90vw;box-shadow:0 10px 40px -5px rgba(0,0,0,.5);overflow-y:auto}@media (max-width:500px){.modal-page{max-height:calc(100% - 80px);margin-top:40px;width:90%;max-width:none}}.modal-page .modal-header .modal-prev{padding:10px;z-index:1;color:#5f5d63;display:flex;font-size:11px;align-items:center;text-transform:uppercase;margin-left:4px}.modal-page .modal-header .modal-prev .ico{width:12px;height:12px;fill:#5f5d63;margin-right:4px}.modal-page .modal-header .modal-close{position:fixed;z-index:1;right:10px;top:10px}.modal-page .modal-header .modal-close .ico{fill:#fff;width:32px;height:32px}"]
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalService }
];
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.modalCount;
    /** @type {?} */
    ModalContainerComponent.prototype.className;
    /** @type {?} */
    ModalContainerComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVMvQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsbUJBQW1COzs7O0lBSy9ELFlBQ1EsWUFBMEI7UUFFakMsS0FBSyxFQUFFLENBQUM7UUFGRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUpsQyxlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBT3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixHQUFHLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O2tCQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDOUQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDRixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXJDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsMC9CQUErQztnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2FBQ3pDOzs7O1lBUFEsWUFBWTs7OztJQVdwQiw2Q0FBdUI7O0lBQ3ZCLDRDQUFtQjs7SUFHbEIsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3cy1tb2RhbC1jb250YWluZXItY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG1vZGFsQ291bnQ6IG51bWJlciA9IDA7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2Vcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLm1vZGFscyQucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdG1hcCgobW9kYWxzOiBNb2RhbFtdKSA9PiB7XG5cdFx0XHRcdHRoaXMubW9kYWxDb3VudCA9IG1vZGFscy5sZW5ndGg7XG5cdFx0XHRcdGNvbnN0IG1vZGFsID0gbW9kYWxzLmxlbmd0aCA/IG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gOiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbW9kYWw7XG5cdFx0XHR9KVxuXHRcdCkuc3Vic2NyaWJlKChtb2RhbDogTW9kYWwpID0+IHtcblx0XHRcdHRoaXMuY2xhc3NOYW1lID0gbW9kYWwgPyBtb2RhbC5jbGFzc05hbWUgOiBudWxsO1xuXHRcdH0pO1xuXHR9XG5cblx0ZG9DbG9zZSgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0ZG9QcmV2KCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnByZXYoKTtcblx0fVxuXG59XG4iXX0=