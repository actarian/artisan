/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @enum {number} */
const ModalEventType = {
    Complete: 0,
    Close: 1,
};
export { ModalEventType };
ModalEventType[ModalEventType.Complete] = 'Complete';
ModalEventType[ModalEventType.Close] = 'Close';
export class ModalCompleteEvent {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.type = ModalEventType.Complete;
        // console.log('ModalCompleteEvent', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    ModalCompleteEvent.prototype.modal;
    /** @type {?} */
    ModalCompleteEvent.prototype.data;
    /** @type {?} */
    ModalCompleteEvent.prototype.type;
}
export class ModalCloseEvent {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.type = ModalEventType.Close;
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    ModalCloseEvent.prototype.modal;
    /** @type {?} */
    ModalCloseEvent.prototype.data;
    /** @type {?} */
    ModalCloseEvent.prototype.type;
}
export class Modal {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
}
Modal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: Modal }
];
/** @nocollapse */ Modal.ngInjectableDef = i0.defineInjectable({ factory: function Modal_Factory() { return new Modal(i0.inject(Modal)); }, token: Modal, providedIn: "root" });
if (false) {
    /** @type {?} */
    Modal.prototype.component;
    /** @type {?} */
    Modal.prototype.providers;
    /** @type {?} */
    Modal.prototype.data;
    /** @type {?} */
    Modal.prototype.emitter;
    /** @type {?} */
    Modal.prototype.className;
}
export class ModalData extends Object {
}
ModalData.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ModalData.ngInjectableDef = i0.defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7OztJQUdsRSxXQUFZO0lBQ1osUUFBUzs7Ozs7QUFHVixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBSzlCLFlBQVksT0FBNEI7UUFGeEMsU0FBSSxHQUE2QixjQUFjLENBQUMsUUFBUSxDQUFDO1FBR3hELDhDQUE4QztRQUM5QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUNEOzs7SUFWQSxtQ0FBYTs7SUFDYixrQ0FBVzs7SUFDWCxrQ0FBeUQ7O0FBVTFELE1BQU0sT0FBTyxlQUFlOzs7O0lBSzNCLFlBQVksT0FBeUI7UUFGckMsU0FBSSxHQUEwQixjQUFjLENBQUMsS0FBSyxDQUFDO1FBR2xELElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0Q7OztJQVRBLGdDQUFhOztJQUNiLCtCQUFXOztJQUNYLCtCQUFtRDs7QUFjcEQsTUFBTSxPQUFPLEtBQUs7Ozs7SUFPakIsWUFBWSxPQUFlO1FBTDNCLGNBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUF3RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSWpGLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDOzs7WUFkRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFRc0IsS0FBSzs7Ozs7SUFOM0IsMEJBQWU7O0lBQ2YsMEJBQTBCOztJQUMxQixxQkFBVzs7SUFDWCx3QkFBa0Y7O0lBQ2xGLDBCQUFtQjs7QUFZcEIsTUFBTSxPQUFPLFNBQVUsU0FBUSxNQUFNOzs7WUFIcEMsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxFdmVudFR5cGUge1xyXG5cdENvbXBsZXRlID0gMCxcclxuXHRDbG9zZSA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBsZXRlRXZlbnQge1xyXG5cdG1vZGFsOiBNb2RhbDtcclxuXHRkYXRhPzogYW55O1xyXG5cdHR5cGU/OiBNb2RhbEV2ZW50VHlwZS5Db21wbGV0ZSA9IE1vZGFsRXZlbnRUeXBlLkNvbXBsZXRlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWxDb21wbGV0ZUV2ZW50KSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnTW9kYWxDb21wbGV0ZUV2ZW50Jywgb3B0aW9ucyk7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ2xvc2VFdmVudCB7XHJcblx0bW9kYWw6IE1vZGFsO1xyXG5cdGRhdGE/OiBhbnk7XHJcblx0dHlwZT86IE1vZGFsRXZlbnRUeXBlLkNsb3NlID0gTW9kYWxFdmVudFR5cGUuQ2xvc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBNb2RhbENsb3NlRXZlbnQpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNb2RhbEV2ZW50PFQ+ID0gTW9kYWxDb21wbGV0ZUV2ZW50IHwgTW9kYWxDbG9zZUV2ZW50O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG5cdGNvbXBvbmVudDogYW55O1xyXG5cdHByb3ZpZGVycz86IFByb3ZpZGVyID0gW107XHJcblx0ZGF0YT86IGFueTtcclxuXHRlbWl0dGVyPzogRXZlbnRFbWl0dGVyPE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWwpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbERhdGEgZXh0ZW5kcyBPYmplY3QgeyB9XHJcbiJdfQ==