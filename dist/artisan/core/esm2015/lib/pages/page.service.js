/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class PageService extends EntityService {
    /**
     * @param {?} injector
     * @param {?} titleService
     * @param {?} metaService
     * @param {?} linkService
     * @param {?} statusCodeService
     */
    constructor(injector, titleService, metaService, linkService, statusCodeService) {
        super(injector);
        this.injector = injector;
        this.titleService = titleService;
        this.metaService = metaService;
        this.linkService = linkService;
        this.statusCodeService = statusCodeService;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/page';
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getStatePageBySlug(slug) {
        slug = slug.split('?')[0];
        if (slug.indexOf('/') === 0) {
            slug = slug.substr(1);
        }
        return this.stateGet(`?slug=/${slug}`).pipe(map(x => {
            x = new Page(Array.isArray(x) ? x.find(x => x.slug === `/${slug}`) : x);
            // console.log('PageService.getStatePageBySlug', x);
            return x;
        }), catchError(error => {
            // console.log('getStatePageBySlug.error', error);
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getPageById(id) {
        return this.stateGet(`/${id}`).pipe(
        // tap(x => console.log('PageService.getPageById', id, x)),
        map(x => new Page(x)), catchError(error => {
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getPageBySlug(slug) {
        slug = slug.split(';')[0];
        // console.log('PageService.getPageBySlug', slug);
        return this.get(`?slug=/${slug}`).pipe(map(x => new Page(x)), 
        // tap(x => this.logger.log(`found pages matching "${slug}"`))
        // tap(x => console.log('PageService.getPageBySlug', x, slug))
        catchError(error => {
            // console.log('PageService.getPageBySlug.error', error);
            this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
            return of(null);
        }));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    addOrUpdateMetaData(page) {
        // console.log('PageService.addOrUpdateMetaData', page);
        if (!page) {
            return;
        }
        // !!!
        // const fbAppId: string = this.config.plugins && this.config.plugins.facebook ? this.config.plugins.facebook.appId.toString() : '';
        this.titleService.setTitle(page.title);
        this.addOrUpdateMeta({ property: 'og:title', content: page.title });
        this.addOrUpdateMeta({ property: 'og:image', content: this.getSocialImage(page).url });
        this.addOrUpdateMeta({ property: 'og:image:width', content: '1200' });
        this.addOrUpdateMeta({ property: 'og:image:height', content: '630' });
        // this.addOrUpdateMeta({ property: 'fb:app_id', content: fbAppId });
        this.addOrUpdateMeta({ property: 'og:url', content: page.url || this.origin });
        /** @type {?} */
        const meta = page.meta;
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
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    getSocialImage(page) {
        /** @type {?} */
        const image = page.images ? (page.images.find(i => i.type === ImageType.Share) ||
            page.images.find(i => i.type === ImageType.Default) ||
            page.images.find(i => i.type === ImageType.Gallery)) : null;
        return image || (/** @type {?} */ ({
            url: 'https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png'
        }));
    }
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    addOrUpdateMeta(definition) {
        /** @type {?} */
        const selector = definition.name ? `name="${definition.name}"` : `property="${definition.property}"`;
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
    }
    /**
     * @private
     * @param {?} definition
     * @return {?}
     */
    addOrUpdateLink(definition) {
        /** @type {?} */
        const selector = definition.id ? `#${definition.id}` : `[rel="${definition.rel}"]`;
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
    }
}
PageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PageService.ctorParameters = () => [
    { type: Injector },
    { type: Title },
    { type: Meta },
    { type: LinkService },
    { type: HttpStatusCodeService }
];
/** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(i0.INJECTOR), i0.inject(i1.Title), i0.inject(i1.Meta), i0.inject(i2.LinkService), i0.inject(i3.HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxJQUFJLEVBQWtCLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFTLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFLOUIsTUFBTSxPQUFPLFdBQVksU0FBUSxhQUFtQjs7Ozs7Ozs7SUFNbkQsWUFDVyxRQUFrQixFQUNwQixZQUFtQixFQUNuQixXQUFpQixFQUNqQixXQUF3QixFQUN4QixpQkFBd0M7UUFFaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTk4sYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBTTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXVCO0lBR2pELENBQUM7Ozs7SUFaRCxJQUFJLFVBQVU7UUFDYixPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOzs7OztJQVlELGtCQUFrQixDQUFDLElBQVk7UUFDOUIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxvREFBb0Q7WUFDcEQsT0FBTyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakcsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEVBQW1CO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSTtRQUNsQywyREFBMkQ7UUFDM0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckIsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakcsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQVk7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsa0RBQWtEO1FBQ2xELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQiw4REFBOEQ7UUFDOUQsOERBQThEO1FBQzlELFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQix5REFBeUQ7WUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxJQUFVO1FBQzdCLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1YsT0FBTztTQUNQO1FBQ0QsTUFBTTtRQUNOLG9JQUFvSTtRQUNwSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzs7Y0FDekUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLElBQUksSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksc0hBQXNILEVBQUUsQ0FBQyxDQUFDO1lBQ25NLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLHdCQUF3QixFQUFFLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDM0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUg7UUFDRCx5RkFBeUY7SUFDMUYsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLElBQVU7O2NBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUNuRCxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ1IsT0FBTyxLQUFLLElBQUksbUJBQUE7WUFDZixHQUFHLEVBQUUsbUVBQW1FO1NBQ3hFLEVBQVMsQ0FBQztJQUNaLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxVQUEwQjs7Y0FDM0MsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLFVBQVUsQ0FBQyxRQUFRLEdBQUc7UUFDcEcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN0QyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNqRDtpQkFBTTtnQkFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyQztTQUNEO2FBQU0sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFVBQTBCOztjQUMzQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsVUFBVSxDQUFDLEdBQUcsSUFBSTtRQUNsRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RDLElBQUksVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Q7YUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDRixDQUFDOzs7WUE5SEQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBWm9CLFFBQVE7WUFDRSxLQUFLO1lBQTNCLElBQUk7WUFNWSxXQUFXO1lBSDNCLHFCQUFxQjs7Ozs7Ozs7SUFnQjVCLCtCQUE0Qjs7Ozs7SUFDNUIsbUNBQTJCOzs7OztJQUMzQixrQ0FBeUI7Ozs7O0lBQ3pCLGtDQUFnQzs7Ozs7SUFDaEMsd0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGEsIE1ldGFEZWZpbml0aW9uLCBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4uL2h0dHAvaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvZW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XG5pbXBvcnQgeyBMaW5rRGVmaW5pdGlvbiwgTGlua1NlcnZpY2UgfSBmcm9tICcuL2xpbmsuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPFBhZ2U+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9wYWdlJztcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxuXHRcdHByaXZhdGUgbWV0YVNlcnZpY2U6IE1ldGEsXG5cdFx0cHJpdmF0ZSBsaW5rU2VydmljZTogTGlua1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdGF0dXNDb2RlU2VydmljZTogSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxuXHRnZXRTdGF0ZVBhZ2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG5cdFx0c2x1ZyA9IHNsdWcuc3BsaXQoJz8nKVswXTtcblx0XHRpZiAoc2x1Zy5pbmRleE9mKCcvJykgPT09IDApIHtcblx0XHRcdHNsdWcgPSBzbHVnLnN1YnN0cigxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVHZXQoYD9zbHVnPS8ke3NsdWd9YCkucGlwZShcblx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0eCA9IG5ldyBQYWdlKEFycmF5LmlzQXJyYXkoeCkgPyB4LmZpbmQoeCA9PiB4LnNsdWcgPT09IGAvJHtzbHVnfWApIDogeCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRTdGF0ZVBhZ2VCeVNsdWcnLCB4KTtcblx0XHRcdFx0cmV0dXJuIHg7XG5cdFx0XHR9KSxcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0U3RhdGVQYWdlQnlTbHVnLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cblxuXHRnZXRQYWdlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVHZXQoYC8ke2lkfWApLnBpcGUoXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCwgeCkpLFxuXHRcdFx0bWFwKHggPT4gbmV3IFBhZ2UoeCkpLFxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMsIGVycm9yLmVycm9yID8gZXJyb3IuZXJyb3IucmVkaXJlY3RVcmwgOiBudWxsKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcblx0XHRzbHVnID0gc2x1Zy5zcGxpdCgnOycpWzBdO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlTbHVnJywgc2x1Zyk7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KGA/c2x1Zz0vJHtzbHVnfWApLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiBuZXcgUGFnZSh4KSksXG5cdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIHBhZ2VzIG1hdGNoaW5nIFwiJHtzbHVnfVwiYCkpXG5cdFx0XHQvLyB0YXAoeCA9PiBjb25zb2xlLmxvZygnUGFnZVNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHgsIHNsdWcpKVxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5nZXRQYWdlQnlTbHVnLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHR0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBlcnJvci5lcnJvciA/IGVycm9yLmVycm9yLnJlZGlyZWN0VXJsIDogbnVsbCk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGFkZE9yVXBkYXRlTWV0YURhdGEocGFnZTogUGFnZSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlU2VydmljZS5hZGRPclVwZGF0ZU1ldGFEYXRhJywgcGFnZSk7XG5cdFx0aWYgKCFwYWdlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vICEhIVxuXHRcdC8vIGNvbnN0IGZiQXBwSWQ6IHN0cmluZyA9IHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5mYWNlYm9vayA/IHRoaXMuY29uZmlnLnBsdWdpbnMuZmFjZWJvb2suYXBwSWQudG9TdHJpbmcoKSA6ICcnO1xuXHRcdHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHBhZ2UudGl0bGUpO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHBhZ2UudGl0bGUgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogdGhpcy5nZXRTb2NpYWxJbWFnZShwYWdlKS51cmwgfSk7XG5cdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmltYWdlOndpZHRoJywgY29udGVudDogJzEyMDAnIH0pO1xuXHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdvZzppbWFnZTpoZWlnaHQnLCBjb250ZW50OiAnNjMwJyB9KTtcblx0XHQvLyB0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnZmI6YXBwX2lkJywgY29udGVudDogZmJBcHBJZCB9KTtcblx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogcGFnZS51cmwgfHwgdGhpcy5vcmlnaW4gfSk7XG5cdFx0Y29uc3QgbWV0YSA9IHBhZ2UubWV0YTtcblx0XHRpZiAobWV0YSkge1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiBtZXRhLmRlc2NyaXB0aW9uIHx8ICdTZXJ2aXppbyBkaSBxdWFsaXTDoCBzZW56YSBjb3N0aSBhZ2dpdW50aXZpIGNvbiBpIGNvbnZlbmllbnRpIHBhY2NoZXR0aSB2aWFnZ2lvIEV1cm9zcGluLiBQcmVub3RhIGNvbW9kYW1lbnRlIG9ubGluZSEnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiBtZXRhLmtleXdvcmRzIHx8ICd2aWFnZ2ksdmlhZ2dpIGV1cm9zcGluJyB9KTtcblx0XHRcdHRoaXMuYWRkT3JVcGRhdGVNZXRhKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IG1ldGEucm9ib3RzIHx8ICdpbmRleCxmb2xsb3cnIH0pO1xuXHRcdFx0dGhpcy5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ29nOmxvY2FsZScsIGNvbnRlbnQ6IG1ldGEubG9jYWxlIHx8ICdpdF9JVCcgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6IG1ldGEudHlwZSB8fCAnYXJ0aWNsZScgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnb2c6YXV0aG9yJywgY29udGVudDogbWV0YS5hdXRob3IgfHwgJ0V1cm9zcGluIFZpYWdnaScgfSk7XG5cdFx0XHR0aGlzLmFkZE9yVXBkYXRlTGluayh7IHJlbDogJ2Nhbm9uaWNhbCcsIGhyZWY6IG1ldGEuY2Fub25pY2FsIHx8ICh0aGlzLm9yaWdpbi5pbmRleE9mKHBhZ2UudXJsKSA9PT0gMCA/IG51bGwgOiBwYWdlLnVybCkgfSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlT3V0bGV0Q29tcG9uZW50LmFkZE9yVXBkYXRlTWV0YURhdGEnLCBwYWdlLmlkLCBwYWdlLnRpdGxlLCBwYWdlLnVybCk7XG5cdH1cblxuXHRwcml2YXRlIGdldFNvY2lhbEltYWdlKHBhZ2U6IFBhZ2UpOiBJbWFnZSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSBwYWdlLmltYWdlcyA/IChcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5TaGFyZSkgfHxcblx0XHRcdHBhZ2UuaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5EZWZhdWx0KSB8fFxuXHRcdFx0cGFnZS5pbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLkdhbGxlcnkpXG5cdFx0KSA6IG51bGw7XG5cdFx0cmV0dXJuIGltYWdlIHx8IHtcblx0XHRcdHVybDogJ2h0dHBzOi8vcy1zdGF0aWMuYWsuZmJjZG4ubmV0L2ltYWdlcy9kZXZzaXRlL2F0dGFjaG1lbnRfYmxhbmsucG5nJ1xuXHRcdH0gYXMgSW1hZ2U7XG5cdH1cblxuXHRwcml2YXRlIGFkZE9yVXBkYXRlTWV0YShkZWZpbml0aW9uOiBNZXRhRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gZGVmaW5pdGlvbi5uYW1lID8gYG5hbWU9XCIke2RlZmluaXRpb24ubmFtZX1cImAgOiBgcHJvcGVydHk9XCIke2RlZmluaXRpb24ucHJvcGVydHl9XCJgO1xuXHRcdGlmICh0aGlzLm1ldGFTZXJ2aWNlLmdldFRhZyhzZWxlY3RvcikpIHtcblx0XHRcdGlmIChkZWZpbml0aW9uLmNvbnRlbnQpIHtcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoZGVmaW5pdGlvbiwgc2VsZWN0b3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoc2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZGVmaW5pdGlvbi5jb250ZW50KSB7XG5cdFx0XHR0aGlzLm1ldGFTZXJ2aWNlLmFkZFRhZyhkZWZpbml0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZE9yVXBkYXRlTGluayhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gZGVmaW5pdGlvbi5pZCA/IGAjJHtkZWZpbml0aW9uLmlkfWAgOiBgW3JlbD1cIiR7ZGVmaW5pdGlvbi5yZWx9XCJdYDtcblx0XHRpZiAodGhpcy5saW5rU2VydmljZS5nZXRUYWcoc2VsZWN0b3IpKSB7XG5cdFx0XHRpZiAoZGVmaW5pdGlvbi5ocmVmKSB7XG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UudXBkYXRlVGFnKHNlbGVjdG9yLCBkZWZpbml0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGlua1NlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGRlZmluaXRpb24uaHJlZikge1xuXHRcdFx0dGhpcy5saW5rU2VydmljZS5hZGRUYWcoZGVmaW5pdGlvbik7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==