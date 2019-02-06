/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { DisposableComponent } from '../disposable/disposable.component';
import { FormService } from '../forms/form.service';
import { PageResolverService } from '../pages/page-resolver.service';
var EditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorComponent, _super);
    function EditorComponent(platformId, configService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.configService = configService;
        _this.markdownService = markdownService;
        _this.formService = formService;
        _this.pageResolverService = pageResolverService;
        _this.editing = false;
        _this.busy = false;
        _this.submitted = false;
        return _this;
    }
    Object.defineProperty(EditorComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            var _this = this;
            this._pageCopy = Object.assign({}, page);
            this._page = page;
            if (this._page) {
                this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
                this.group = this.formService.getGroupFromControls(this.controls);
                this.group.valueChanges.subscribe(function (x) {
                    _this.onAssign(x); // Object.assign(this._page, x);
                });
            }
            else {
                this.controls = [];
                this.group = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "componentName", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._page) {
                /** @type {?} */
                var component = this.configService.options.pages[this._page.component];
                if (component) {
                    return component.name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} page
     * @return {?}
     */
    EditorComponent.prototype.getControlsByPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page ? Object.keys(page).filter(function (key) { return typeof page[key] !== 'object'; }).map(function (key, i) {
            return {
                key: key,
                value: page[key],
                schema: key === 'description' ? 'markdown' : 'text',
                label: key,
                placeholder: key,
                required: false,
                order: i + 1
            };
        }) : [];
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                // console.log('EditorComponent.resolver', resolver);
                _this.page = resolver ? resolver.page : null;
            });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    EditorComponent.prototype.onKeydown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.key === 'e' && e.ctrlKey) {
            // this.editing = this.configService.options.editor && !this.editing;
            this.editing = !this.editing;
            // console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('EditorComponent.onReset');
        Object.keys(this.group.controls).forEach(function (key) {
            _this.group.get(key).setValue(_this._pageCopy[key]);
        });
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    };
    /**
     * @param {?} model
     * @return {?}
     */
    EditorComponent.prototype.onSubmit = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        // console.log('EditorComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    EditorComponent.prototype.onAssign = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        Object.keys(this.group.controls).forEach(function (key) {
            switch (key) {
                case 'description':
                    _this._page[key] = _this.markdownService.compile(model[key]);
                    break;
                default:
                    _this._page[key] = model[key];
            }
        });
    };
    EditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ws-editor',
                    template: "<ng-container>\n\t<div class=\"page--editor\" [@openClose]=\"editing ? 'open' : 'closed'\" (clickOutside)=\"editing = false\">\n\t\t<ng-container *ngIf=\"editing && page\">\n\t\t\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t\t\t<hr>\n\t\t\t\t<!--\n\t\t\t\t<div class=\"fieldset\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Label</label>\n\t\t\t\t\t\t<input placeholder=\"placeholder\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\" autocomplete=\"title\">\n\t\t\t\t\t\t<div *ngIf=\"title.invalid && (form.submitted || title.dirty || title.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div *ngIf=\"title.errors.required\">{{ 'errors.required' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t\t\t<div *ngFor=\"let control of controls\">\n\t\t\t\t\t<ws-control [control]=\"control\" [form]=\"group\"></ws-control>\n\t\t\t\t</div>\n\t\t\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t\t\t<div class=\"action-bar\">\n\t\t\t\t\t<button type=\"text\" class=\"btn btn--dimmed\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ng-container>\n\t</div>\n</ng-container>\n",
                    animations: [
                        trigger('openClose', [
                            state('open', style({
                                opacity: 1,
                                transform: 'translateX(0)',
                            })),
                            state('closed', style({
                                opacity: 0.5,
                                transform: 'translateX(100%)',
                            })),
                            transition('open => closed', [
                                animate('250ms')
                            ]),
                            transition('closed => open', [
                                animate('150ms')
                            ]),
                        ]),
                    ],
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.page--editor{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.page--editor .h1{color:#55555a}@media (max-width:1024px){.page--editor{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: MarkdownService },
        { type: FormService },
        { type: PageResolverService }
    ]; };
    EditorComponent.propDecorators = {
        onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return EditorComponent;
}(DisposableComponent));
export { EditorComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._pageCopy;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._page;
    /** @type {?} */
    EditorComponent.prototype.controls;
    /** @type {?} */
    EditorComponent.prototype.group;
    /** @type {?} */
    EditorComponent.prototype.editing;
    /** @type {?} */
    EditorComponent.prototype.busy;
    /** @type {?} */
    EditorComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.markdownService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.formService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.pageResolverService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckU7SUF3QnFDLDJDQUFtQjtJQVl2RCx5QkFDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsbUJBQXdDO1FBTGpELFlBT0MsaUJBQU8sU0FDUDtRQVA2QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVRqRCxhQUFPLEdBQVksS0FBSyxDQUFDO1FB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b250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSwgQ29udHJvbEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vZm9ybXMvY29udHJvbHMvY29udHJvbC1iYXNlJztcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybXMvZm9ybS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9wYWdlJztcbmltcG9ydCB7IFBhZ2VSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UtcmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyU2VydmljZSB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UtcmVzb2x2ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dzLWVkaXRvcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcblx0YW5pbWF0aW9uczogW1xuXHRcdHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcblx0XHRcdHN0YXRlKCdvcGVuJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcblx0XHRcdH0pKSxcblx0XHRcdHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG5cdFx0XHR9KSksXG5cdFx0XHR0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMjUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XHR0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMTUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XSksXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBfcGFnZUNvcHk6IFBhZ2U7XG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XG5cblx0Y29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXTtcblx0Z3JvdXA6IEZvcm1Hcm91cDtcblxuXHRlZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cdGJ1c3k6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlUmVzb2x2ZXJTZXJ2aWNlOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IHBhZ2UoKTogUGFnZSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XG5cdH1cblxuXHRzZXQgcGFnZShwYWdlOiBQYWdlKSB7XG5cdFx0dGhpcy5fcGFnZUNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBwYWdlKTtcblx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Q29udHJvbHNGcm9tT3B0aW9ucyh0aGlzLmdldENvbnRyb2xzQnlQYWdlKHBhZ2UpKTtcblx0XHRcdHRoaXMuZ3JvdXAgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldEdyb3VwRnJvbUNvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuXHRcdFx0dGhpcy5ncm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR0aGlzLm9uQXNzaWduKHgpOyAvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIHgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHRcdHRoaXMuZ3JvdXAgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzW3RoaXMuX3BhZ2UuY29tcG9uZW50XTtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldENvbnRyb2xzQnlQYWdlKHBhZ2U6IFBhZ2UpOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdIHtcblx0XHRyZXR1cm4gcGFnZSA/IE9iamVjdC5rZXlzKHBhZ2UpLmZpbHRlcihrZXkgPT4gdHlwZW9mIHBhZ2Vba2V5XSAhPT0gJ29iamVjdCcpLm1hcCgoa2V5OiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdHZhbHVlOiBwYWdlW2tleV0sXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0Jyxcblx0XHRcdFx0bGFiZWw6IGtleSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGtleSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRvcmRlcjogaSArIDFcblx0XHRcdH07XG5cdFx0fSkgOiBbXTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZSgocmVzb2x2ZXI6IFBhZ2VSZXNvbHZlcikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50LnJlc29sdmVyJywgcmVzb2x2ZXIpO1xuXHRcdFx0XHR0aGlzLnBhZ2UgPSByZXNvbHZlciA/IHJlc29sdmVyLnBhZ2UgOiBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG5cdG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKGUua2V5ID09PSAnZScgJiYgZS5jdHJsS2V5KSB7XG5cdFx0XHQvLyB0aGlzLmVkaXRpbmcgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5lZGl0b3IgJiYgIXRoaXMuZWRpdGluZztcblx0XHRcdHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50LmRvY3VtZW50OmtleWRvd24nLCBlLmtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5jb2RlKTtcblx0XHR9XG5cdH1cblxuXHRvblJlc2V0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQub25SZXNldCcpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuZ3JvdXAuZ2V0KGtleSkuc2V0VmFsdWUodGhpcy5fcGFnZUNvcHlba2V5XSk7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRjb25zdCBrZXlzID0gdGhpcy5jb250cm9scy5tYXAoeCA9PiB4LmtleSk7XG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaywgdGhpcy5fcGFnZVtrXSwgdGhpcy5fcGFnZUNvcHlba10pO1xuXHRcdFx0dGhpcy5fcGFnZVtrXSA9IHRoaXMuX3BhZ2VDb3B5W2tdO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRvblN1Ym1pdChtb2RlbCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQub25TdWJtaXQnLCBtb2RlbCk7XG5cdFx0dGhpcy5vbkFzc2lnbihtb2RlbCk7XG5cdFx0Ly8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCBtb2RlbCk7XG5cdH1cblxuXHRvbkFzc2lnbihtb2RlbCkge1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHN3aXRjaCAoa2V5KSB7XG5cdFx0XHRcdGNhc2UgJ2Rlc2NyaXB0aW9uJzpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSB0aGlzLm1hcmtkb3duU2VydmljZS5jb21waWxlKG1vZGVsW2tleV0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuX3BhZ2Vba2V5XSA9IG1vZGVsW2tleV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuIl19