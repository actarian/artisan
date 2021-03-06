/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { PluginsConfig, PLUGINS_CONFIG } from './plugins.config';
import * as i0 from "@angular/core";
import * as i1 from "./plugins.config";
export class PluginsService {
    /**
     * @param {?} options
     */
    constructor(options) {
        console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
}
PluginsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PluginsService.ctorParameters = () => [
    { type: PluginsConfig, decorators: [{ type: Inject, args: [PLUGINS_CONFIG,] }] }
];
/** @nocollapse */ PluginsService.ngInjectableDef = i0.defineInjectable({ factory: function PluginsService_Factory() { return new PluginsService(i0.inject(i1.PLUGINS_CONFIG)); }, token: PluginsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PluginsService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFydGlzYW4vcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFJMUIsWUFDeUIsT0FBc0I7UUFFOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QiwrRkFBK0Y7UUFDL0YsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBZkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsYUFBYSx1QkFVbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBSHZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5zQ29uZmlnLCBQTFVHSU5TX0NPTkZJRyB9IGZyb20gJy4vcGx1Z2lucy5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQbHVnaW5zU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFBsdWdpbnNDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTFVHSU5TX0NPTkZJRykgb3B0aW9uczogUGx1Z2luc0NvbmZpZ1xuXHQpIHtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2luc1NlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHQvLyBvcHRpb25zLmRlZmF1bHRQYWdlID0gKG9wdGlvbnMuZGVmYXVsdFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50KSBhcyBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRcdC8vIG9wdGlvbnMubm90Rm91bmRQYWdlID0gKG9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgUGx1Z2luc0NvbmZpZyhvcHRpb25zKTtcblx0fVxuXG59XG4iXX0=