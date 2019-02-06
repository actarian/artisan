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
export class GoogleConfig {
    constructor() {
        this.cookiepolicy = 'single_host_origin';
        this.scope = 'profile email';
        this.fetch_basic_profile = true;
        this.ux_mode = 'popup';
    }
}
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
export class GoogleAuthResponse {
}
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
export class GoogleUser {
}
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
export class GoogleService {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} storageService
     * @param {?} onceService
     */
    constructor(platformId, configService, storageService, onceService) {
        this.platformId = platformId;
        this.configService = configService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        if (!this.configService.options.plugins && !this.configService.options.plugins.google) {
            throw new Error('GoogleService.error missing config object in environment.plugins.google');
        }
        this.options = Object.assign(new GoogleConfig(), this.configService.options.plugins.google);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('google');
        // console.log('GoogleService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @private
     * @return {?}
     */
    google() {
        if (isPlatformBrowser(this.platformId)) {
            return new Observable().pipe(x => {
                if (this.gapi) {
                    return of(this.gapi);
                }
                else {
                    return this.once();
                }
            });
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    getMe() {
        return this.login().pipe(concatMap(x => {
            /** @type {?} */
            const profile = this.instance.currentUser.get().getBasicProfile();
            /** @type {?} */
            const user = (/** @type {?} */ ({
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: this.authResponse,
                googleToken: this.authResponse.access_token,
            }));
            return of(user);
        }));
    }
    /**
     * @return {?}
     */
    login() {
        return this.auth2Instance().pipe(concatMap(x => {
            return this.signin();
        }));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.auth2Instance().pipe(concatMap(x => {
            return from(new Promise((resolve, reject) => {
                if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                    this.instance.signOut().then((signed) => {
                        resolve();
                    }, reject);
                }
                else {
                    resolve();
                }
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    once() {
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(x => {
            this.gapi = window['gapi'];
            return of(this.gapi);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getAuth2() {
        return new Observable().pipe(x => {
            if (this.auth2) {
                return of(this.auth2);
            }
            else {
                return this.google().pipe(concatMap(x => {
                    if (this.gapi.auth2) {
                        return this.auth2init();
                    }
                    else {
                        return from(new Promise((resolve, reject) => {
                            this.gapi.load('auth2', () => {
                                setTimeout(() => {
                                    resolve();
                                }, 200);
                            }, reject);
                        })).pipe(concatMap(x => {
                            return this.auth2init();
                        }));
                    }
                }));
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    signin() {
        return from(new Promise((resolve, reject) => {
            /** @type {?} */
            const readAccessToken = () => {
                // console.log('GoogleLogin.readAccessToken');
                try {
                    /** @type {?} */
                    const user = this.instance.currentUser.get().getAuthResponse(true);
                    // console.log('GoogleLogin.readAccessToken.success', user);
                    this.authResponse = user;
                    this.storage.set('google', user);
                    resolve({
                        code: user.access_token,
                    });
                }
                catch (error) {
                    console.log('GoogleLogin.readAccessToken.error', error);
                    this.storage.delete('google');
                    reject(error);
                }
            };
            if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                this.instance.signIn({
                    scope: 'profile email',
                }).then((signed) => {
                    readAccessToken();
                }, (error) => {
                    this.storage.delete('google');
                    reject(error);
                });
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    auth2init() {
        return from(new Promise((resolve, reject) => {
            this.gapi.auth2.init({
                client_id: this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then(() => {
                this.auth2 = this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(this.auth2);
            }, reject);
        }));
    }
    /**
     * @return {?}
     */
    auth2Instance() {
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap(x => {
                this.instance = this.auth2.getAuthInstance();
                return of(this.instance);
            }));
        }
    }
}
GoogleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: LocalStorageService },
    { type: OnceService }
];
/** @nocollapse */ GoogleService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.ConfigService), i0.inject(i2.LocalStorageService), i0.inject(i3.OnceService)); }, token: GoogleService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBa0IsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFcEYsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFFUSxpQkFBWSxHQUFZLG9CQUFvQixDQUFDO1FBQzdDLFVBQUssR0FBWSxlQUFlLENBQUM7UUFDakMsd0JBQW1CLEdBQWEsSUFBSSxDQUFDO1FBQ3JDLFlBQU8sR0FBWSxPQUFPLENBQUM7SUFDbkMsQ0FBQztDQUFBOzs7SUFMQSxnQ0FBd0I7O0lBQ3hCLG9DQUFvRDs7SUFDcEQsNkJBQXdDOztJQUN4QywyQ0FBNEM7O0lBQzVDLCtCQUFrQzs7QUFHbkMsTUFBTSxPQUFPLGtCQUFrQjtDQVk5Qjs7O0lBWEEsd0NBQW1COztJQUNuQiwwQ0FBcUI7O0lBQ3JCLG1DQUFjOztJQUNkLHdDQUFtQjs7SUFDbkIsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLDZDQUF3Qjs7SUFDeEIsc0NBQWlCOztJQUNqQixtQ0FBYzs7SUFDZCwyQ0FBc0I7O0lBQ3RCLG9DQUFlOztB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blxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9vbmNlL29uY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUNvbmZpZyB7XG5cdHB1YmxpYyBjbGllbnRJZDogc3RyaW5nO1xuXHRwdWJsaWMgY29va2llcG9saWN5Pzogc3RyaW5nID0gJ3NpbmdsZV9ob3N0X29yaWdpbic7XG5cdHB1YmxpYyBzY29wZT86IHN0cmluZyA9ICdwcm9maWxlIGVtYWlsJztcblx0cHVibGljIGZldGNoX2Jhc2ljX3Byb2ZpbGU/OiBib29sZWFuID0gdHJ1ZTtcblx0cHVibGljIHV4X21vZGU/OiBzdHJpbmcgPSAncG9wdXAnO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFJlc3BvbnNlIHtcblx0dG9rZW5fdHlwZTogc3RyaW5nO1xuXHRhY2Nlc3NfdG9rZW46IHN0cmluZztcblx0c2NvcGU6IHN0cmluZztcblx0bG9naW5faGludDogc3RyaW5nO1xuXHRleHBpcmVzX2luOiBudW1iZXI7XG5cdGV4cGlyZXNfYXQ6IG51bWJlcjtcblx0Zmlyc3RfaXNzdWVkX2F0OiBudW1iZXI7XG5cdGlkX3Rva2VuOiBzdHJpbmc7XG5cdGlkcElkOiBzdHJpbmc7XG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVVc2VyIHtcblx0ZW1haWw6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0cGljdHVyZTogc3RyaW5nO1xuXHRhdXRoUmVzcG9uc2U/OiBHb29nbGVBdXRoUmVzcG9uc2U7XG5cdGdvb2dsZVRva2VuPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVTZXJ2aWNlIHtcblxuXHRwdWJsaWMgYXV0aFJlc3BvbnNlOiBHb29nbGVBdXRoUmVzcG9uc2U7XG5cdHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlU2VydmljZTtcblx0cHJpdmF0ZSBvcHRpb25zOiBHb29nbGVDb25maWc7XG5cdHByaXZhdGUgZ2FwaTogYW55O1xuXHRwcml2YXRlIGF1dGgyOiBhbnk7XG5cdHByaXZhdGUgaW5zdGFuY2U6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucyAmJiAhdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5nb29nbGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignR29vZ2xlU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5nb29nbGUnKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgR29vZ2xlQ29uZmlnKCksIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMuZ29vZ2xlKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZ29vZ2xlJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVNlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgR29vZ2xlU2VydmljZS5nb29nbGUgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdHByaXZhdGUgZ29vZ2xlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmdhcGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRjb25zdCBwcm9maWxlID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdFx0XHRpZDogcHJvZmlsZS5nZXRJZCgpLFxuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpcnN0TmFtZTogcHJvZmlsZS5nZXRHaXZlbk5hbWUoKSxcblx0XHRcdFx0XHRsYXN0TmFtZTogcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCksXG5cdFx0XHRcdFx0cGljdHVyZTogcHJvZmlsZS5nZXRJbWFnZVVybCgpLFxuXHRcdFx0XHRcdGVtYWlsOiBwcm9maWxlLmdldEVtYWlsKCksXG5cdFx0XHRcdFx0YXV0aFJlc3BvbnNlOiB0aGlzLmF1dGhSZXNwb25zZSxcblx0XHRcdFx0XHRnb29nbGVUb2tlbjogdGhpcy5hdXRoUmVzcG9uc2UuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHR9IGFzIEdvb2dsZVVzZXI7XG5cdFx0XHRcdHJldHVybiBvZih1c2VyKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmF1dGgySW5zdGFuY2UoKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaWduaW4oKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbiAmJiB0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4uZ2V0KCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduT3V0KCkudGhlbigoc2lnbmVkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanM/b25sb2FkPXt7Y2FsbGJhY2t9fScsIHRydWUpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaSA9IHdpbmRvd1snZ2FwaSddO1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QXV0aDIoKSB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcblx0XHRcdGlmICh0aGlzLmF1dGgyKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmF1dGgyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdvb2dsZSgpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2FwaS5hdXRoMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzaWduaW4oKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlYWRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSB0aGlzLmluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpLmdldEF1dGhSZXNwb25zZSh0cnVlKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uc3VjY2VzcycsIHVzZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB1c2VyO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZ29vZ2xlJywgdXNlcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0Y29kZTogdXNlci5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbi5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduSW4oe1xuXHRcdFx0XHRcdFx0c2NvcGU6ICdwcm9maWxlIGVtYWlsJyxcblxuXHRcdFx0XHRcdH0pLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cblx0XHRcdFx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBhdXRoMmluaXQoKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaS5hdXRoMi5pbml0KHtcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcblx0XHRcdFx0XHRjb29raWVwb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLFxuXHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cdFx0XHRcdFx0ZmV0Y2hfYmFzaWNfcHJvZmlsZTogdHJ1ZSxcblx0XHRcdFx0XHR1eF9tb2RlOiAncG9wdXAnLFxuXHRcdFx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGgyID0gdGhpcy5nYXBpLmF1dGgyO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdBdXRoMkluaXQuc3VjY2VzcycsIHRoaXMuYXV0aDIpO1xuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5hdXRoMik7XG5cdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXV0aDJJbnN0YW5jZSgpIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdXRoMigpLnBpcGUoXG5cdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlID0gdGhpcy5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=