/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @enum {number} */
var AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());
export { Language };
if (false) {
    /** @type {?} */
    Language.prototype.id;
    /** @type {?} */
    Language.prototype.name;
    /** @type {?} */
    Language.prototype.lang;
}
var CoreConfigPlugins = /** @class */ (function () {
    function CoreConfigPlugins(options) {
        console.log('CoreConfigPlugins', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return CoreConfigPlugins;
}());
export { CoreConfigPlugins };
if (false) {
    /** @type {?} */
    CoreConfigPlugins.prototype.facebook;
    /** @type {?} */
    CoreConfigPlugins.prototype.google;
    /** @type {?} */
    CoreConfigPlugins.prototype.googleTagManager;
    /** @type {?} */
    CoreConfigPlugins.prototype.mapbox;
    /** @type {?} */
    CoreConfigPlugins.prototype.paypal;
    /** @type {?} */
    CoreConfigPlugins.prototype.trustPilot;
}
var CoreTransitionConfig = /** @class */ (function () {
    function CoreTransitionConfig(options) {
        console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return CoreTransitionConfig;
}());
export { CoreTransitionConfig };
if (false) {
    /** @type {?} */
    CoreTransitionConfig.prototype.appId;
}
var CorePrebootConfig = /** @class */ (function () {
    function CorePrebootConfig(options) {
        console.log('CorePrebootConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return CorePrebootConfig;
}());
export { CorePrebootConfig };
if (false) {
    /** @type {?} */
    CorePrebootConfig.prototype.appRoot;
}
var CoreConfig = /** @class */ (function () {
    function CoreConfig(options) {
        this.assets = '';
        this.authStrategy = AuthStrategy.Cookie;
        this.defaultLanguage = 'it';
        this.defaultMarket = 'it';
        this.languages = [{ id: 1, name: 'Italiano', lang: 'it' }];
        this.origin = '';
        this.pages = {};
        this.production = false;
        this.public = '';
        this.urlStrategy = '';
        this.useHash = true;
        this.useLang = false;
        this.useMarket = false;
        console.log('CoreConfig', options);
        if (options) {
            this.pages = options.pages || {};
            this.plugins = new CoreConfigPlugins(options.plugins);
            this.preboot = new CorePrebootConfig(options.preboot);
            this.transition = new CoreTransitionConfig(options.transition);
            this.defaultPage = options.defaultPage;
            this.notFoundPage = options.notFoundPage;
        }
        else {
            this.plugins = new CoreConfigPlugins();
            this.preboot = new CorePrebootConfig();
            this.transition = new CoreTransitionConfig();
        }
    }
    return CoreConfig;
}());
export { CoreConfig };
if (false) {
    /** @type {?} */
    CoreConfig.prototype.assets;
    /** @type {?} */
    CoreConfig.prototype.authStrategy;
    /** @type {?} */
    CoreConfig.prototype.defaultLanguage;
    /** @type {?} */
    CoreConfig.prototype.defaultMarket;
    /** @type {?} */
    CoreConfig.prototype.defaultPage;
    /** @type {?} */
    CoreConfig.prototype.editor;
    /** @type {?} */
    CoreConfig.prototype.enableTracing;
    /** @type {?} */
    CoreConfig.prototype.languages;
    /** @type {?} */
    CoreConfig.prototype.notFoundPage;
    /** @type {?} */
    CoreConfig.prototype.origin;
    /** @type {?} */
    CoreConfig.prototype.pages;
    /** @type {?} */
    CoreConfig.prototype.plugins;
    /** @type {?} */
    CoreConfig.prototype.preboot;
    /** @type {?} */
    CoreConfig.prototype.production;
    /** @type {?} */
    CoreConfig.prototype.public;
    /** @type {?} */
    CoreConfig.prototype.transition;
    /** @type {?} */
    CoreConfig.prototype.urlStrategy;
    /** @type {?} */
    CoreConfig.prototype.useHash;
    /** @type {?} */
    CoreConfig.prototype.useLang;
    /** @type {?} */
    CoreConfig.prototype.useMarket;
    /** @type {?} */
    CoreConfig.prototype.useServiceWorker;
}
/** @type {?} */
export var CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQzs7O0lBV3BELFNBQVU7SUFDVixTQUFVOzs7OztBQUdYO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsc0JBQVk7O0lBQ1osd0JBQWM7O0lBQ2Qsd0JBQWM7O0FBR2Y7SUFRQywyQkFBWSxPQUEyQjtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQWJBLHFDQUEwQjs7SUFDMUIsbUNBQXNCOztJQUN0Qiw2Q0FBMEM7O0lBQzFDLG1DQUFzQjs7SUFDdEIsbUNBQXNCOztJQUN0Qix1Q0FBOEI7O0FBVS9CO0lBR0MsOEJBQVksT0FBOEI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQSxxQ0FBZTs7QUFVaEI7SUFHQywyQkFBWSxPQUEyQjtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJBLG9DQUFpQjs7QUFVbEI7SUF1QkMsb0JBQVksT0FBb0I7UUF0QmhDLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBa0IsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUk5QixjQUFTLEdBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbkUsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUkzQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUN6QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDN0M7SUFDRixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDOzs7O0lBckNBLDRCQUFxQjs7SUFDckIsa0NBQWtEOztJQUNsRCxxQ0FBZ0M7O0lBQ2hDLG1DQUE4Qjs7SUFDOUIsaUNBQWtDOztJQUNsQyw0QkFBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsK0JBQW1FOztJQUNuRSxrQ0FBbUM7O0lBQ25DLDRCQUFxQjs7SUFDckIsMkJBQW1COztJQUNuQiw2QkFBNEI7O0lBQzVCLDZCQUE0Qjs7SUFDNUIsZ0NBQTZCOztJQUM3Qiw0QkFBcUI7O0lBQ3JCLGdDQUFrQzs7SUFDbEMsaUNBQTBCOztJQUMxQiw2QkFBeUI7O0lBQ3pCLDZCQUEwQjs7SUFDMUIsK0JBQTRCOztJQUM1QixzQ0FBMkI7OztBQW1CNUIsTUFBTSxLQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2VzL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi4vcGFnZXMvcGFnZXMnO1xuaW1wb3J0IHsgRmFjZWJvb2tDb25maWcgfSBmcm9tICcuLi9wbHVnaW5zL2ZhY2Vib29rL2ZhY2Vib29rLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZUNvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hcGJveENvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlJztcbmltcG9ydCB7IFBheVBhbENvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFRydXN0UGlsb3RDb25maWcgfSBmcm9tICcuLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlJztcblxuZXhwb3J0IGVudW0gQXV0aFN0cmF0ZWd5IHtcblx0QmVhcmVyID0gMCxcblx0Q29va2llID0gMSxcbn1cblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcblx0aWQ/OiBudW1iZXI7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGxhbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlnUGx1Z2lucyB7XG5cdGZhY2Vib29rPzogRmFjZWJvb2tDb25maWc7XG5cdGdvb2dsZT86IEdvb2dsZUNvbmZpZztcblx0Z29vZ2xlVGFnTWFuYWdlcj86IEdvb2dsZVRhZ01hbmFnZXJDb25maWc7XG5cdG1hcGJveD86IE1hcGJveENvbmZpZztcblx0cGF5cGFsPzogUGF5UGFsQ29uZmlnO1xuXHR0cnVzdFBpbG90PzogVHJ1c3RQaWxvdENvbmZpZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZUNvbmZpZ1BsdWdpbnMpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZUNvbmZpZ1BsdWdpbnMnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVUcmFuc2l0aW9uQ29uZmlnIHtcblx0YXBwSWQ/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVUcmFuc2l0aW9uQ29uZmlnKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NvcmVUcmFuc2l0aW9uQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlUHJlYm9vdENvbmZpZyB7XG5cdGFwcFJvb3Q/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVQcmVib290Q29uZmlnKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NvcmVQcmVib290Q29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlnIHtcblx0YXNzZXRzPzogc3RyaW5nID0gJyc7XG5cdGF1dGhTdHJhdGVneT86IEF1dGhTdHJhdGVneSA9IEF1dGhTdHJhdGVneS5Db29raWU7XG5cdGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZyA9ICdpdCc7XG5cdGRlZmF1bHRNYXJrZXQ/OiBzdHJpbmcgPSAnaXQnO1xuXHRkZWZhdWx0UGFnZT86IFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdGVkaXRvcj86IGJvb2xlYW47XG5cdGVuYWJsZVRyYWNpbmc/OiBib29sZWFuO1xuXHRsYW5ndWFnZXM/OiBMYW5ndWFnZVtdID0gW3sgaWQ6IDEsIG5hbWU6ICdJdGFsaWFubycsIGxhbmc6ICdpdCcgfV07XG5cdG5vdEZvdW5kUGFnZT86IFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdG9yaWdpbj86IHN0cmluZyA9ICcnO1xuXHRwYWdlcz86IFBhZ2VzID0ge307XG5cdHBsdWdpbnM/OiBDb3JlQ29uZmlnUGx1Z2lucztcblx0cHJlYm9vdD86IENvcmVQcmVib290Q29uZmlnO1xuXHRwcm9kdWN0aW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM/OiBzdHJpbmcgPSAnJztcblx0dHJhbnNpdGlvbj86IENvcmVUcmFuc2l0aW9uQ29uZmlnO1xuXHR1cmxTdHJhdGVneT86IHN0cmluZyA9ICcnO1xuXHR1c2VIYXNoPzogYm9vbGVhbiA9IHRydWU7XG5cdHVzZUxhbmc/OiBib29sZWFuID0gZmFsc2U7XG5cdHVzZU1hcmtldD86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlU2VydmljZVdvcmtlcj86IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVDb25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHR0aGlzLnBhZ2VzID0gb3B0aW9ucy5wYWdlcyB8fCB7fTtcblx0XHRcdHRoaXMucGx1Z2lucyA9IG5ldyBDb3JlQ29uZmlnUGx1Z2lucyhvcHRpb25zLnBsdWdpbnMpO1xuXHRcdFx0dGhpcy5wcmVib290ID0gbmV3IENvcmVQcmVib290Q29uZmlnKG9wdGlvbnMucHJlYm9vdCk7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcob3B0aW9ucy50cmFuc2l0aW9uKTtcblx0XHRcdHRoaXMuZGVmYXVsdFBhZ2UgPSBvcHRpb25zLmRlZmF1bHRQYWdlO1xuXHRcdFx0dGhpcy5ub3RGb3VuZFBhZ2UgPSBvcHRpb25zLm5vdEZvdW5kUGFnZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wbHVnaW5zID0gbmV3IENvcmVDb25maWdQbHVnaW5zKCk7XG5cdFx0XHR0aGlzLnByZWJvb3QgPSBuZXcgQ29yZVByZWJvb3RDb25maWcoKTtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZygpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgQ09SRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29yZUNvbmZpZz4oJ2NvcmUuY29uZmlnJyk7XG4iXX0=