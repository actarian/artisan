/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
import { RouteService } from '../../routes/route.service';
import { LocalStorageService } from '../../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.service";
import * as i2 from "../../storage/storage.service";
import * as i3 from "../../once/once.service";
import * as i4 from "../../routes/route.service";
export class FacebookConfig {
    constructor() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
}
if (false) {
    /** @type {?} */
    FacebookConfig.prototype.appId;
    /** @type {?} */
    FacebookConfig.prototype.fields;
    /** @type {?} */
    FacebookConfig.prototype.scope;
    /** @type {?} */
    FacebookConfig.prototype.tokenClient;
    /** @type {?} */
    FacebookConfig.prototype.version;
}
export class FacebookAuthResponse {
}
if (false) {
    /** @type {?} */
    FacebookAuthResponse.prototype.accessToken;
    /** @type {?} */
    FacebookAuthResponse.prototype.expiresIn;
    /** @type {?} */
    FacebookAuthResponse.prototype.signedRequest;
    /** @type {?} */
    FacebookAuthResponse.prototype.userID;
}
export class FacebookPictureData {
}
if (false) {
    /** @type {?} */
    FacebookPictureData.prototype.height;
    /** @type {?} */
    FacebookPictureData.prototype.is_silhouette;
    /** @type {?} */
    FacebookPictureData.prototype.url;
    /** @type {?} */
    FacebookPictureData.prototype.width;
}
export class FacebookPicture {
}
if (false) {
    /** @type {?} */
    FacebookPicture.prototype.data;
}
export class FacebookUser {
}
if (false) {
    /** @type {?} */
    FacebookUser.prototype.email;
    /** @type {?} */
    FacebookUser.prototype.first_name;
    /** @type {?} */
    FacebookUser.prototype.id;
    /** @type {?} */
    FacebookUser.prototype.last_name;
    /** @type {?} */
    FacebookUser.prototype.name;
    /** @type {?} */
    FacebookUser.prototype.picture;
    /** @type {?} */
    FacebookUser.prototype.authResponse;
    /** @type {?} */
    FacebookUser.prototype.facebookToken;
}
export class FacebookService {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} storageService
     * @param {?} onceService
     * @param {?} routeService
     */
    constructor(platformId, configService, storageService, onceService, routeService) {
        this.platformId = platformId;
        this.configService = configService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        if (!this.configService.options.plugins && !this.configService.options.plugins.facebook) {
            throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
        }
        this.options = Object.assign(new FacebookConfig(), this.configService.options.plugins.facebook);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('facebook');
        // console.log('FacebookService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    facebook() {
        if (isPlatformBrowser(this.platformId) && window.location.protocol.indexOf('https') !== -1) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(x => {
                    // console.log(x);
                    /** @type {?} */
                    const FB = window['FB'];
                    FB.init({
                        appId: this.options.appId,
                        // status: true,
                        cookie: true,
                        xfbml: true,
                        version: this.options.version,
                    });
                    this.FB = FB;
                    return of(FB);
                }));
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    status() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.getLoginStatus((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.getLoginStatus((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    } else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    } else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            });
        }));
        */
    }
    /**
     * @return {?}
     */
    login() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.login((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.login((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    } else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    } else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            });
        }));
        */
    }
    /**
     * @return {?}
     */
    logout() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                // console.log('f', f);
                f.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            });
        }));
        */
    }
    /**
     * @param {?=} fields
     * @return {?}
     */
    getMe(fields) {
        return this.login().pipe(concatMap(l => {
            return from(new Promise((resolve, reject) => {
                fields = fields || this.options.fields;
                this.FB.api('/me', {
                    fields: fields,
                    accessToken: this.options.tokenClient,
                }, (r) => {
                    if (!r || r.error) {
                        /** @type {?} */
                        const error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        /** @type {?} */
                        const user = (/** @type {?} */ (r));
                        user.authResponse = this.authResponse;
                        user.facebookToken = this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    }
}
FacebookService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FacebookService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: LocalStorageService },
    { type: OnceService },
    { type: RouteService }
];
/** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.LocalStorageService), i0.inject(i3.OnceService), i0.inject(i4.RouteService)); }, token: FacebookService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FacebookService.prototype.authResponse;
    /** @type {?} */
    FacebookService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.FB;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.onceService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.routeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sK0JBQStCLENBQUM7Ozs7OztBQUVwRixNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUVRLFdBQU0sR0FBVyw4REFBOEQsQ0FBQztRQUNoRixVQUFLLEdBQVcsdUJBQXVCLENBQUMsQ0FBQyxpQkFBaUI7UUFFMUQsWUFBTyxHQUFXLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0NBQUE7OztJQUxBLCtCQUFxQjs7SUFDckIsZ0NBQXVGOztJQUN2RiwrQkFBK0M7O0lBQy9DLHFDQUEyQjs7SUFDM0IsaUNBQWlDOztBQUdsQyxNQUFNLE9BQU8sb0JBQW9CO0NBS2hDOzs7SUFKQSwyQ0FBb0I7O0lBQ3BCLHlDQUFrQjs7SUFDbEIsNkNBQXNCOztJQUN0QixzQ0FBZTs7QUFHaEIsTUFBTSxPQUFPLG1CQUFtQjtDQUsvQjs7O0lBSkEscUNBQWU7O0lBQ2YsNENBQXVCOztJQUN2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SSxDQUFDLENBQUM7cUJBQ2Q7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7OztZQWpNRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBU0UsTUFBTSxTQUFDLFdBQVc7WUFyRFosYUFBYTtZQUdiLG1CQUFtQjtZQUZuQixXQUFXO1lBQ1gsWUFBWTs7Ozs7SUE2Q3BCLHVDQUEwQzs7SUFDMUMsa0NBQStCOzs7OztJQUMvQixrQ0FBZ0M7Ozs7O0lBQ2hDLDZCQUFnQjs7Ozs7SUFHZixxQ0FBK0M7Ozs7O0lBQy9DLHdDQUFvQzs7Ozs7SUFDcEMseUNBQTJDOzs7OztJQUMzQyxzQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmNlL29uY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0ZXMvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQ29uZmlnIHtcblx0cHVibGljIGFwcElkOiBudW1iZXI7XG5cdHB1YmxpYyBmaWVsZHM6IHN0cmluZyA9ICdpZCxuYW1lLGZpcnN0X25hbWUsbGFzdF9uYW1lLGVtYWlsLGdlbmRlcixwaWN0dXJlLGNvdmVyLGxpbmsnO1xuXHRwdWJsaWMgc2NvcGU6IHN0cmluZyA9ICdwdWJsaWNfcHJvZmlsZSwgZW1haWwnOyAvLyBwdWJsaXNoX3N0cmVhbVxuXHRwdWJsaWMgdG9rZW5DbGllbnQ6IHN0cmluZztcblx0cHVibGljIHZlcnNpb246IHN0cmluZyA9ICd2Mi4xMCc7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va0F1dGhSZXNwb25zZSB7XG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG5cdGV4cGlyZXNJbjogbnVtYmVyO1xuXHRzaWduZWRSZXF1ZXN0OiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tQaWN0dXJlRGF0YSB7XG5cdGhlaWdodDogbnVtYmVyO1xuXHRpc19zaWxob3VldHRlOiBib29sZWFuO1xuXHR1cmw6IHN0cmluZztcblx0d2lkdGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGljdHVyZSB7XG5cdGRhdGE6IEZhY2Vib29rUGljdHVyZURhdGE7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1VzZXIge1xuXHRlbWFpbDogc3RyaW5nO1xuXHRmaXJzdF9uYW1lOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG5cdGxhc3RfbmFtZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBpY3R1cmU6IEZhY2Vib29rUGljdHVyZTtcblx0YXV0aFJlc3BvbnNlPzogRmFjZWJvb2tBdXRoUmVzcG9uc2U7XG5cdGZhY2Vib29rVG9rZW4/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rU2VydmljZSB7XG5cblx0cHVibGljIGF1dGhSZXNwb25zZTogRmFjZWJvb2tBdXRoUmVzcG9uc2U7XG5cdHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlU2VydmljZTtcblx0cHJpdmF0ZSBvcHRpb25zOiBGYWNlYm9va0NvbmZpZztcblx0cHJpdmF0ZSBGQjogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMgJiYgIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMuZmFjZWJvb2spIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmFjZWJvb2tTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmZhY2Vib29rJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEZhY2Vib29rQ29uZmlnKCksIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMuZmFjZWJvb2spO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB0aGlzLnN0b3JhZ2UuZ2V0KCdmYWNlYm9vaycpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgRmFjZWJvb2tTZXJ2aWNlLmZhY2Vib29rIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRmYWNlYm9vaygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwcycpICE9PSAtMSkge1xuXHRcdFx0aWYgKHRoaXMuRkIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuRkIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCcvL2Nvbm5lY3QuZmFjZWJvb2submV0LycgKyB0aGlzLnJvdXRlU2VydmljZS5jdXJyZW50TGFuZyArICcvc2RrLmpzJywgJ2ZiQXN5bmNJbml0JykucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcblx0XHRcdFx0XHRcdGNvbnN0IEZCID0gd2luZG93WydGQiddO1xuXHRcdFx0XHRcdFx0RkIuaW5pdCh7XG5cdFx0XHRcdFx0XHRcdGFwcElkOiB0aGlzLm9wdGlvbnMuYXBwSWQsXG5cdFx0XHRcdFx0XHRcdC8vIHN0YXR1czogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y29va2llOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR4ZmJtbDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcnNpb24sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuRkIgPSBGQjtcblx0XHRcdFx0XHRcdHJldHVybiBvZihGQik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGYuZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHguZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Zi5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdC8qXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0eC5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdH0pO1xuXHRcdH0pKTtcblx0XHQqL1xuXHR9XG5cblx0bG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZicsIGYpO1xuXHRcdFx0XHRcdGYubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHgubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGdldE1lKGZpZWxkcz86IHN0cmluZyk6IE9ic2VydmFibGU8RmFjZWJvb2tVc2VyPiB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKGwgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0ZmllbGRzID0gZmllbGRzIHx8IHRoaXMub3B0aW9ucy5maWVsZHM7XG5cdFx0XHRcdFx0dGhpcy5GQi5hcGkoJy9tZScsIHtcblx0XHRcdFx0XHRcdGZpZWxkczogZmllbGRzLFxuXHRcdFx0XHRcdFx0YWNjZXNzVG9rZW46IHRoaXMub3B0aW9ucy50b2tlbkNsaWVudCxcblx0XHRcdFx0XHR9LCAocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCFyIHx8IHIuZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSByID8gci5lcnJvciA6ICdlcnJvcic7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuZ2V0TWUuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyLmVycm9yKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSByIGFzIEZhY2Vib29rVXNlcjtcblx0XHRcdFx0XHRcdFx0dXNlci5hdXRoUmVzcG9uc2UgPSB0aGlzLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dXNlci5mYWNlYm9va1Rva2VuID0gdGhpcy5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuZ2V0TWUuc3VjY2VzcycsIHVzZXIpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHVzZXIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxufVxuIl19