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
var FacebookConfig = /** @class */ (function () {
    function FacebookConfig() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
    return FacebookConfig;
}());
export { FacebookConfig };
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
var FacebookAuthResponse = /** @class */ (function () {
    function FacebookAuthResponse() {
    }
    return FacebookAuthResponse;
}());
export { FacebookAuthResponse };
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
var FacebookPictureData = /** @class */ (function () {
    function FacebookPictureData() {
    }
    return FacebookPictureData;
}());
export { FacebookPictureData };
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
var FacebookPicture = /** @class */ (function () {
    function FacebookPicture() {
    }
    return FacebookPicture;
}());
export { FacebookPicture };
if (false) {
    /** @type {?} */
    FacebookPicture.prototype.data;
}
var FacebookUser = /** @class */ (function () {
    function FacebookUser() {
    }
    return FacebookUser;
}());
export { FacebookUser };
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
var FacebookService = /** @class */ (function () {
    function FacebookService(platformId, configService, storageService, onceService, routeService) {
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
    FacebookService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (!this.configService.options.plugins && !this.configService.options.plugins.facebook) {
            throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
        }
        this.options = Object.assign(new FacebookConfig(), this.configService.options.plugins.facebook);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('facebook');
        // console.log('FacebookService.authResponse', this.authResponse);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    FacebookService.prototype.facebook = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId) && window.location.protocol.indexOf('https') !== -1) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(function (x) {
                    // console.log(x);
                    /** @type {?} */
                    var FB = window['FB'];
                    FB.init({
                        appId: _this.options.appId,
                        // status: true,
                        cookie: true,
                        xfbml: true,
                        version: _this.options.version,
                    });
                    _this.FB = FB;
                    return of(FB);
                }));
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @return {?}
     */
    FacebookService.prototype.status = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facebook().pipe(filter(function (f) { return f !== null; }), concatMap(function (f) {
            return from(new Promise(function (resolve, reject) {
                f.getLoginStatus(function (r) {
                    _this.authResponse = null;
                    if (r.status === 'connected') {
                        _this.authResponse = r.authResponse;
                        _this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        _this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: _this.options.scope });
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
    };
    /**
     * @return {?}
     */
    FacebookService.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facebook().pipe(filter(function (f) { return f !== null; }), concatMap(function (f) {
            return from(new Promise(function (resolve, reject) {
                f.login(function (r) {
                    _this.authResponse = null;
                    if (r.status === 'connected') {
                        _this.authResponse = r.authResponse;
                        _this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        _this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: _this.options.scope });
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
    };
    /**
     * @return {?}
     */
    FacebookService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facebook().pipe(filter(function (f) { return f !== null; }), concatMap(function (f) {
            return from(new Promise(function (resolve, reject) {
                // console.log('f', f);
                f.logout(function (r) {
                    resolve(r);
                    _this.storage.delete('facebook');
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
    };
    /**
     * @param {?=} fields
     * @return {?}
     */
    FacebookService.prototype.getMe = /**
     * @param {?=} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return this.login().pipe(concatMap(function (l) {
            return from(new Promise(function (resolve, reject) {
                fields = fields || _this.options.fields;
                _this.FB.api('/me', {
                    fields: fields,
                    accessToken: _this.options.tokenClient,
                }, function (r) {
                    if (!r || r.error) {
                        /** @type {?} */
                        var error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        /** @type {?} */
                        var user = (/** @type {?} */ (r));
                        user.authResponse = _this.authResponse;
                        user.facebookToken = _this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    };
    FacebookService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: LocalStorageService },
        { type: OnceService },
        { type: RouteService }
    ]; };
    /** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.LocalStorageService), i0.inject(i3.OnceService), i0.inject(i4.RouteService)); }, token: FacebookService, providedIn: "root" });
    return FacebookService;
}());
export { FacebookService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhcnRpc2FuL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sK0JBQStCLENBQUM7Ozs7OztBQUVwRjtJQUFBO1FBRVEsV0FBTSxHQUFXLDhEQUE4RCxDQUFDO1FBQ2hGLFVBQUssR0FBVyx1QkFBdUIsQ0FBQyxDQUFDLGlCQUFpQjtRQUUxRCxZQUFPLEdBQVcsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEEsK0JBQXFCOztJQUNyQixnQ0FBdUY7O0lBQ3ZGLCtCQUErQzs7SUFDL0MscUNBQTJCOztJQUMzQixpQ0FBaUM7O0FBR2xDO0lBQUE7SUFLQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpBLDJDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLHNDQUFlOztBQUdoQjtJQUFBO0lBS0EsQ0FBQztJQUFE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LENBQUMsRUFBZ0I7d0JBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQzt3QkFDbkQsc0RBQXNEO3dCQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Q7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7O2dCQWpNRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OzZDQVNFLE1BQU0sU0FBQyxXQUFXO2dCQXJEWixhQUFhO2dCQUdiLG1CQUFtQjtnQkFGbkIsV0FBVztnQkFDWCxZQUFZOzs7MEJBVHJCO0NBb1BDLEFBbk1ELElBbU1DO1NBaE1ZLGVBQWU7OztJQUUzQix1Q0FBMEM7O0lBQzFDLGtDQUErQjs7Ozs7SUFDL0Isa0NBQWdDOzs7OztJQUNoQyw2QkFBZ0I7Ozs7O0lBR2YscUNBQStDOzs7OztJQUMvQyx3Q0FBb0M7Ozs7O0lBQ3BDLHlDQUEyQzs7Ozs7SUFDM0Msc0NBQWdDOzs7OztJQUNoQyx1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25jZS9vbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGVzL3JvdXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va0NvbmZpZyB7XG5cdHB1YmxpYyBhcHBJZDogbnVtYmVyO1xuXHRwdWJsaWMgZmllbGRzOiBzdHJpbmcgPSAnaWQsbmFtZSxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxnZW5kZXIscGljdHVyZSxjb3ZlcixsaW5rJztcblx0cHVibGljIHNjb3BlOiBzdHJpbmcgPSAncHVibGljX3Byb2ZpbGUsIGVtYWlsJzsgLy8gcHVibGlzaF9zdHJlYW1cblx0cHVibGljIHRva2VuQ2xpZW50OiBzdHJpbmc7XG5cdHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmcgPSAndjIuMTAnO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tBdXRoUmVzcG9uc2Uge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRleHBpcmVzSW46IG51bWJlcjtcblx0c2lnbmVkUmVxdWVzdDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGljdHVyZURhdGEge1xuXHRoZWlnaHQ6IG51bWJlcjtcblx0aXNfc2lsaG91ZXR0ZTogYm9vbGVhbjtcblx0dXJsOiBzdHJpbmc7XG5cdHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1BpY3R1cmUge1xuXHRkYXRhOiBGYWNlYm9va1BpY3R1cmVEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tVc2VyIHtcblx0ZW1haWw6IHN0cmluZztcblx0Zmlyc3RfbmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0X25hbWU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRwaWN0dXJlOiBGYWNlYm9va1BpY3R1cmU7XG5cdGF1dGhSZXNwb25zZT86IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xuXHRmYWNlYm9va1Rva2VuPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGYWNlYm9va1NlcnZpY2Uge1xuXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogRmFjZWJvb2tDb25maWc7XG5cdHByaXZhdGUgRkI6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zICYmICF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLmZhY2Vib29rKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZhY2Vib29rU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5mYWNlYm9vaycpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBGYWNlYm9va0NvbmZpZygpLCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLmZhY2Vib29rKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZmFjZWJvb2snKTtcblx0XHQvLyBjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmF1dGhSZXNwb25zZScsIHRoaXMuYXV0aFJlc3BvbnNlKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEZhY2Vib29rU2VydmljZS5mYWNlYm9vayBvbiBjb21wb25lbnQgT25Jbml0IHRvIGF2b2lkIHBvcHVwIGJsb2NrZXJzIHZpYSBhc3luY3Jvbm91cyBsb2FkaW5nICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0ZmFjZWJvb2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSAhPT0gLTEpIHtcblx0XHRcdGlmICh0aGlzLkZCKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLkZCKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdCgnLy9jb25uZWN0LmZhY2Vib29rLm5ldC8nICsgdGhpcy5yb3V0ZVNlcnZpY2UuY3VycmVudExhbmcgKyAnL3Nkay5qcycsICdmYkFzeW5jSW5pdCcpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coeCk7XG5cdFx0XHRcdFx0XHRjb25zdCBGQiA9IHdpbmRvd1snRkInXTtcblx0XHRcdFx0XHRcdEZCLmluaXQoe1xuXHRcdFx0XHRcdFx0XHRhcHBJZDogdGhpcy5vcHRpb25zLmFwcElkLFxuXHRcdFx0XHRcdFx0XHQvLyBzdGF0dXM6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNvb2tpZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0eGZibWw6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR0aGlzLkZCID0gRkI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YoRkIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRmLmdldExvZ2luU3RhdHVzKChyKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Lypcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR4LmdldExvZ2luU3RhdHVzKChyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xuXHRcdFx0fSk7XG5cdFx0fSkpO1xuXHRcdCovXG5cdH1cblxuXHRsb2dpbigpIHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGYubG9naW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHgubG9naW4oKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2YnLCBmKTtcblx0XHRcdFx0XHRmLmxvZ291dChyID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Lypcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR4LmxvZ291dChyID0+IHtcblx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSkpO1xuXHRcdCovXG5cdH1cblxuXHRnZXRNZShmaWVsZHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZhY2Vib29rVXNlcj4ge1xuXHRcdHJldHVybiB0aGlzLmxvZ2luKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcChsID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLm9wdGlvbnMuZmllbGRzO1xuXHRcdFx0XHRcdHRoaXMuRkIuYXBpKCcvbWUnLCB7XG5cdFx0XHRcdFx0XHRmaWVsZHM6IGZpZWxkcyxcblx0XHRcdFx0XHRcdGFjY2Vzc1Rva2VuOiB0aGlzLm9wdGlvbnMudG9rZW5DbGllbnQsXG5cdFx0XHRcdFx0fSwgKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICghciB8fCByLmVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yID0gciA/IHIuZXJyb3IgOiAnZXJyb3InO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmdldE1lLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qoci5lcnJvcik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gciBhcyBGYWNlYm9va1VzZXI7XG5cdFx0XHRcdFx0XHRcdHVzZXIuYXV0aFJlc3BvbnNlID0gdGhpcy5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHRcdHVzZXIuZmFjZWJvb2tUb2tlbiA9IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmdldE1lLnN1Y2Nlc3MnLCB1c2VyKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh1c2VyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==