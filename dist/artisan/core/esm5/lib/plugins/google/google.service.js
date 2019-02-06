/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
import { LocalStorageService } from '../../storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.service";
import * as i2 from "../../storage/storage.service";
import * as i3 from "../../once/once.service";
var GoogleConfig = /** @class */ (function () {
    function GoogleConfig() {
        this.cookiepolicy = 'single_host_origin';
        this.scope = 'profile email';
        this.fetch_basic_profile = true;
        this.ux_mode = 'popup';
    }
    return GoogleConfig;
}());
export { GoogleConfig };
if (false) {
    /** @type {?} */
    GoogleConfig.prototype.clientId;
    /** @type {?} */
    GoogleConfig.prototype.cookiepolicy;
    /** @type {?} */
    GoogleConfig.prototype.scope;
    /** @type {?} */
    GoogleConfig.prototype.fetch_basic_profile;
    /** @type {?} */
    GoogleConfig.prototype.ux_mode;
}
var GoogleAuthResponse = /** @class */ (function () {
    function GoogleAuthResponse() {
    }
    return GoogleAuthResponse;
}());
export { GoogleAuthResponse };
if (false) {
    /** @type {?} */
    GoogleAuthResponse.prototype.token_type;
    /** @type {?} */
    GoogleAuthResponse.prototype.access_token;
    /** @type {?} */
    GoogleAuthResponse.prototype.scope;
    /** @type {?} */
    GoogleAuthResponse.prototype.login_hint;
    /** @type {?} */
    GoogleAuthResponse.prototype.expires_in;
    /** @type {?} */
    GoogleAuthResponse.prototype.expires_at;
    /** @type {?} */
    GoogleAuthResponse.prototype.first_issued_at;
    /** @type {?} */
    GoogleAuthResponse.prototype.id_token;
    /** @type {?} */
    GoogleAuthResponse.prototype.idpId;
    /** @type {?} */
    GoogleAuthResponse.prototype.signedRequest;
    /** @type {?} */
    GoogleAuthResponse.prototype.userID;
}
var GoogleUser = /** @class */ (function () {
    function GoogleUser() {
    }
    return GoogleUser;
}());
export { GoogleUser };
if (false) {
    /** @type {?} */
    GoogleUser.prototype.email;
    /** @type {?} */
    GoogleUser.prototype.firstName;
    /** @type {?} */
    GoogleUser.prototype.id;
    /** @type {?} */
    GoogleUser.prototype.lastName;
    /** @type {?} */
    GoogleUser.prototype.name;
    /** @type {?} */
    GoogleUser.prototype.picture;
    /** @type {?} */
    GoogleUser.prototype.authResponse;
    /** @type {?} */
    GoogleUser.prototype.googleToken;
}
var GoogleService = /** @class */ (function () {
    function GoogleService(platformId, configService, storageService, onceService) {
        this.platformId = platformId;
        this.configService = configService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @return {?}
     */
    GoogleService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (!this.configService.options.plugins && !this.configService.options.plugins.google) {
            throw new Error('GoogleService.error missing config object in environment.plugins.google');
        }
        this.options = Object.assign(new GoogleConfig(), this.configService.options.plugins.google);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('google');
        // console.log('GoogleService.authResponse', this.authResponse);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.google = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            return new Observable().pipe(function (x) {
                if (_this.gapi) {
                    return of(_this.gapi);
                }
                else {
                    return _this.once();
                }
            });
        }
        else {
            return of(null);
        }
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.getMe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.login().pipe(concatMap(function (x) {
            /** @type {?} */
            var profile = _this.instance.currentUser.get().getBasicProfile();
            /** @type {?} */
            var user = (/** @type {?} */ ({
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: _this.authResponse,
                googleToken: _this.authResponse.access_token,
            }));
            return of(user);
        }));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap(function (x) {
            return _this.signin();
        }));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap(function (x) {
            return from(new Promise(function (resolve, reject) {
                if (_this.instance.isSignedIn && _this.instance.isSignedIn.get()) {
                    _this.instance.signOut().then(function (signed) {
                        resolve();
                    }, reject);
                }
                else {
                    resolve();
                }
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.once = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(function (x) {
            _this.gapi = window['gapi'];
            return of(_this.gapi);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.getAuth2 = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable().pipe(function (x) {
            if (_this.auth2) {
                return of(_this.auth2);
            }
            else {
                return _this.google().pipe(concatMap(function (x) {
                    if (_this.gapi.auth2) {
                        return _this.auth2init();
                    }
                    else {
                        return from(new Promise(function (resolve, reject) {
                            _this.gapi.load('auth2', function () {
                                setTimeout(function () {
                                    resolve();
                                }, 200);
                            }, reject);
                        })).pipe(concatMap(function (x) {
                            return _this.auth2init();
                        }));
                    }
                }));
            }
        });
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.signin = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return from(new Promise(function (resolve, reject) {
            /** @type {?} */
            var readAccessToken = function () {
                // console.log('GoogleLogin.readAccessToken');
                try {
                    /** @type {?} */
                    var user = _this.instance.currentUser.get().getAuthResponse(true);
                    // console.log('GoogleLogin.readAccessToken.success', user);
                    _this.authResponse = user;
                    _this.storage.set('google', user);
                    resolve({
                        code: user.access_token,
                    });
                }
                catch (error) {
                    console.log('GoogleLogin.readAccessToken.error', error);
                    _this.storage.delete('google');
                    reject(error);
                }
            };
            if (_this.instance.isSignedIn && _this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                _this.instance.signIn({
                    scope: 'profile email',
                }).then(function (signed) {
                    readAccessToken();
                }, function (error) {
                    _this.storage.delete('google');
                    reject(error);
                });
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.auth2init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return from(new Promise(function (resolve, reject) {
            _this.gapi.auth2.init({
                client_id: _this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then(function () {
                _this.auth2 = _this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(_this.auth2);
            }, reject);
        }));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.auth2Instance = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap(function (x) {
                _this.instance = _this.auth2.getAuthInstance();
                return of(_this.instance);
            }));
        }
    };
    GoogleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: LocalStorageService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ GoogleService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.LocalStorageService), i0.inject(i3.OnceService)); }, token: GoogleService, providedIn: "root" });
    return GoogleService;
}());
export { GoogleService };
if (false) {
    /** @type {?} */
    GoogleService.prototype.authResponse;
    /** @type {?} */
    GoogleService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.gapi;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.auth2;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBa0IsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFcEY7SUFBQTtRQUVRLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7UUFDN0MsVUFBSyxHQUFZLGVBQWUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBYSxJQUFJLENBQUM7UUFDckMsWUFBTyxHQUFZLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxBLGdDQUF3Qjs7SUFDeEIsb0NBQW9EOztJQUNwRCw2QkFBd0M7O0lBQ3hDLDJDQUE0Qzs7SUFDNUMsK0JBQWtDOztBQUduQztJQUFBO0lBWUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7SUFYQSx3Q0FBbUI7O0lBQ25CLDBDQUFxQjs7SUFDckIsbUNBQWM7O0lBQ2Qsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLHdDQUFtQjs7SUFDbkIsNkNBQXdCOztJQUN4QixzQ0FBaUI7O0lBQ2pC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LDZCQUFrQjs7Ozs7SUFDbEIsOEJBQW1COzs7OztJQUNuQixpQ0FBc0I7Ozs7O0lBR3JCLG1DQUErQzs7Ozs7SUFDL0Msc0NBQW9DOzs7OztJQUNwQyx1Q0FBMkM7Ozs7O0lBQzNDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb25jZS9vbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVDb25maWcge1xuXHRwdWJsaWMgY2xpZW50SWQ6IHN0cmluZztcblx0cHVibGljIGNvb2tpZXBvbGljeT86IHN0cmluZyA9ICdzaW5nbGVfaG9zdF9vcmlnaW4nO1xuXHRwdWJsaWMgc2NvcGU/OiBzdHJpbmcgPSAncHJvZmlsZSBlbWFpbCc7XG5cdHB1YmxpYyBmZXRjaF9iYXNpY19wcm9maWxlPzogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyB1eF9tb2RlPzogc3RyaW5nID0gJ3BvcHVwJztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhSZXNwb25zZSB7XG5cdHRva2VuX3R5cGU6IHN0cmluZztcblx0YWNjZXNzX3Rva2VuOiBzdHJpbmc7XG5cdHNjb3BlOiBzdHJpbmc7XG5cdGxvZ2luX2hpbnQ6IHN0cmluZztcblx0ZXhwaXJlc19pbjogbnVtYmVyO1xuXHRleHBpcmVzX2F0OiBudW1iZXI7XG5cdGZpcnN0X2lzc3VlZF9hdDogbnVtYmVyO1xuXHRpZF90b2tlbjogc3RyaW5nO1xuXHRpZHBJZDogc3RyaW5nO1xuXHRzaWduZWRSZXF1ZXN0OiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBpY3R1cmU6IHN0cmluZztcblx0YXV0aFJlc3BvbnNlPzogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRnb29nbGVUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlU2VydmljZSB7XG5cblx0cHVibGljIGF1dGhSZXNwb25zZTogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogR29vZ2xlQ29uZmlnO1xuXHRwcml2YXRlIGdhcGk6IGFueTtcblx0cHJpdmF0ZSBhdXRoMjogYW55O1xuXHRwcml2YXRlIGluc3RhbmNlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMgJiYgIXRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMuZ29vZ2xlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZ29vZ2xlJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZUNvbmZpZygpLCB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLmdvb2dsZSk7XG5cdFx0dGhpcy5zdG9yYWdlID0gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcblx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHRoaXMuc3RvcmFnZS5nZXQoJ2dvb2dsZScpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVTZXJ2aWNlLmF1dGhSZXNwb25zZScsIHRoaXMuYXV0aFJlc3BvbnNlKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEdvb2dsZVNlcnZpY2UuZ29vZ2xlIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRwcml2YXRlIGdvb2dsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKS5waXBlKHggPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5nYXBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub25jZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdGdldE1lKCkge1xuXHRcdHJldHVybiB0aGlzLmxvZ2luKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0Y29uc3QgcHJvZmlsZSA9IHRoaXMuaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XG5cdFx0XHRcdGNvbnN0IHVzZXIgPSB7XG5cdFx0XHRcdFx0aWQ6IHByb2ZpbGUuZ2V0SWQoKSxcblx0XHRcdFx0XHRuYW1lOiBwcm9maWxlLmdldE5hbWUoKSxcblx0XHRcdFx0XHRmaXJzdE5hbWU6IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCksXG5cdFx0XHRcdFx0bGFzdE5hbWU6IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpLFxuXHRcdFx0XHRcdHBpY3R1cmU6IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKSxcblx0XHRcdFx0XHRlbWFpbDogcHJvZmlsZS5nZXRFbWFpbCgpLFxuXHRcdFx0XHRcdGF1dGhSZXNwb25zZTogdGhpcy5hdXRoUmVzcG9uc2UsXG5cdFx0XHRcdFx0Z29vZ2xlVG9rZW46IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc190b2tlbixcblx0XHRcdFx0fSBhcyBHb29nbGVVc2VyO1xuXHRcdFx0XHRyZXR1cm4gb2YodXNlcik7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRsb2dpbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2lnbmluKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRsb2dvdXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aDJJbnN0YW5jZSgpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbk91dCgpLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzP29ubG9hZD17e2NhbGxiYWNrfX0nLCB0cnVlKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHR0aGlzLmdhcGkgPSB3aW5kb3dbJ2dhcGknXTtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEF1dGgyKCkge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRpZiAodGhpcy5hdXRoMikge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5hdXRoMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nb29nbGUoKS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdhcGkuYXV0aDIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJvbShcblx0XHRcdFx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KS5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmF1dGgyaW5pdCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2lnbmluKCkge1xuXHRcdHJldHVybiBmcm9tKFxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCByZWFkQWNjZXNzVG9rZW4gPSAoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbicpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRBdXRoUmVzcG9uc2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuLnN1Y2Nlc3MnLCB1c2VyKTtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdXNlcjtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2dvb2dsZScsIHVzZXIpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRcdGNvZGU6IHVzZXIuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluICYmIHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSkge1xuXHRcdFx0XHRcdHJlYWRBY2Nlc3NUb2tlbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbkluKHtcblx0XHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cblx0XHRcdFx0XHR9KS50aGVuKChzaWduZWQpID0+IHtcblx0XHRcdFx0XHRcdHJlYWRBY2Nlc3NUb2tlbigpO1xuXG5cdFx0XHRcdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgYXV0aDJpbml0KCkge1xuXHRcdHJldHVybiBmcm9tKFxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdhcGkuYXV0aDIuaW5pdCh7XG5cdFx0XHRcdFx0Y2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SWQsXG5cdFx0XHRcdFx0Y29va2llcG9saWN5OiAnc2luZ2xlX2hvc3Rfb3JpZ2luJyxcblx0XHRcdFx0XHRzY29wZTogJ3Byb2ZpbGUgZW1haWwnLFxuXHRcdFx0XHRcdGZldGNoX2Jhc2ljX3Byb2ZpbGU6IHRydWUsXG5cdFx0XHRcdFx0dXhfbW9kZTogJ3BvcHVwJyxcblx0XHRcdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hdXRoMiA9IHRoaXMuZ2FwaS5hdXRoMjtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnQXV0aDJJbml0LnN1Y2Nlc3MnLCB0aGlzLmF1dGgyKTtcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMuYXV0aDIpO1xuXHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGF1dGgySW5zdGFuY2UoKSB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmluc3RhbmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXV0aDIoKS5waXBlKFxuXHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXMuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxufVxuIl19