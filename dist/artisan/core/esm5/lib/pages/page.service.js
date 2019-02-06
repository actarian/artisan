/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpStatusCodeService } from '../http/http-status-code.service';
import { EntityService } from '../models/entity.service';
import { ImageType } from '../models/image';
import { LinkService } from './link.service';
import { Page } from './page';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./link.service";
import * as i3 from "../http/http-status-code.service";
var PageService = /** @class */ (function (_super) {
    tslib_1.__extends(PageService, _super);
    function PageService(injector, titleService, metaService, linkService, statusCodeService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.titleService = titleService;
        _this.metaService = metaService;
        _this.linkService = linkService;
        _this.statusCodeService = statusCodeService;
        return _this;
    }
    Object.defineProperty(PageService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/page';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} slug
     * @return {?}
     */
    PageService.prototype.getStatePageBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        var _this = this;
        slug = slug.split('?')[0];
        if (slug.indexOf('/') === 0) {
            slug = slug.substr(1);
        }
        return this.stateGet("?slug=/" + slug).pipe(map(function (x) {
            x = new Page(Array.isArray(x) ? x.find(function (x) { return x.slug === "/" + slug; }) : x);
            // console.log('PageService.getStatePageBySlug', x);
            return x;
        }), catchError(function (error) {
            // console.log('getStatePageBySlug.error', error);
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PageService.prototype.getPageById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return this.stateGet("/" + id).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(function (x) { return new Page(x); }), catchError(function (error) {
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} slug
     * @return {?}
     */
    PageService.prototype.getPageBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        var _this = this;
        slug = slug.split(';')[0];
        // console.log('PageService.getPageBySlug', slug);
        return this.get("?slug=/" + slug).pipe(map(function (x) { return new Page(x); }), 
        // tap(x => this.logger.log(`found pages matching "${slug}"`))
        // tap(x => console.log('PageService.getPageBySlug', x, slug))
        catchError(function (error) {
            // console.log('PageService.getPageBySlug.error', error);
            _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.addOrUpdateMetaData = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // console.log('PageService.addOrUpdateMetaData', page);
        if (!page) {
            return;
        }
        /** @type {?} */
        var fbAppId = this.config.plugins && this.config.plugins.facebook ? this.config.plugins.facebook.appId.toString() : '';
        this.titleService.setTitle(page.title);
        this.addOrUpdateMeta({ property: 'og:title', content: page.title });
        this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
        this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
        this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
        this.addOrUpdateMeta({ property: 'fb:app_id', content: fbAppId });
        this.addOrUpdateMeta({ property: 'og:url', content: page.url || this.origin });
        /** @type {?} */
        var meta = page.meta;
        if (meta) {
            this.addOrUpdateMeta({ name: 'description', content: meta.description || 'Servizio di qualità senza costi aggiuntivi con i convenienti pacchetti viaggio Eurospin. Prenota comodamente online!' });
            this.addOrUpdateMeta({ name: 'keywords', content: meta.keywords || 'viaggi,viaggi eurospin' });
            this.addOrUpdateMeta({ name: 'robots', content: meta.robots || 'index,follow' });
            this.addOrUpdateMeta({ property: 'og:locale', content: meta.locale || 'it_IT' });
            this.addOrUpdateMeta({ property: 'og:type', content: meta.type || 'article' });
            this.addOrUpdateMeta({ property: 'og:author', content: meta.author || 'Eurospin Viaggi' });
            this.addOrUpdateLink({ rel: 'canonical', href: meta.canonical || (this.origin.indexOf(page.url) === 0 ? null : page.url) });
        }
        // console.log('PageOutletComponent.addOrUpdateMetaData', page.id, page.title, page.url);
    };
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    PageService.prototype.getSocialImage = /**
     * @private
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var image = page.images ? (page.images.find(function (i) { return i.type === ImageType.Share; }) ||
            page.images.find(function (i) { return i.type === ImageType.Default; }) ||
            page.images.find(function (i) { return i.type === ImageType.Gallery; })) : null;
        return image || (/** @type {?} */ ({
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        }));
    };
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    PageService.prototype.addOrUpdateMeta = /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var selector = definition.name ? "name=\"" + definition.name + "\"" : "property=\"" + definition.property + "\"";
        if (this.metaService.getTag(selector)) {
            if (definition.content) {
                this.metaService.updateTag(definition, selector);
            }
            else {
                this.metaService.removeTag(selector);
            }
        }
        else if (definition.content) {
            this.metaService.addTag(definition);
        }
    };
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    PageService.prototype.addOrUpdateLink = /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var selector = definition.id ? "#" + definition.id : "[rel=\"" + definition.rel + "\"]";
        if (this.linkService.getTag(selector)) {
            if (definition.href) {
                this.linkService.updateTag(selector, definition);
            }
            else {
                this.linkService.removeTag(selector);
            }
        }
        else if (definition.href) {
            this.linkService.addTag(definition);
        }
    };
    PageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageService.ctorParameters = function () { return [
        { type: Injector },
        { type: Title },
        { type: Meta },
        { type: LinkService },
        { type: HttpStatusCodeService }
    ]; };
    /** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(i0.INJECTOR), i0.inject(i1.Title), i0.inject(i1.Meta), i0.inject(i2.LinkService), i0.inject(i3.HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
    return PageService;
}(EntityService));
export { PageService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PageService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.linkService;
    /**
     * @type {?}
     * @private
     */
    PageService.prototype.statusCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFrQixLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0FBRTlCO0lBR2lDLHVDQUFtQjtJQU1uRCxxQkFDVyxRQUFrQixFQUNwQixZQUFtQixFQUNuQixXQUFpQixFQUNqQixXQUF3QixFQUN4QixpQkFBd0M7UUFMakQsWUFPQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQVBVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDcEIsa0JBQVksR0FBWixZQUFZLENBQU87UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUF1Qjs7SUFHakQsQ0FBQztJQVpELHNCQUFJLG1DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7Ozs7SUFZRCx3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Q0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztJQUNGLENBQUM7Ozs7OztJQUVPLHFDQUFlOzs7OztJQUF2QixVQUF3QixVQUEwQjs7WUFDM0MsUUFBUSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksVUFBVSxDQUFDLEVBQUksQ0FBQyxDQUFDLENBQUMsWUFBUyxVQUFVLENBQUMsR0FBRyxRQUFJO1FBQ2xGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDakQ7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDckM7U0FDRDthQUFNLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztJQUNGLENBQUM7O2dCQTdIRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVpvQixRQUFRO2dCQUNFLEtBQUs7Z0JBQTNCLElBQUk7Z0JBTVksV0FBVztnQkFIM0IscUJBQXFCOzs7c0JBSjlCO0NBeUlDLEFBL0hELENBR2lDLGFBQWEsR0E0SDdDO1NBNUhZLFdBQVc7Ozs7OztJQU90QiwrQkFBNEI7Ozs7O0lBQzVCLG1DQUEyQjs7Ozs7SUFDM0Isa0NBQXlCOzs7OztJQUN6QixrQ0FBZ0M7Ozs7O0lBQ2hDLHdDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhLCBNZXRhRGVmaW5pdGlvbiwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuLi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UnO1xuaW1wb3J0IHsgTGlua0RlZmluaXRpb24sIExpbmtTZXJ2aWNlIH0gZnJvbSAnLi9saW5rLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxQYWdlPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvcGFnZSc7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcblx0XHRwcml2YXRlIG1ldGFTZXJ2aWNlOiBNZXRhLFxuXHRcdHByaXZhdGUgbGlua1NlcnZpY2U6IExpbmtTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RhdHVzQ29kZVNlcnZpY2U6IEh0dHBTdGF0dXNDb2RlU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHR9XG5cblx0Z2V0U3RhdGVQYWdlQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xuXHRcdHNsdWcgPSBzbHVnLnNwbGl0KCc/JylbMF07XG5cdFx0aWYgKHNsdWcuaW5kZXhPZignLycpID09PSAwKSB7XG5cdFx0XHRzbHVnID0gc2x1Zy5zdWJzdHIoMSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnN0YXRlR2V0KGA/c2x1Zz0vJHtzbHVnfWApLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiB7XG5cdFx0XHRcdHggPSBuZXcgUGFnZShBcnJheS5pc0FycmF5KHgpID8geC5maW5kKHggPT4geC5zbHVnID09PSBgLyR7c2x1Z31gKSA6IHgpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0U3RhdGVQYWdlQnlTbHVnJywgeCk7XG5cdFx0XHRcdHJldHVybiB4O1xuXHRcdFx0fSksXG5cdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldFN0YXRlUGFnZUJ5U2x1Zy5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0dGhpcy5zdGF0dXNDb2RlU2VydmljZS5zZXRTdGF0dXNDb2RlKGVycm9yLnN0YXR1cywgZXJyb3IuZXJyb3IgPyBlcnJvci5lcnJvci5yZWRpcmVjdFVybCA6IG51bGwpO1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZT4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlR2V0KGAvJHtpZH1gKS5waXBlKFxuXHRcdFx0Ly8gdGFwKHggPT4gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkJywgaWQsIHgpKSxcblx0XHRcdG1hcCh4ID0+IG5ldyBQYWdlKHgpKSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGdldFBhZ2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG5cdFx0c2x1ZyA9IHNsdWcuc3BsaXQoJzsnKVswXTtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xuXHRcdHJldHVybiB0aGlzLmdldChgP3NsdWc9LyR7c2x1Z31gKS5waXBlKFxuXHRcdFx0bWFwKHggPT4gbmV3IFBhZ2UoeCkpLFxuXHRcdFx0Ly8gdGFwKHggPT4gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBwYWdlcyBtYXRjaGluZyBcIiR7c2x1Z31cImApKVxuXHRcdFx0Ly8gdGFwKHggPT4gY29uc29sZS5sb2coJ1BhZ2VTZXJ2aWNlLmdldFBhZ2VCeVNsdWcnLCB4LCBzbHVnKSlcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1Zy5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0dGhpcy5zdGF0dXNDb2RlU2VydmljZS5zZXRTdGF0dXNDb2RlKGVycm9yLnN0YXR1cywgZXJyb3IuZXJyb3IgPyBlcnJvci5lcnJvci5yZWRpcmVjdFVybCA6IG51bGwpO1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRhZGRPclVwZGF0ZU1ldGFEYXRhKHBhZ2U6IFBhZ2UpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhRGF0YScsIHBhZ2UpO1xuXHRcdGlmICghcGFnZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmYkFwcElkOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5wbHVnaW5zICYmIHRoaXMuY29uZmlnLnBsdWdpbnMuZmFjZWJvb2sgPyB0aGlzLmNvbmZpZy5wbHVnaW5zLmZhY2Vib29rLmFwcElkLnRvU3RyaW5nKCkgOiAnJztcblx0XHR0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZShwYWdlLnRpdGxlKTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBwYWdlLnRpdGxlIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IHRoaXMuZ2V0U29jaWFsSW1hZ2UocGFnZSkudXJsIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTp3aWR0aCcsIGNvbnRlbnQ6ICcxMjAwJyB9KTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogJzYzMCcgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ2ZiOmFwcF9pZCcsIGNvbnRlbnQ6IGZiQXBwSWQgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHBhZ2UudXJsIHx8IHRoaXMub3JpZ2luIH0pO1xuXHRcdGNvbnN0IG1ldGEgPSBwYWdlLm1ldGE7XG5cdFx0aWYgKG1ldGEpIHtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogbWV0YS5kZXNjcmlwdGlvbiB8fCAnU2Vydml6aW8gZGkgcXVhbGl0w6Agc2VuemEgY29zdGkgYWdnaXVudGl2aSBjb24gaSBjb252ZW5pZW50aSBwYWNjaGV0dGkgdmlhZ2dpbyBFdXJvc3Bpbi4gUHJlbm90YSBjb21vZGFtZW50ZSBvbmxpbmUhJyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ2tleXdvcmRzJywgY29udGVudDogbWV0YS5rZXl3b3JkcyB8fCAndmlhZ2dpLHZpYWdnaSBldXJvc3BpbicgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiBtZXRhLnJvYm90cyB8fCAnaW5kZXgsZm9sbG93JyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzpsb2NhbGUnLCBjb250ZW50OiBtZXRhLmxvY2FsZSB8fCAnaXRfSVQnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiBtZXRhLnR5cGUgfHwgJ2FydGljbGUnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmF1dGhvcicsIGNvbnRlbnQ6IG1ldGEuYXV0aG9yIHx8ICdFdXJvc3BpbiBWaWFnZ2knIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZUxpbmsoeyByZWw6ICdjYW5vbmljYWwnLCBocmVmOiBtZXRhLmNhbm9uaWNhbCB8fCAodGhpcy5vcmlnaW4uaW5kZXhPZihwYWdlLnVybCkgPT09IDAgPyBudWxsIDogcGFnZS51cmwpIH0pO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZU91dGxldENvbXBvbmVudC5hZGRPclVwZGF0ZU1ldGFEYXRhJywgcGFnZS5pZCwgcGFnZS50aXRsZSwgcGFnZS51cmwpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRTb2NpYWxJbWFnZShwYWdlOiBQYWdlKTogSW1hZ2Uge1xuXHRcdGNvbnN0IGltYWdlID0gcGFnZS5pbWFnZXMgPyAoXG5cdFx0XHRwYWdlLmltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuU2hhcmUpIHx8XG5cdFx0XHRwYWdlLmltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuRGVmYXVsdCkgfHxcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5HYWxsZXJ5KVxuXHRcdCkgOiBudWxsO1xuXHRcdHJldHVybiBpbWFnZSB8fCB7XG5cdFx0XHR1cmw6ICdodHRwczovL3Mtc3RhdGljLmFrLmZiY2RuLm5ldC9pbWFnZXMvZGV2c2l0ZS9hdHRhY2htZW50X2JsYW5rLnBuZydcblx0XHR9IGFzIEltYWdlO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRPclVwZGF0ZU1ldGEoZGVmaW5pdGlvbjogTWV0YURlZmluaXRpb24pIHtcblx0XHRjb25zdCBzZWxlY3RvciA9IGRlZmluaXRpb24ubmFtZSA/IGBuYW1lPVwiJHtkZWZpbml0aW9uLm5hbWV9XCJgIDogYHByb3BlcnR5PVwiJHtkZWZpbml0aW9uLnByb3BlcnR5fVwiYDtcblx0XHRpZiAodGhpcy5tZXRhU2VydmljZS5nZXRUYWcoc2VsZWN0b3IpKSB7XG5cdFx0XHRpZiAoZGVmaW5pdGlvbi5jb250ZW50KSB7XG5cdFx0XHRcdHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKGRlZmluaXRpb24sIHNlbGVjdG9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGRlZmluaXRpb24uY29udGVudCkge1xuXHRcdFx0dGhpcy5tZXRhU2VydmljZS5hZGRUYWcoZGVmaW5pdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRPclVwZGF0ZUxpbmsoZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHRjb25zdCBzZWxlY3RvciA9IGRlZmluaXRpb24uaWQgPyBgIyR7ZGVmaW5pdGlvbi5pZH1gIDogYFtyZWw9XCIke2RlZmluaXRpb24ucmVsfVwiXWA7XG5cdFx0aWYgKHRoaXMubGlua1NlcnZpY2UuZ2V0VGFnKHNlbGVjdG9yKSkge1xuXHRcdFx0aWYgKGRlZmluaXRpb24uaHJlZikge1xuXHRcdFx0XHR0aGlzLmxpbmtTZXJ2aWNlLnVwZGF0ZVRhZyhzZWxlY3RvciwgZGVmaW5pdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxpbmtTZXJ2aWNlLnJlbW92ZVRhZyhzZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChkZWZpbml0aW9uLmhyZWYpIHtcblx0XHRcdHRoaXMubGlua1NlcnZpY2UuYWRkVGFnKGRlZmluaXRpb24pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=