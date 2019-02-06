/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { DisposableComponent } from '../disposable/disposable.component';
import { FormService } from '../forms/form.service';
import { PageResolverService } from '../pages/page-resolver.service';
export class EditorComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} markdownService
     * @param {?} formService
     * @param {?} pageResolverService
     */
    constructor(platformId, configService, markdownService, formService, pageResolverService) {
        super();
        this.platformId = platformId;
        this.configService = configService;
        this.markdownService = markdownService;
        this.formService = formService;
        this.pageResolverService = pageResolverService;
        this.editing = false;
        this.busy = false;
        this.submitted = false;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set page(page) {
        this._pageCopy = Object.assign({}, page);
        this._page = page;
        if (this._page) {
            this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
            this.group = this.formService.getGroupFromControls(this.controls);
            this.group.valueChanges.subscribe(x => {
                this.onAssign(x); // Object.assign(this._page, x);
            });
        }
        else {
            this.controls = [];
            this.group = null;
        }
    }
    /**
     * @return {?}
     */
    get componentName() {
        if (this._page) {
            /** @type {?} */
            const component = this.configService.options.pages[this._page.component];
            if (component) {
                return component.name;
            }
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getControlsByPage(page) {
        return page ? Object.keys(page).filter(key => typeof page[key] !== 'object').map((key, i) => {
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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe((resolver) => {
                // console.log('EditorComponent.resolver', resolver);
                this.page = resolver ? resolver.page : null;
            });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeydown(e) {
        if (e.key === 'e' && e.ctrlKey) {
            // this.editing = this.configService.options.editor && !this.editing;
            this.editing = !this.editing;
            // console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    }
    /**
     * @return {?}
     */
    onReset() {
        // console.log('EditorComponent.onReset');
        Object.keys(this.group.controls).forEach(key => {
            this.group.get(key).setValue(this._pageCopy[key]);
        });
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onSubmit(model) {
        // console.log('EditorComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onAssign(model) {
        Object.keys(this.group.controls).forEach(key => {
            switch (key) {
                case 'description':
                    this._page[key] = this.markdownService.compile(model[key]);
                    break;
                default:
                    this._page[key] = model[key];
            }
        });
    }
}
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
EditorComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: MarkdownService },
    { type: FormService },
    { type: PageResolverService }
];
EditorComponent.propDecorators = {
    onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQTBCckUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsbUJBQW1COzs7Ozs7OztJQVl2RCxZQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixtQkFBd0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFOcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVRqRCxZQUFP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QixtaUVBQXNDO2dCQUV0QyxVQUFVLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ25CLE9BQU8sRUFBRSxDQUFDOzRCQUNWLFNBQVMsRUFBRSxlQUFlO3lCQUMxQixDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3JCLE9BQU8sRUFBRSxHQUFHOzRCQUNaLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzdCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ2hCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFOzRCQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUNoQixDQUFDO3FCQUNGLENBQUM7aUJBQ0Y7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2FBQ3pDOzs7O3lDQWNFLE1BQU0sU0FBQyxXQUFXO1lBN0NaLGFBQWE7WUFGYixlQUFlO1lBS2YsV0FBVztZQUdYLG1CQUFtQjs7O3dCQXFHMUIsWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBekU1QyxvQ0FBd0I7Ozs7O0lBQ3hCLGdDQUFvQjs7SUFFcEIsbUNBQTZCOztJQUM3QixnQ0FBaUI7O0lBRWpCLGtDQUF5Qjs7SUFDekIsK0JBQXNCOztJQUN0QixvQ0FBMkI7Ozs7O0lBRzFCLHFDQUErQzs7Ozs7SUFDL0Msd0NBQW9DOzs7OztJQUNwQywwQ0FBd0M7Ozs7O0lBQ3hDLHNDQUFnQzs7Ozs7SUFDaEMsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJ25neC1tYXJrZG93bic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9mb3Jtcy9jb250cm9scy9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy9mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyIH0gZnJvbSAnLi4vcGFnZXMvcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZXMvcGFnZS1yZXNvbHZlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd3MtZWRpdG9yJyxcblx0dGVtcGxhdGVVcmw6ICcuL2VkaXRvci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcignb3BlbkNsb3NlJywgW1xuXHRcdFx0c3RhdGUoJ29wZW4nLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuXHRcdFx0fSkpLFxuXHRcdFx0c3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMC41LFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcblx0XHRcdH0pKSxcblx0XHRcdHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW1xuXHRcdFx0XHRhbmltYXRlKCcyNTBtcycpXG5cdFx0XHRdKSxcblx0XHRcdHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuXHRcdFx0XHRhbmltYXRlKCcxNTBtcycpXG5cdFx0XHRdKSxcblx0XHRdKSxcblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRwcml2YXRlIF9wYWdlQ29weTogUGFnZTtcblx0cHJpdmF0ZSBfcGFnZTogUGFnZTtcblxuXHRjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdO1xuXHRncm91cDogRm9ybUdyb3VwO1xuXG5cdGVkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0YnVzeTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VSZXNvbHZlclNlcnZpY2U6IFBhZ2VSZXNvbHZlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgcGFnZSgpOiBQYWdlIHtcblx0XHRyZXR1cm4gdGhpcy5fcGFnZTtcblx0fVxuXG5cdHNldCBwYWdlKHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xuXHRcdHRoaXMuX3BhZ2UgPSBwYWdlO1xuXHRcdGlmICh0aGlzLl9wYWdlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5mb3JtU2VydmljZS5nZXRDb250cm9sc0Zyb21PcHRpb25zKHRoaXMuZ2V0Q29udHJvbHNCeVBhZ2UocGFnZSkpO1xuXHRcdFx0dGhpcy5ncm91cCA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0R3JvdXBGcm9tQ29udHJvbHModGhpcy5jb250cm9scyk7XG5cdFx0XHR0aGlzLmdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHRoaXMub25Bc3NpZ24oeCk7IC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgeCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdFx0dGhpcy5ncm91cCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbdGhpcy5fcGFnZS5jb21wb25lbnRdO1xuXHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRyZXR1cm4gY29tcG9uZW50Lm5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29udHJvbHNCeVBhZ2UocGFnZTogUGFnZSk6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10ge1xuXHRcdHJldHVybiBwYWdlID8gT2JqZWN0LmtleXMocGFnZSkuZmlsdGVyKGtleSA9PiB0eXBlb2YgcGFnZVtrZXldICE9PSAnb2JqZWN0JykubWFwKChrZXk6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRrZXk6IGtleSxcblx0XHRcdFx0dmFsdWU6IHBhZ2Vba2V5XSxcblx0XHRcdFx0c2NoZW1hOiBrZXkgPT09ICdkZXNjcmlwdGlvbicgPyAnbWFya2Rvd24nIDogJ3RleHQnLFxuXHRcdFx0XHRsYWJlbDoga2V5LFxuXHRcdFx0XHRwbGFjZWhvbGRlcjoga2V5LFxuXHRcdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRcdG9yZGVyOiBpICsgMVxuXHRcdFx0fTtcblx0XHR9KSA6IFtdO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnBhZ2VSZXNvbHZlclNlcnZpY2UuZXZlbnRzJC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdCkuc3Vic2NyaWJlKChyZXNvbHZlcjogUGFnZVJlc29sdmVyKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQucmVzb2x2ZXInLCByZXNvbHZlcik7XG5cdFx0XHRcdHRoaXMucGFnZSA9IHJlc29sdmVyID8gcmVzb2x2ZXIucGFnZSA6IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcblx0b25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdlJyAmJiBlLmN0cmxLZXkpIHtcblx0XHRcdC8vIHRoaXMuZWRpdGluZyA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmVkaXRvciAmJiAhdGhpcy5lZGl0aW5nO1xuXHRcdFx0dGhpcy5lZGl0aW5nID0gIXRoaXMuZWRpdGluZztcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQuZG9jdW1lbnQ6a2V5ZG93bicsIGUua2V5LCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLmNvZGUpO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVzZXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvckNvbXBvbmVudC5vblJlc2V0Jyk7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ncm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0dGhpcy5ncm91cC5nZXQoa2V5KS5zZXRWYWx1ZSh0aGlzLl9wYWdlQ29weVtrZXldKTtcblx0XHR9KTtcblx0XHQvKlxuXHRcdGNvbnN0IGtleXMgPSB0aGlzLmNvbnRyb2xzLm1hcCh4ID0+IHgua2V5KTtcblx0XHRrZXlzLmZvckVhY2goayA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhrLCB0aGlzLl9wYWdlW2tdLCB0aGlzLl9wYWdlQ29weVtrXSk7XG5cdFx0XHR0aGlzLl9wYWdlW2tdID0gdGhpcy5fcGFnZUNvcHlba107XG5cdFx0fSk7XG5cdFx0Ki9cblx0fVxuXG5cdG9uU3VibWl0KG1vZGVsKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvckNvbXBvbmVudC5vblN1Ym1pdCcsIG1vZGVsKTtcblx0XHR0aGlzLm9uQXNzaWduKG1vZGVsKTtcblx0XHQvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIG1vZGVsKTtcblx0fVxuXG5cdG9uQXNzaWduKG1vZGVsKSB7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ncm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdFx0Y2FzZSAnZGVzY3JpcHRpb24nOlxuXHRcdFx0XHRcdHRoaXMuX3BhZ2Vba2V5XSA9IHRoaXMubWFya2Rvd25TZXJ2aWNlLmNvbXBpbGUobW9kZWxba2V5XSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gbW9kZWxba2V5XTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG4iXX0=