(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/common/http'), require('@angular/router'), require('util'), require('@angular/platform-browser'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@artisan/core', ['exports', '@angular/forms', '@angular/common/http', '@angular/router', 'util', '@angular/platform-browser', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.artisan = global.artisan || {}, global.artisan.core = {}),global.ng.forms,global.ng.common.http,global.ng.router,global.util,global.ng.platformBrowser,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,forms,http,i4,util,i1,i1$1,rxjs,operators,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TIMEOUT = 5 * 60 * 1000;
    // five minutes
    /*
    export class StorageEvent extends Event {}

    export class CookieStorageEvent extends StorageEvent { }

    export class SessionStorageEvent extends StorageEvent { }

    export class LocalStorageEvent extends StorageEvent { }
    */
    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        /**
         * @param {?} name
         * @return {?}
         */
        StorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) { };
        /**
         * @param {?} name
         * @return {?}
         */
        StorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) { return false; };
        /**
         * @param {?} name
         * @return {?}
         */
        StorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) { return null; };
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        StorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) { };
        /**
         * @return {?}
         */
        StorageService.prototype.on = /**
         * @return {?}
         */
            function () { return rxjs.of(null); };
        /**
         * @return {?}
         */
        StorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                // console.log('no StorageService available...');
                return this;
            };
        StorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
        return StorageService;
    }());
    var CookieStorageService = /** @class */ (function () {
        function CookieStorageService(platformId, storageService) {
            this.platformId = platformId;
            this.storageService = storageService;
        }
        /**
         * @return {?}
         */
        CookieStorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                if (this.isSupported()) {
                    // console.log('CookieStorageService.supported');
                    return this;
                }
                else {
                    return this.storageService.tryGet();
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CookieStorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.setter(name, '', -1);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CookieStorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CookieStorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var cookieName = name + '=';
                /** @type {?} */
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    /** @type {?} */
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1, c.length);
                    }
                    if (c.indexOf(cookieName) === 0) {
                        /** @type {?} */
                        var value = c.substring(cookieName.length, c.length);
                        /** @type {?} */
                        var model = null;
                        try {
                            model = JSON.parse(decodeURIComponent(atob(value)));
                        }
                        catch (e) {
                            console.log('Cookie.get.error parsing', name, e);
                        }
                        return model;
                    }
                }
                return null;
            };
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        CookieStorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                try {
                    /** @type {?} */
                    var cache_1 = [];
                    /** @type {?} */
                    var json = JSON.stringify(value, function (key, value) {
                        if (key === 'pool') {
                            return;
                        }
                        if (typeof value === 'object' && value !== null) {
                            if (cache_1.indexOf(value) !== -1) {
                                // throw (new Error('circular reference found, discard key'));
                                return;
                            }
                            cache_1.push(value);
                        }
                        return value;
                    });
                    cache_1 = null;
                    this.setter(name, btoa(encodeURIComponent(json)), days);
                }
                catch (e) {
                    console.log('CookieSet.error serializing', name, value, e);
                }
            };
        /**
         * @return {?}
         */
        CookieStorageService.prototype.on = /**
         * @return {?}
         */
            function () {
                // todo
                /** @type {?} */
                var interval = 1000;
                /** @type {?} */
                var timeout = TIMEOUT;
                /** @type {?} */
                var i;
                /** @type {?} */
                var elapsed = 0;
                /**
                 * @return {?}
                 */
                function checkCookie() {
                    if (elapsed > timeout) ;
                    else {
                        /** @type {?} */
                        var c = this.get(name);
                        if (c) ;
                        else {
                            elapsed += interval;
                            i = setTimeout(checkCookie, interval);
                        }
                    }
                }
                checkCookie();
                return rxjs.of(null);
            };
        /**
         * @private
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        CookieStorageService.prototype.setter = /**
         * @private
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                /** @type {?} */
                var expires;
                if (days) {
                    /** @type {?} */
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = '; expires=' + date.toUTCString();
                }
                else {
                    expires = '';
                }
                document.cookie = name + '=' + value + expires + '; path=/';
            };
        /**
         * @private
         * @return {?}
         */
        CookieStorageService.prototype.isSupported = /**
         * @private
         * @return {?}
         */
            function () {
                return i1$1.isPlatformBrowser(this.platformId);
            };
        CookieStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CookieStorageService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: StorageService }
            ];
        };
        /** @nocollapse */ CookieStorageService.ngInjectableDef = i0.defineInjectable({ factory: function CookieStorageService_Factory() { return new CookieStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(StorageService)); }, token: CookieStorageService, providedIn: "root" });
        return CookieStorageService;
    }());
    var SessionStorageService = /** @class */ (function () {
        function SessionStorageService(platformId, cookieStorageService) {
            this.platformId = platformId;
            this.cookieStorageService = cookieStorageService;
        }
        /**
         * @return {?}
         */
        SessionStorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                if (this.isSupported()) {
                    // console.log('SessionStorageService.supported');
                    return this;
                }
                else {
                    return this.cookieStorageService.tryGet();
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SessionStorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                window.sessionStorage.removeItem(name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SessionStorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return window.sessionStorage[name] !== undefined;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SessionStorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var value = null;
                if (window.sessionStorage[name] !== undefined) {
                    try {
                        value = JSON.parse(window.sessionStorage[name]);
                    }
                    catch (e) {
                        console.log('SessionStorage.get.error parsing', name, e);
                    }
                }
                return value;
            };
        /**
         * @return {?}
         */
        SessionStorageService.prototype.on = /**
         * @return {?}
         */
            function () {
                /*
                return $promise(function (promise) {
                    const timeout = TIMEOUT;
                    let i;
                    function storageEvent(e) {
                        if (i) {
                            clearTimeout(i);
                        }
                        if (e.originalEvent.key === name) {
                            try {
                                let value = JSON.parse(e.originalEvent.newValue);
                                promise.resolve(value);
                            } catch (error) {
                                console.log('SessionStorage.on.error parsing', name, error);
                                promise.reject('error parsing ' + name);
                            }
                        }
                    }
                    // return fromEvent(window, 'storage');
                    angular.element(window).on('storage', storageEvent);
                    i = setTimeout(function () {
                        promise.reject('timeout');
                    }, timeout);
                });
                */
                return rxjs.of(null);
            };
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        SessionStorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                try {
                    /** @type {?} */
                    var cache_2 = [];
                    /** @type {?} */
                    var json = JSON.stringify(value, function (key, value) {
                        if (key === 'pool') {
                            return;
                        }
                        if (typeof value === 'object' && value !== null) {
                            if (cache_2.indexOf(value) !== -1) {
                                // throw (new Error('circular reference found, discard key'));
                                return;
                            }
                            cache_2.push(value);
                        }
                        return value;
                    });
                    cache_2 = null;
                    window.sessionStorage.setItem(name, json);
                }
                catch (e) {
                    console.log('SessionStorage.set.error serializing', name, value, e);
                }
            };
        /**
         * @private
         * @return {?}
         */
        SessionStorageService.prototype.isSupported = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var supported = false;
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    try {
                        supported = 'sessionStorage' in window && window.sessionStorage !== null;
                        if (supported) {
                            window.sessionStorage.setItem('test', '1');
                            window.sessionStorage.removeItem('test');
                        }
                        else {
                            supported = false;
                        }
                    }
                    catch (e) {
                        supported = false;
                    }
                }
                return supported;
            };
        SessionStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SessionStorageService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: CookieStorageService }
            ];
        };
        /** @nocollapse */ SessionStorageService.ngInjectableDef = i0.defineInjectable({ factory: function SessionStorageService_Factory() { return new SessionStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: SessionStorageService, providedIn: "root" });
        return SessionStorageService;
    }());
    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService(platformId, cookieStorageService) {
            this.platformId = platformId;
            this.cookieStorageService = cookieStorageService;
        }
        /**
         * @return {?}
         */
        LocalStorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                if (this.isSupported()) {
                    // console.log('LocalStorageService.supported');
                    return this;
                }
                else {
                    return this.cookieStorageService.tryGet();
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LocalStorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                window.localStorage.removeItem(name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LocalStorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return window.localStorage[name] !== undefined;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LocalStorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var value = null;
                if (window.localStorage[name] !== undefined) {
                    try {
                        value = JSON.parse(window.localStorage[name]);
                    }
                    catch (e) {
                        console.log('LocalStorage.get.error parsing', name, e);
                    }
                }
                return value;
            };
        /**
         * @return {?}
         */
        LocalStorageService.prototype.on = /**
         * @return {?}
         */
            function () {
                /*
                return $promise(function (promise) {
                    const timeout = TIMEOUT;
                    let i;
                    function storageEvent(e) {
                        if (i) {
                            clearTimeout(i);
                        }
                        if (e.originalEvent.key === name) {
                            try {
                                let value = JSON.parse(e.originalEvent.newValue);
                                promise.resolve(value);
                            } catch (error) {
                                console.log('LocalStorage.on.error parsing', name, error);
                                promise.reject('error parsing ' + name);
                            }
                        }
                    }
                    // return fromEvent(window, 'storage');
                    angular.element(window).on('storage', storageEvent);
                    i = setTimeout(function () {
                        promise.reject('timeout');
                    }, timeout);
                });
                */
                return rxjs.of(null);
            };
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        LocalStorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                try {
                    /** @type {?} */
                    var cache_3 = [];
                    /** @type {?} */
                    var json = JSON.stringify(value, function (key, value) {
                        if (key === 'pool') {
                            return;
                        }
                        if (typeof value === 'object' && value !== null) {
                            if (cache_3.indexOf(value) !== -1) {
                                // throw (new Error('circular reference found, discard key'));
                                return;
                            }
                            cache_3.push(value);
                        }
                        return value;
                    });
                    cache_3 = null;
                    window.localStorage.setItem(name, json);
                }
                catch (e) {
                    console.log('LocalStorage.set.error serializing', name, value, e);
                }
            };
        /**
         * @private
         * @return {?}
         */
        LocalStorageService.prototype.isSupported = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var supported = false;
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    try {
                        supported = 'localStorage' in window && window.localStorage !== null;
                        if (supported) {
                            window.localStorage.setItem('test', '1');
                            window.localStorage.removeItem('test');
                        }
                        else {
                            supported = false;
                        }
                    }
                    catch (e) {
                        supported = false;
                    }
                }
                return supported;
            };
        LocalStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LocalStorageService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: CookieStorageService }
            ];
        };
        /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: LocalStorageService, providedIn: "root" });
        return LocalStorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthToken = /** @class */ (function () {
        function AuthToken(accessToken, expiresIn) {
            if (expiresIn === void 0) {
                expiresIn = 0;
            }
            this.accessToken = accessToken;
            this.expiresIn = expiresIn;
        }
        return AuthToken;
    }());
    var AuthService = /** @class */ (function () {
        function AuthService(platformId, injector, localStorageService) {
            this.platformId = platformId;
            this.injector = injector;
            this.localStorageService = localStorageService;
            this.cachedRequests = [];
            this.paths = [];
        }
        /**
         * @param {?} authToken
         * @return {?}
         */
        AuthService.prototype.setToken = /**
         * @param {?} authToken
         * @return {?}
         */
            function (authToken) {
                this.localStorageService.set('authToken', authToken);
                this.retryFailedRequests();
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getToken = /**
         * @return {?}
         */
            function () {
                return ( /** @type {?} */(this.localStorageService.get('authToken')));
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getFakeToken = /**
         * @return {?}
         */
            function () {
                return new AuthToken('fakeToken');
            };
        /**
         * @param {?} authToken
         * @return {?}
         */
        AuthService.prototype.isValid = /**
         * @param {?} authToken
         * @return {?}
         */
            function (authToken) {
                // return a boolean reflecting whether or not the token is expired
                return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.isAuthenticated = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var authToken = this.getToken();
                return this.isValid(authToken);
            };
        /**
         * @param {?} request
         * @return {?}
         */
        AuthService.prototype.collectFailedRequest = /**
         * @param {?} request
         * @return {?}
         */
            function (request) {
                this.cachedRequests.push(request);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.retryFailedRequests = /**
         * @return {?}
         */
            function () {
                // this method can be called after the token is refreshed
                // console.log('AuthService.retryFailedRequests');
                // retry the requests.
            };
        AuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.Injector },
                { type: LocalStorageService }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.INJECTOR), i0.inject(LocalStorageService)); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var AuthStrategy = {
        Bearer: 0,
        Cookie: 1,
    };
    AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
    AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
    var CoreTransitionConfig = /** @class */ (function () {
        function CoreTransitionConfig(options) {
            console.log('CoreTransitionConfig', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return CoreTransitionConfig;
    }());
    var CorePrebootConfig = /** @class */ (function () {
        function CorePrebootConfig(options) {
            console.log('CorePrebootConfig', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return CorePrebootConfig;
    }());
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
                this.preboot = new CorePrebootConfig(options.preboot);
                this.transition = new CoreTransitionConfig(options.transition);
                this.defaultPage = options.defaultPage;
                this.notFoundPage = options.notFoundPage;
            }
            else {
                this.preboot = new CorePrebootConfig();
                this.transition = new CoreTransitionConfig();
            }
        }
        return CoreConfig;
    }());
    /** @type {?} */
    var CORE_CONFIG = new i0.InjectionToken('core.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigService = /** @class */ (function () {
        function ConfigService(options) {
            console.log('ConfigService', options);
            options = options || {};
            // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
            // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
            this.options = new CoreConfig(options);
        }
        ConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConfigService.ctorParameters = function () {
            return [
                { type: CoreConfig, decorators: [{ type: i0.Inject, args: [CORE_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(CORE_CONFIG)); }, token: ConfigService, providedIn: "root" });
        return ConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultContentDirective = /** @class */ (function () {
        function DefaultContentDirective(element, container, renderer) {
            this.container = container;
            this.renderer = renderer;
            this.hasContent = true;
            this.element = element.nativeElement;
        }
        /**
         * @return {?}
         */
        DefaultContentDirective.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var hasContent = false;
                console.log('DefaultContentDirective', this.element.childNodes);
                for (var i = this.element.childNodes.length - 1; i >= 0; --i) {
                    /** @type {?} */
                    var node = this.element.childNodes[i];
                    if (node.nodeType === 1 || node.nodeType === 3) {
                        hasContent = true;
                        break;
                    }
                }
                if (hasContent !== this.hasContent) {
                    this.hasContent = hasContent;
                    if (hasContent) {
                        // this.renderer.removeClass(this.element, 'is-empty');
                        this.container.clear();
                    }
                    else {
                        // this.renderer.addClass(this.element, 'is-empty');
                        this.container.createEmbeddedView(this.default);
                    }
                }
            };
        DefaultContentDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[default]',
                    },] }
        ];
        /** @nocollapse */
        DefaultContentDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.ViewContainerRef },
                { type: i0.Renderer2 }
            ];
        };
        DefaultContentDirective.propDecorators = {
            default: [{ type: i0.Input }]
        };
        return DefaultContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModuleComponent = /** @class */ (function () {
        function CoreModuleComponent() {
            this.version = '0.0.1';
        }
        /**
         * @return {?}
         */
        CoreModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CoreModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-module',
                        template: "<span class=\"core-module\">core {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        CoreModuleComponent.ctorParameters = function () { return []; };
        return CoreModuleComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DisposableComponent = /** @class */ (function () {
        function DisposableComponent() {
            this.unsubscribe = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        DisposableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
                // console.log('DisposableComponent.ngOnDestroy', this);
            };
        DisposableComponent.decorators = [
            { type: i0.Component, args: [{
                        template: ''
                    }] }
        ];
        return DisposableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentPipe = /** @class */ (function () {
        function SegmentPipe(location) {
            this.location = location;
        }
        /**
         * @param {?} segments
         * @return {?}
         */
        SegmentPipe.prototype.transform = /**
         * @param {?} segments
         * @return {?}
         */
            function (segments) {
                segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
                /** @type {?} */
                var path = segments.join('/');
                path = this.location.normalize(path);
                if (path.indexOf('/') !== 0) {
                    path = "/" + path;
                }
                segments = path.split('/');
                return segments;
            };
        SegmentPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'segment',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SegmentPipe.ctorParameters = function () {
            return [
                { type: i1$1.Location }
            ];
        };
        /** @nocollapse */ SegmentPipe.ngInjectableDef = i0.defineInjectable({ factory: function SegmentPipe_Factory() { return new SegmentPipe(i0.inject(i1$1.Location)); }, token: SegmentPipe, providedIn: "root" });
        return SegmentPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoggerError = /** @class */ (function (_super) {
        __extends(LoggerError, _super);
        function LoggerError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LoggerError;
    }(http.HttpErrorResponse));
    var Logger = /** @class */ (function () {
        function Logger(configService) {
            this.configService = configService;
            this.logs = [];
            //
        }
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.request = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.configService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
                }
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.log = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.configService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
                }
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.warn = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.configService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
                }
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.error = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.configService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    console.error.apply(console, args);
                }
            };
        /**
         * @param {?} error
         * @return {?}
         */
        Logger.prototype.http = /**
         * @param {?} error
         * @return {?}
         */
            function (error) {
                this.httpError = error;
                if (!this.configService.options.production) {
                    this.logs.push(error.message);
                }
                console.warn('Logger.http.error', error.status, error.statusText, error.url);
            };
        /**
         * @return {?}
         */
        Logger.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.httpError = null;
                this.logs = [];
            };
        Logger.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Logger.ctorParameters = function () {
            return [
                { type: ConfigService }
            ];
        };
        /** @nocollapse */ Logger.ngInjectableDef = i0.defineInjectable({ factory: function Logger_Factory() { return new Logger(i0.inject(ConfigService)); }, token: Logger, providedIn: "root" });
        return Logger;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiRequestOptions = /** @class */ (function () {
        function ApiRequestOptions(options) {
            this.headers = new http.HttpHeaders({
                'Content-Type': 'application/json'
            });
            this.params = options ? new http.HttpParams(options) : null;
        }
        return ApiRequestOptions;
    }());
    /**
     * @template T
     */
    var ApiService = /** @class */ (function () {
        function ApiService(injector) {
            this.injector = injector;
        }
        Object.defineProperty(ApiService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "logger", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._logger) {
                    this._logger = this.injector.get(Logger);
                }
                return this._logger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "http", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._http) {
                    this._http = this.injector.get(http.HttpClient);
                }
                return this._http;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._state) {
                    this._state = this.injector.get(i1.TransferState);
                }
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "platformId", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._platformId) {
                    this._platformId = this.injector.get(i0.PLATFORM_ID);
                }
                return this._platformId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._config) {
                    this._config = this.injector.get(ConfigService).options;
                }
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "origin", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._origin) {
                    this._origin = this.config.origin;
                }
                return this._origin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "url", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var base = this.origin;
                /** @type {?} */
                var collection = this.collection.toLowerCase();
                if (collection.indexOf('http') === 0) {
                    base = '';
                }
                return "" + base + collection;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} method
         * @return {?}
         */
        ApiService.prototype.getUrl = /**
         * @param {?=} method
         * @return {?}
         */
            function (method) {
                if (method === void 0) {
                    method = '';
                }
                return "" + this.url + method;
            };
        /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
        ApiService.prototype.get = /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
            function (first, second) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var params = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.get(url, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.post = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.post(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.put = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = ( /** @type {?} */((typeof first === 'object' ? first : second)));
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.put(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.patch = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = ( /** @type {?} */((typeof first === 'object' ? first : second)));
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.patch(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.delete = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var identity = ( /** @type {?} */((typeof first !== 'string' ? first : second)));
                /** @type {?} */
                var id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = id !== null ? this.getUrl(method + "/" + id) : this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.delete(url, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} input
         * @return {?}
         */
        ApiService.prototype.toCamelCase = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                var _this = this;
                /** @type {?} */
                var output;
                /** @type {?} */
                var key;
                /** @type {?} */
                var keyCamelCase;
                /** @type {?} */
                var value;
                if (input instanceof Array) {
                    return input.map(function (value) {
                        if (typeof value === 'object') {
                            value = _this.toCamelCase(value);
                        }
                        return value;
                    });
                }
                else {
                    output = {};
                    for (key in input) {
                        if (input.hasOwnProperty(key)) {
                            keyCamelCase = (key.charAt(0).toLowerCase() + key.slice(1) || key).toString();
                            value = input[key];
                            if (value instanceof Array || (value !== null && value.constructor === Object)) {
                                value = this.toCamelCase(value);
                            }
                            output[keyCamelCase] = value;
                        }
                    }
                }
                return output;
            };
        // TRANSFER STATE
        // TRANSFER STATE
        /**
         * @param {?} url
         * @param {?} model
         * @return {?}
         */
        ApiService.prototype.getStateKey =
            // TRANSFER STATE
            /**
             * @param {?} url
             * @param {?} model
             * @return {?}
             */
            function (url, model) {
                /** @type {?} */
                var flatMap = function (s, x) {
                    if (typeof x === 'number') {
                        s += x.toString();
                    }
                    else if (typeof x === 'string') {
                        s += x.substr(0, 10);
                    }
                    else if (x && typeof x === 'object') {
                        s += '_' + Object.keys(x).map(function (k) { return k + '_' + flatMap('', x[k]); }).join('_');
                    }
                    return s;
                };
                url = flatMap(url, model);
                // console.log('ApiService.getStateKey.url', url);
                /** @type {?} */
                var key = url.replace(/(\W)/gm, '_');
                // this.logger.log('ApiService.getStateKey.key', key);
                return i1.makeStateKey(key);
            };
        /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
        ApiService.prototype.stateGet = /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
            function (first, second) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var params = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                /** @type {?} */
                var stateKey = this.getStateKey(url, params);
                if (i1$1.isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
                    /** @type {?} */
                    var cached = this.state.get(stateKey, null);
                    this.state.remove(stateKey);
                    return rxjs.of(cached);
                }
                else {
                    return this.http.get(url, options).pipe(operators.tap(function (x) {
                        if (i1$1.isPlatformServer(_this.platformId)) {
                            _this.state.onSerialize(stateKey, function () { return x; });
                        }
                    }));
                }
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.statePost = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                /** @type {?} */
                var stateKey = this.getStateKey(url, model);
                if (i1$1.isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
                    /** @type {?} */
                    var cached = this.state.get(stateKey, null);
                    this.state.remove(stateKey);
                    return rxjs.of(cached);
                }
                else {
                    return this.http.post(url, model, options).pipe(operators.tap(function (x) {
                        if (i1$1.isPlatformServer(_this.platformId)) {
                            _this.state.onSerialize(stateKey, function () { return x; });
                        }
                    }));
                }
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i0.INJECTOR)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslateService = /** @class */ (function (_super) {
        __extends(TranslateService, _super);
        function TranslateService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(TranslateService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/translate';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
            };
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.setDefaultLang = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
            };
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.addLangs = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
            };
        /**
         * @return {?}
         */
        TranslateService.prototype.getBrowserLang = /**
         * @return {?}
         */
            function () {
                return 'it';
            };
        TranslateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TranslateService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i0.INJECTOR)); }, token: TranslateService, providedIn: "root" });
        return TranslateService;
    }(ApiService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var RouteService = /** @class */ (function () {
        function RouteService(platformId, configService, injector, translateService, location, route, router, segment, componentFactoryResolver) {
            this.platformId = platformId;
            this.configService = configService;
            this.injector = injector;
            this.translateService = translateService;
            this.location = location;
            this.route = route;
            this.router = router;
            this.segment = segment;
            this.componentFactoryResolver = componentFactoryResolver;
            this._language = new rxjs.BehaviorSubject({});
            this.language = this._language.asObservable();
            this._languages = new rxjs.BehaviorSubject([]);
            this.languages = this._languages.asObservable();
            this.pageParams$ = new rxjs.BehaviorSubject({});
            this.urlStrategy = this.configService.options.urlStrategy;
            this._languages.next(this.configService.options.languages);
            this.currentMarket = this.configService.options.defaultMarket;
            this.setLanguages();
            if (this.configService.options.useLang || this.configService.options.useMarket) {
                this.subscribeToRouter();
            }
        }
        Object.defineProperty(RouteService.prototype, "lang", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this._lang;
            },
            set: /**
             * @private
             * @param {?} lang
             * @return {?}
             */ function (lang) {
                if (lang !== this._lang) {
                    this._lang = lang;
                    /** @type {?} */
                    var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.set lang', lang, this.configService.options.useLang);
                    if (this.configService.options.useLang) {
                        /** @type {?} */
                        var _lang = this._lang;
                        /** @type {?} */
                        var path = this.location.path();
                        if (path.indexOf("/" + _lang) === 0) {
                            path = path.replace("/" + _lang, "/" + lang);
                        }
                        else if (path.indexOf("/" + lang) !== 0) {
                            path = "/" + lang + path;
                        }
                        this.path = path;
                        // const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteService.prototype, "currentLang", {
            get: /**
             * @return {?}
             */ function () {
                return this._lang;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        RouteService.prototype.getPageParams = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('RouteService.getPageParams', this.router.url);
                return this.route.queryParams.pipe(operators.distinctUntilChanged(), operators.switchMap(function (params) {
                    // console.log(params);
                    /** @type {?} */
                    var parsed = _this.parseParams(params);
                    _this.pageParams$.next(parsed);
                    return rxjs.of(parsed);
                }));
            };
        /**
         * @param {?} params
         * @return {?}
         */
        RouteService.prototype.parseParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                /** @type {?} */
                var parsed = {};
                Object.keys(params).forEach(function (k) { return parsed[k] = _this.parse(params[k]); });
                /*
                for (const key in params) {
                    if (typeof (params[key]) === 'string') {
                        parsed[key] = this.parse(params[key]);
                    } else {
                        parsed[key] = params[key];
                    }
                }
                */
                return parsed;
            };
        /**
         * @param {?} params
         * @return {?}
         */
        RouteService.prototype.serializeParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                /** @type {?} */
                var serialized = {};
                Object.keys(params).forEach(function (k) { return serialized[k] = _this.serialize(params[k]); });
                return serialized;
            };
        /**
         * @param {?} base64
         * @return {?}
         */
        RouteService.prototype.parse = /**
         * @param {?} base64
         * @return {?}
         */
            function (base64) {
                try {
                    if (i1$1.isPlatformBrowser(this.platformId)) {
                        return JSON.parse(window.atob(base64));
                    }
                    else {
                        return JSON.parse(Buffer.from(base64, 'base64').toString('ascii'));
                    }
                }
                catch (_a) {
                    return null;
                }
            };
        /**
         * @param {?} object
         * @return {?}
         */
        RouteService.prototype.serialize = /**
         * @param {?} object
         * @return {?}
         */
            function (object) {
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    return window.btoa(JSON.stringify(object));
                }
                else {
                    return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
                }
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getId = /**
         * @return {?}
         */
            function () {
                return +this.route.snapshot.paramMap.get('id');
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getSlug = /**
         * @return {?}
         */
            function () {
                return this.route.snapshot.paramMap.get('slug');
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RouteService.prototype.toRoute = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var segments = this.segment.transform(data);
                if (this.configService.options.useMarket) {
                    /** @type {?} */
                    var market = this.currentMarket;
                    /** @type {?} */
                    var marketIndex = this.urlStrategy.split('/').indexOf(':market');
                    segments.splice(marketIndex, 0, market);
                }
                if (this.configService.options.useLang) {
                    /** @type {?} */
                    var lang = this._lang;
                    /** @type {?} */
                    var langIndex = this.urlStrategy.split('/').indexOf(':lang');
                    segments.splice(langIndex, 0, lang);
                }
                // console.log('RouteService.toRoute', segments);
                return segments;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RouteService.prototype.toSlug = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var segments = this.segment.transform(data);
                /** @type {?} */
                var paths = segments.filter(function (x) {
                    return typeof x === 'string';
                });
                /** @type {?} */
                var datas = segments.filter(function (x) {
                    return typeof x !== 'string';
                });
                if (this.configService.options.useMarket) {
                    /** @type {?} */
                    var marketIndex = this.urlStrategy.split('/').indexOf(':market');
                    if (paths.length > marketIndex) {
                        paths[marketIndex] = '*';
                    }
                }
                if (this.configService.options.useLang) {
                    /** @type {?} */
                    var langIndex = this.urlStrategy.split('/').indexOf(':lang');
                    if (paths.length > langIndex) {
                        paths[langIndex] = '*';
                    }
                }
                paths = paths.join('/').replace(/\/\*/gi, '').split('/');
                // console.log('RouteService.toSlug', data, paths);
                return paths.concat(datas);
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RouteService.prototype.toParams = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return {
                    data: window.btoa(JSON.stringify(data))
                };
            };
        /**
         * @param {?} params
         * @return {?}
         */
        RouteService.prototype.toData = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                if (params && params.data) {
                    return JSON.parse(window.atob(params.data));
                }
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getParams = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.router.events.pipe(operators.filter(function (event) { return event instanceof i4.ActivationEnd; }), operators.map(function () { return _this.route; }), operators.distinctUntilChanged(), operators.map(function (route) { return route.firstChild; }), operators.switchMap(function (route) { return route.params; }), 
                /*
                tap((params) => {
                    // console.log('getParams', params);
                }),
                */
                operators.concatMap(function (x) {
                    return rxjs.of(_this.toData(x));
                }));
            };
        /**
         * @return {?}
         */
        RouteService.prototype._unused_getPageComponentFactory = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.router.events.pipe(operators.filter(function (event) { return event instanceof i4.ActivationEnd; }), 
                /*
                tap((event) => {
                    // console.log('ActivationEnd', event);
                }),
                */
                operators.map(function () { return _this.route; }), operators.distinctUntilChanged(), operators.map(function (route) { return route.firstChild; }), operators.tap(function (route) {
                    _this.params = route.params.pipe(operators.concatMap(function (x) {
                        return rxjs.of(_this.toData(x));
                    }));
                    _this.queryParams = route.queryParams.pipe(
                    // tap(x => console.log('queryParams', x)),
                    operators.concatMap(function (x) {
                        return rxjs.of(_this.toData(x));
                    }));
                    // console.log('params', this.route.params);
                }), operators.switchMap(function (route) { return route.data; }), operators.map(function (data) {
                    if (data.pageResolver) {
                        _this.page = data.pageResolver.page;
                        /** @type {?} */
                        var factory = _this.componentFactoryResolver.resolveComponentFactory(data.pageResolver.component);
                        return factory;
                    }
                    else {
                        return null;
                    }
                }));
            };
        /**
         * @param {?} lang
         * @param {?=} silent
         * @return {?}
         */
        RouteService.prototype.setLanguage = /**
         * @param {?} lang
         * @param {?=} silent
         * @return {?}
         */
            function (lang, silent) {
                this.lang = lang;
                if (this.configService.options.useLang && this.path) {
                    // console.log('RouteService.setLanguage', this.path, this._lang, lang, silent);
                    if (silent) {
                        this.location.replaceState(this.path);
                    }
                    else {
                        this.router.navigate([this.path]);
                    }
                }
            };
        // PRIVATE METHODS
        // PRIVATE METHODS
        /**
         * @private
         * @return {?}
         */
        RouteService.prototype.setLanguages =
            // PRIVATE METHODS
            /**
             * @private
             * @return {?}
             */
            function () {
                this.translateService.addLangs(this.configService.options.languages ? this.configService.options.languages.map(function (x) { return x.lang; }) : []);
                this.translateService.setDefaultLang(this.configService.options.defaultLanguage);
                // this.setLanguage(this.detectLanguage(), true);
                this.setLanguage(this.configService.options.defaultLanguage, true);
                /*
                this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
                    // console.log('RouteService.onLangChange', e);
                });
                */
            };
        /**
         * @private
         * @return {?}
         */
        RouteService.prototype.subscribeToRouter = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.router.events.pipe(operators.filter(function (event) { return event instanceof i4.NavigationStart; })).subscribe(function (event) {
                    /** @type {?} */
                    var location = _this.location.normalize(event.url).split('/');
                    if (_this.configService.options.useMarket) {
                        /** @type {?} */
                        var marketIndex = _this.urlStrategy.split('/').indexOf(':market');
                        /** @type {?} */
                        var market = location[marketIndex];
                        if (market !== _this.currentMarket) {
                            _this.currentMarket = market;
                            // console.log('RouteService.setMarket', market, event.url);
                        }
                    }
                    if (_this.configService.options.useLang) {
                        /** @type {?} */
                        var langIndex = _this.urlStrategy.split('/').indexOf(':lang');
                        /** @type {?} */
                        var lang_1 = location[langIndex];
                        if (lang_1 !== _this._lang) {
                            /** @type {?} */
                            var language = _this._languages.getValue().find(function (x) { return x.lang === lang_1; });
                            _this._language.next(language);
                            _this.translateService.use(lang_1);
                            // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                        }
                    }
                });
            };
        /**
         * @private
         * @return {?}
         */
        RouteService.prototype.detectLanguage = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var acceptLanguage = null;
                if (i1$1.isPlatformServer(this.platformId)) {
                    /*
                                // server side express engine
                                app.engine('html',  (_, options, callback) => {
                                    let engine = ngExpressEngine({
                                        bootstrap: ServerAppModule,
                                        providers: [ { provide: 'request', useFactory: () => options.req } ]
                                    });
                                    engine(_, options, callback)
                                })
                                */
                    /** @type {?} */
                    var request = this.injector.get('request');
                    if (request) {
                        acceptLanguage = request.headers['accept-language'];
                        /** @type {?} */
                        var languages = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
                        if (languages.length > 0) {
                            acceptLanguage = languages[0].split('-')[0];
                        }
                        else {
                            acceptLanguage = null;
                        }
                        // console.log('request', request, 'acceptLanguage', acceptLanguage);
                    }
                    // console.log('RouteService.isPlatformServer', this.platformId, acceptLanguage);
                }
                else if (i1$1.isPlatformBrowser(this.platformId)) {
                    acceptLanguage = this.translateService.getBrowserLang();
                    // console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
                }
                /** @type {?} */
                var detectedLanguage = this.configService.options.defaultLanguage;
                /** @type {?} */
                var regexp = new RegExp("(" + (this.configService.options.languages ? this.configService.options.languages.map(function (x) { return x.lang; }).join('|') : '') + ")", 'gi');
                /** @type {?} */
                var match = (acceptLanguage || '').match(regexp);
                detectedLanguage = match ? match[0] : detectedLanguage;
                // console.log('RouteService.detectLanguage', detectedLanguage);
                return detectedLanguage;
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getTime = /**
         * @return {?}
         */
            function () {
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    return (performance || Date).now();
                }
                else {
                    /** @type {?} */
                    var time = process.hrtime();
                    return (time[0] * 1e9 + time[1]) / 1e6;
                }
            };
        RouteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        RouteService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: ConfigService },
                { type: i0.Injector },
                { type: TranslateService },
                { type: i1$1.Location },
                { type: i4.ActivatedRoute },
                { type: i4.Router },
                { type: SegmentPipe },
                { type: i0.ComponentFactoryResolver }
            ];
        };
        /** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(ConfigService), i0.inject(i0.INJECTOR), i0.inject(TranslateService), i0.inject(i1$1.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(SegmentPipe), i0.inject(i0.ComponentFactoryResolver)); }, token: RouteService, providedIn: "root" });
        return RouteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageComponent = /** @class */ (function (_super) {
        __extends(PageComponent, _super);
        function PageComponent(injector) {
            var _this = _super.call(this) || this;
            _this.injector = injector;
            _this.scrollToTop();
            return _this;
        }
        Object.defineProperty(PageComponent.prototype, "platformId", {
            get: /**
             * @return {?}
             */ function () {
                return ( /** @type {?} */(this.injector.get(i0.PLATFORM_ID)));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageComponent.prototype, "routeService", {
            get: /**
             * @return {?}
             */ function () {
                return this.injector.get(RouteService);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageComponent.prototype, "router", {
            get: /**
             * @return {?}
             */ function () {
                return this.injector.get(i4.Router);
            },
            enumerable: true,
            configurable: true
        });
        // !!! Scroll to top on page change
        // !!! Scroll to top on page change
        /**
         * @private
         * @return {?}
         */
        PageComponent.prototype.scrollToTop =
            // !!! Scroll to top on page change
            /**
             * @private
             * @return {?}
             */
            function () {
                // !!! PLATFORM_ID dependancy manually activated
                // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    // !!! Router dependancy manually activated
                    // const router = RouteService.injector.get(Router);
                    this.router.events.subscribe(function (e) {
                        if (!(e instanceof i4.NavigationEnd)) {
                            return;
                        }
                        window.scrollTo(0, 0);
                    });
                }
            };
        /**
         * @return {?}
         */
        PageComponent.prototype.getId = /**
         * @return {?}
         */
            function () {
                return this.routeService.getId() || (this.page ? this.page.id : 0);
            };
        /**
         * @return {?}
         */
        PageComponent.prototype.getSlug = /**
         * @return {?}
         */
            function () {
                return this.routeService.getSlug() || (this.page ? this.page.slug : '');
            };
        PageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-page',
                        template: "<h1>I'm a default view!</h1>"
                    }] }
        ];
        /** @nocollapse */
        PageComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        PageComponent.propDecorators = {
            page: [{ type: i0.Input }],
            params: [{ type: i0.Input }],
            queryParams: [{ type: i0.Input }]
        };
        return PageComponent;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageNotFoundComponent = /** @class */ (function (_super) {
        __extends(PageNotFoundComponent, _super);
        function PageNotFoundComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.url = _this.router.url;
            return _this;
        }
        PageNotFoundComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'page-not-found-component',
                        template: "<div class=\"container\">\n\t<h3>il file <span>{{url}}</span> non \u00E8 stato trovato</h3>\n</div>\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PageNotFoundComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return PageNotFoundComponent;
    }(PageComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpStatusCodeService = /** @class */ (function () {
        function HttpStatusCodeService() {
            this.statusCode = 200;
            this.redirectUrl = null;
        }
        /**
         * @param {?} statusCode
         * @param {?=} redirectUrl
         * @return {?}
         */
        HttpStatusCodeService.prototype.setStatusCode = /**
         * @param {?} statusCode
         * @param {?=} redirectUrl
         * @return {?}
         */
            function (statusCode, redirectUrl) {
                if (redirectUrl === void 0) {
                    redirectUrl = null;
                }
                this.statusCode = statusCode;
                this.redirectUrl = redirectUrl;
            };
        /**
         * @return {?}
         */
        HttpStatusCodeService.prototype.getStatusCode = /**
         * @return {?}
         */
            function () {
                return (this.statusCode === 309 ? 301 : this.statusCode);
            };
        /**
         * @return {?}
         */
        HttpStatusCodeService.prototype.getRedirectUrl = /**
         * @return {?}
         */
            function () {
                return this.redirectUrl;
            };
        HttpStatusCodeService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        HttpStatusCodeService.ctorParameters = function () { return []; };
        return HttpStatusCodeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var IdentityService = /** @class */ (function (_super) {
        __extends(IdentityService, _super);
        function IdentityService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(IdentityService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/identity';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        IdentityService.prototype.getList = /**
         * @return {?}
         */
            function () {
                return this.get();
            };
        /**
         * @template Data
         * @param {?} id
         * @return {?}
         */
        IdentityService.prototype.getDetailByIdNo404 = /**
         * @template Data
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.get({ id: id }).pipe(operators.map(function (identities) { return identities[0]; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        IdentityService.prototype.getDetailById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.get({ id: id });
            };
        /**
         * @param {?} identity
         * @return {?}
         */
        IdentityService.prototype.add = /**
         * @param {?} identity
         * @return {?}
         */
            function (identity) {
                return this.post(identity);
            };
        /**
         * @param {?} identity
         * @return {?}
         */
        IdentityService.prototype.update = /**
         * @param {?} identity
         * @return {?}
         */
            function (identity) {
                return this.put(identity);
            };
        IdentityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IdentityService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ IdentityService.ngInjectableDef = i0.defineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.inject(i0.INJECTOR)); }, token: IdentityService, providedIn: "root" });
        return IdentityService;
    }(ApiService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var EntityService = /** @class */ (function (_super) {
        __extends(EntityService, _super);
        function EntityService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(EntityService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/entity';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @return {?}
         */
        EntityService.prototype.getDetailByName = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!name.trim()) {
                    return rxjs.of([]);
                }
                return this.get({ name: name });
            };
        EntityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i0.INJECTOR)); }, token: EntityService, providedIn: "root" });
        return EntityService;
    }(IdentityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ImageType = {
        Default: 1,
        Gallery: 2,
        Share: 3,
    };
    ImageType[ImageType.Default] = 'Default';
    ImageType[ImageType.Gallery] = 'Gallery';
    ImageType[ImageType.Share] = 'Share';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinkService = /** @class */ (function () {
        function LinkService(doc) {
            this.doc = doc;
        }
        /**
         * @param {?} definition
         * @return {?}
         */
        LinkService.prototype.addTag = /**
         * @param {?} definition
         * @return {?}
         */
            function (definition) {
                /** @type {?} */
                var element = this.doc.createElement("link");
                this.updateElementDefinition(element, definition);
                this.doc.head.appendChild(element);
            };
        /**
         * @param {?} selector
         * @return {?}
         */
        LinkService.prototype.getTag = /**
         * @param {?} selector
         * @return {?}
         */
            function (selector) {
                /** @type {?} */
                var element = this.doc.querySelector("link" + selector);
                return element;
            };
        /**
         * @param {?} selector
         * @param {?} definition
         * @return {?}
         */
        LinkService.prototype.updateTag = /**
         * @param {?} selector
         * @param {?} definition
         * @return {?}
         */
            function (selector, definition) {
                /** @type {?} */
                var element = this.doc.querySelector("link" + selector);
                this.updateElementDefinition(element, definition);
            };
        /**
         * @param {?} selector
         * @return {?}
         */
        LinkService.prototype.removeTag = /**
         * @param {?} selector
         * @return {?}
         */
            function (selector) {
                /** @type {?} */
                var element = this.doc.querySelector("link" + selector);
                element.remove();
            };
        /**
         * @param {?} element
         * @param {?} definition
         * @return {?}
         */
        LinkService.prototype.updateElementDefinition = /**
         * @param {?} element
         * @param {?} definition
         * @return {?}
         */
            function (element, definition) {
                this.updateElementAttribute(element, 'href', definition.href);
                this.updateElementAttribute(element, 'id', definition.id);
                this.updateElementAttribute(element, 'rel', definition.rel);
            };
        /**
         * @param {?} element
         * @param {?} attribute
         * @param {?} value
         * @return {?}
         */
        LinkService.prototype.updateElementAttribute = /**
         * @param {?} element
         * @param {?} attribute
         * @param {?} value
         * @return {?}
         */
            function (element, attribute, value) {
                if (value) {
                    element.setAttribute(attribute, value);
                }
                else {
                    element.removeAttribute(attribute);
                }
            };
        LinkService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        LinkService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1$1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ LinkService.ngInjectableDef = i0.defineInjectable({ factory: function LinkService_Factory() { return new LinkService(i0.inject(i1$1.DOCUMENT)); }, token: LinkService, providedIn: "root" });
        return LinkService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageMeta = /** @class */ (function () {
        function PageMeta() {
        }
        return PageMeta;
    }());
    var PageIndex = /** @class */ (function () {
        function PageIndex(options) {
            if (options) {
                Object.assign(this, options);
            }
        }
        return PageIndex;
    }());
    var PageRelation = /** @class */ (function () {
        function PageRelation() {
        }
        return PageRelation;
    }());
    var Page = /** @class */ (function () {
        function Page(options) {
            this.meta = {};
            if (options) {
                Object.assign(this, options);
                if (options.related) {
                    /** @type {?} */
                    var related = options.related.map(function (x) {
                        /** @type {?} */
                        var item = new PageIndex(x.page);
                        item.relationType = x.type;
                        return item;
                    });
                    this.related = related;
                }
            }
        }
        /**
         * @param {?} id
         * @return {?}
         */
        Page.prototype.getFeature = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.features.find(function (x) { return x.id === id; }) || null;
            };
        /**
         * @param {?} type
         * @param {?} n
         * @return {?}
         */
        Page.prototype.getFeatures = /**
         * @param {?} type
         * @param {?} n
         * @return {?}
         */
            function (type, n) {
                return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
            };
        /**
         * @param {?} type
         * @return {?}
         */
        Page.prototype.getFeaturesByTypes = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
            };
        /**
         * @param {?} type
         * @return {?}
         */
        Page.prototype.getGroupedFeaturesByTypes = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                var _this = this;
                /** @type {?} */
                var groups = {};
                type.forEach(function (type) {
                    /** @type {?} */
                    var group = groups[type] || { features: [] };
                    if (_this.features) {
                        _this.features.forEach(function (x) {
                            if (Number(x.type) === type) {
                                group.features.push(x);
                            }
                        });
                    }
                    groups[type] = group;
                });
                /*
                if (this.features) {
                    this.features.forEach((x: Feature) => {
                        if (type.indexOf(Number(x.type)) !== -1) {
                            const group = groups[x.type] || { features: [] };
                            group.features.push(x);
                            groups[x.type] = group;
                        }
                    });
                }
                */
                return groups;
            };
        return Page;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageService = /** @class */ (function (_super) {
        __extends(PageService, _super);
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
             */ function () {
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
                return this.stateGet("?slug=/" + slug).pipe(operators.map(function (x) {
                    x = new Page(Array.isArray(x) ? x.find(function (x) { return x.slug === "/" + slug; }) : x);
                    // console.log('PageService.getStatePageBySlug', x);
                    return x;
                }), operators.catchError(function (error) {
                    // console.log('getStatePageBySlug.error', error);
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
                }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        PageService.prototype.getStatePageById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                return this.stateGet("/" + id).pipe(
                // tap(x => console.log('PageService.getPageById', id, x)),
                operators.map(function (x) { return new Page(x); }), operators.catchError(function (error) {
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
                return this.get("/" + id).pipe(
                // tap(x => console.log('PageService.getPageById', id, x)),
                operators.map(function (x) { return new Page(x); }), operators.catchError(function (error) {
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
                return this.get("?slug=/" + slug).pipe(operators.map(function (x) { return new Page(x); }), 
                // tap(x => this.logger.log(`found pages matching "${slug}"`))
                // tap(x => console.log('PageService.getPageBySlug', x, slug))
                operators.catchError(function (error) {
                    // console.log('PageService.getPageBySlug.error', error);
                    _this.statusCodeService.setStatusCode(error.status, error.error ? error.error.redirectUrl : null);
                    return rxjs.of(null);
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
                return image || ( /** @type {?} */({
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PageService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i1.Title },
                { type: i1.Meta },
                { type: LinkService },
                { type: HttpStatusCodeService }
            ];
        };
        /** @nocollapse */ PageService.ngInjectableDef = i0.defineInjectable({ factory: function PageService_Factory() { return new PageService(i0.inject(i0.INJECTOR), i0.inject(i1.Title), i0.inject(i1.Meta), i0.inject(LinkService), i0.inject(HttpStatusCodeService)); }, token: PageService, providedIn: "root" });
        return PageService;
    }(EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageOutletComponent = /** @class */ (function (_super) {
        __extends(PageOutletComponent, _super);
        function PageOutletComponent(viewContainerRef, router, route, componentFactoryResolver, routeService, pageService) {
            var _this = _super.call(this) || this;
            _this.viewContainerRef = viewContainerRef;
            _this.router = router;
            _this.route = route;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.routeService = routeService;
            _this.pageService = pageService;
            // !!! keep -> Avoid PageOutlet Route Caching for different routes
            _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            };
            _this.setSnapshot(_this.route.snapshot);
            return _this;
        }
        /**
         * @param {?} snapshot
         * @return {?}
         */
        PageOutletComponent.prototype.setSnapshot = /**
         * @param {?} snapshot
         * @return {?}
         */
            function (snapshot) {
                this.routeService.params = this.routeService.toData(snapshot.params);
                this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
                /** @type {?} */
                var data = snapshot.data;
                /** @type {?} */
                var params = this.routeService.params;
                /** @type {?} */
                var queryParams = this.routeService.queryParams;
                /** @type {?} */
                var component = PageNotFoundComponent;
                if (data.pageResolver) {
                    component = data.pageResolver.component;
                    this.routeService.page = data.pageResolver.page;
                    /** @type {?} */
                    var factory = this.componentFactoryResolver.resolveComponentFactory(component);
                    this.factory = factory;
                    this.viewContainerRef.clear();
                    /** @type {?} */
                    var componentRef = this.viewContainerRef.createComponent(this.factory);
                    /** @type {?} */
                    var instance = componentRef.instance;
                    instance.page = data.pageResolver.page;
                    instance.params = params;
                    instance.queryParams = queryParams;
                    if (typeof instance['PageInit'] === 'function') {
                        instance['PageInit']();
                    }
                    if (data.pageResolver.page) {
                        /** @type {?} */
                        var config = this.router.config.slice();
                        /** @type {?} */
                        var slug = data.pageResolver.page.slug;
                        if (slug) {
                            config.push({
                                path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: data.pageResolver.component,
                            });
                            this.router.resetConfig(config);
                        }
                        this.pageService.addOrUpdateMetaData(this.routeService.page);
                    }
                } /* else {
                    // console.log('PageOutletComponent.setSnapshot 404', data);
                }*/
            };
        PageOutletComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'page-outlet',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        PageOutletComponent.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef, decorators: [{ type: i0.Inject, args: [i0.ViewContainerRef,] }] },
                { type: i4.Router },
                { type: i4.ActivatedRoute },
                { type: i0.ComponentFactoryResolver },
                { type: RouteService },
                { type: PageService }
            ];
        };
        return PageOutletComponent;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageResolver = /** @class */ (function () {
        function PageResolver(configService, page) {
            this.configService = configService;
            this.page = page;
            this.component = PageComponent;
            if (page && this.configService.options.pages) {
                this.component = this.configService.options.pages[page.component] || this.configService.options.defaultPage;
            }
            else {
                this.component = this.configService.options.notFoundPage || PageNotFoundComponent;
            }
        }
        return PageResolver;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageResolverService = /** @class */ (function () {
        function PageResolverService(configService, pageService, routeService) {
            this.configService = configService;
            this.pageService = pageService;
            this.routeService = routeService;
            this.events$ = new rxjs.BehaviorSubject(null);
        }
        /**
         * @param {?} page
         * @return {?}
         */
        PageResolverService.prototype.pageToPageResolver = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                /** @type {?} */
                var pageResolver = new PageResolver(this.configService, page);
                this.events$.next(pageResolver);
                return pageResolver;
            };
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        PageResolverService.prototype.resolve = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                if (route.params && route.params.id) {
                    return this.getPageById(route.params.id);
                }
                else {
                    /** @type {?} */
                    var paths = route.url.filter(function (x) {
                        return x.path;
                    }).map(function (x) {
                        return x.path;
                    });
                    /** @type {?} */
                    var slug = this.routeService.toSlug(paths).join('/');
                    return this.getPageBySlug(slug);
                }
            };
        /**
         * @param {?} id
         * @return {?}
         */
        PageResolverService.prototype.getPageById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                var _this = this;
                // console.log('PageResolverService.getPageById', id);
                return this.pageService.getPageById(id).pipe(operators.map(function (page) { return _this.pageToPageResolver(page); }));
            };
        /**
         * @param {?} slug
         * @return {?}
         */
        PageResolverService.prototype.getPageBySlug = /**
         * @param {?} slug
         * @return {?}
         */
            function (slug) {
                var _this = this;
                // console.log('PageResolverService.getPageBySlug', slug);
                return this.pageService.getStatePageBySlug(slug).pipe(operators.map(function (page) { return _this.pageToPageResolver(page); }));
            };
        PageResolverService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PageResolverService.ctorParameters = function () {
            return [
                { type: ConfigService },
                { type: PageService },
                { type: RouteService }
            ];
        };
        /** @nocollapse */ PageResolverService.ngInjectableDef = i0.defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(i0.inject(ConfigService), i0.inject(PageService), i0.inject(RouteService)); }, token: PageResolverService, providedIn: "root" });
        return PageResolverService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageGuard = /** @class */ (function () {
        function PageGuard() {
        }
        /**
         * @private
         * @param {?} route
         * @return {?}
         */
        PageGuard.prototype.match = /**
         * @private
         * @param {?} route
         * @return {?}
         */
            function (route) {
                /** @type {?} */
                var lastPath = route.url.length ? route.url[route.url.length - 1].path : '';
                /** @type {?} */
                var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
                /** @type {?} */
                var match = (lastPath).match(pattern);
                if (match !== null) {
                    return false;
                }
                else {
                    return true;
                }
            };
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        PageGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                return this.match(route);
            };
        /**
         * @param {?} component
         * @param {?} currentRoute
         * @param {?} currentState
         * @param {?=} nextState
         * @return {?}
         */
        PageGuard.prototype.canDeactivate = /**
         * @param {?} component
         * @param {?} currentRoute
         * @param {?} currentState
         * @param {?=} nextState
         * @return {?}
         */
            function (component, currentRoute, currentState, nextState) {
                return this.match(currentRoute);
            };
        PageGuard.decorators = [
            { type: i0.Injectable }
        ];
        return PageGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StaticGuard = /** @class */ (function () {
        function StaticGuard() {
        }
        /**
         * @private
         * @param {?} route
         * @return {?}
         */
        StaticGuard.prototype.match = /**
         * @private
         * @param {?} route
         * @return {?}
         */
            function (route) {
                /** @type {?} */
                var lastPath = route.url[route.url.length - 1].path;
                // console.log('StaticGuard.CanActivate', e, lastPath);
                /** @type {?} */
                var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
                /** @type {?} */
                var match = (lastPath).match(pattern);
                if (match !== null) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        StaticGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                return this.match(route);
            };
        /**
         * @param {?} component
         * @param {?} currentRoute
         * @param {?} currentState
         * @param {?=} nextState
         * @return {?}
         */
        StaticGuard.prototype.canDeactivate = /**
         * @param {?} component
         * @param {?} currentRoute
         * @param {?} currentState
         * @param {?=} nextState
         * @return {?}
         */
            function (component, currentRoute, currentState, nextState) {
                return this.match(currentRoute);
            };
        StaticGuard.decorators = [
            { type: i0.Injectable }
        ];
        return StaticGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
        { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
        { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
    ];
    var CoreRouting = /** @class */ (function () {
        function CoreRouting() {
        }
        CoreRouting.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i4.RouterModule.forChild(routes),
                        ],
                        exports: [
                            i4.RouterModule,
                        ],
                    },] }
        ];
        return CoreRouting;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlComponent = /** @class */ (function () {
        function ControlComponent(renderer) {
            this.renderer = renderer;
            this.reveal = { checked: false };
            this.onChange = function (value) { };
            this.onTouched = function () { };
        }
        Object.defineProperty(ControlComponent.prototype, "controlRef", {
            get: /**
             * @return {?}
             */ function () {
                // console.log('controlRef', this.control.key, this.form.controls);
                return this.form.controls[this.control.key];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlComponent.prototype, "isValid", {
            get: /**
             * @return {?}
             */ function () { return this.controlRef.valid; },
            enumerable: true,
            configurable: true
        });
        // ControlValueAccessor
        // ControlValueAccessor
        /**
         * @return {?}
         */
        ControlComponent.prototype.getFormattedValue =
            // ControlValueAccessor
            /**
             * @return {?}
             */
            function () {
                // console.log('ControlComponent.getFormattedValue', this.controlRef.value);
                return this.controlRef.value;
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        ControlComponent.prototype.onInput = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.element = $event.target;
                this.onChange(this.element.value);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        ControlComponent.prototype.onFocus = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.blurred = false;
                this.element = $event.target;
                // this.element.value = this.controlRef.value;
                this.renderer.setProperty(this.element, 'value', this.controlRef.value);
                // console.log('ControlComponent.onFocus', this.controlRef);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        ControlComponent.prototype.onBlur = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.blurred = true;
                this.element = $event.target;
                // this.element.value = this.controlRef.value;
                this.renderer.setProperty(this.element, 'value', this.controlRef.value);
                // console.log('ControlComponent.onBlur', this.controlRef);
                /*
                if (this.innervalue) {
                    this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
                }
                */
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        ControlComponent.prototype.formatValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // console.log('ControlComponent.formatValue', value);
                this.renderer.setProperty(this.element, 'value', value);
                // console.log('ControlEditableComponent.writeValue', value);
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        ControlComponent.prototype.parseValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // console.log('ControlComponent.parseValue', value);
                /** @type {?} */
                var parsed = this.innervalue;
                this.onChange(parsed);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ControlComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.formatValue(value);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ControlComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
                // console.log('ControlEditableComponent.registerOnChange');
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ControlComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
                // console.log('ControlEditableComponent.registerOnTouched');
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ControlComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                // const node = this.textarea.nativeElement;
                /*
                if (isDisabled) {
                    this.renderer.addClass(this.element, 'disabled');
                } else {
                    this.renderer.removeClass(this.element, 'disabled');
                }
                // console.log('ControlEditableComponent.setDisabledState', isDisabled);
                */
            };
        ControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-control',
                        template: "<ng-container [ngSwitch]=\"control.schema\">\r\n\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t<b>Checkbox</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t<b>Email</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t<b>Number</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t<b>Password</b><br>\r\n\t</ng-container>\r\n</ng-container>\r\n<div class=\"form-group\" [formGroup]=\"form\">\r\n\t<div [ngSwitch]=\"control.schema\">\r\n\t\t<div *ngSwitchCase=\"'checkbox'\" class=\"form-group\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | translate\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'radio'\" class=\"form-group\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert-danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | translate : { value: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | translate : { value: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | translate : { value: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | translate : { value: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | translate }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | translate }}</div>\r\n\t</div>\r\n</div>\r\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return ControlComponent; }),
                                multi: true,
                            }],
                        styles: ["label{color:#55555a;font-weight:700;font-size:12px}.form-control{border-radius:0;background:#fff;color:#55555a;border:1px solid rgba(85,85,90,.1);font-size:16px;border-left:2px solid rgba(85,85,90,.2);display:block;width:100%;padding:8px;box-sizing:border-box;margin-bottom:10px}.form-control:hover{border-left-color:rgba(85,85,90,.8)}.form-control:active,.form-control:focus{background:rgba(0,0,0,.15);border-left-color:rgba(85,85,90,.8);outline:0;box-shadow:none}textarea.form-control{resize:none;overflow-x:hidden;overflow-y:auto}"]
                    }] }
        ];
        /** @nocollapse */
        ControlComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 }
            ];
        };
        ControlComponent.propDecorators = {
            control: [{ type: i0.Input }],
            form: [{ type: i0.Input }]
        };
        return ControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} otherKey
     * @param {?=} reverse
     * @param {?=} group
     * @return {?}
     */
    function matchValidator(otherKey, reverse, group) {
        if (reverse === void 0) {
            reverse = false;
        }
        return function (control) {
            /** @type {?} */
            var otherControl = group.controls[otherKey];
            /** @type {?} */
            var value = control.value;
            // value not equal
            if (otherControl && value !== otherControl.value && !reverse) {
                return {
                    match: true,
                };
            }
            // value equal and reverse
            if (otherControl && value === otherControl.value && reverse) {
                if (otherControl.errors) {
                    delete otherControl.errors['match'];
                    if (!Object.keys(otherControl.errors).length) {
                        otherControl.setErrors(null);
                    }
                }
            }
            // value not equal and reverse
            if (otherControl && value !== otherControl.value && reverse) {
                otherControl.setErrors({
                    match: true,
                });
            }
            return null;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlService = /** @class */ (function () {
        function ControlService() {
        }
        /**
         * @param {?} control
         * @param {?} group
         * @return {?}
         */
        ControlService.prototype.getValidators = /**
         * @param {?} control
         * @param {?} group
         * @return {?}
         */
            function (control, group) {
                /** @type {?} */
                var validators = [];
                if (control.min) {
                    validators.push(forms.Validators.min(control.min));
                }
                if (control.max) {
                    validators.push(forms.Validators.max(control.max));
                }
                if (control.required) {
                    validators.push(forms.Validators.required);
                }
                if (control.requiredTrue) {
                    validators.push(forms.Validators.requiredTrue);
                }
                if (control.email) {
                    validators.push(forms.Validators.email);
                }
                if (control.minLength) {
                    validators.push(forms.Validators.minLength(control.minLength));
                }
                if (control.maxLength) {
                    validators.push(forms.Validators.maxLength(control.maxLength));
                }
                if (control.pattern) {
                    validators.push(forms.Validators.pattern(control.pattern));
                }
                if (control.match) {
                    validators.push(matchValidator(control.match, control.reverse, group));
                }
                // console.log(control.key, validators);
                return validators;
            };
        /**
         * @param {?} controls
         * @return {?}
         */
        ControlService.prototype.toFormGroup = /**
         * @param {?} controls
         * @return {?}
         */
            function (controls) {
                var _this = this;
                /** @type {?} */
                var options = {};
                controls.forEach(function (x) {
                    // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
                    /** @type {?} */
                    var formControl = new forms.FormControl(x.value);
                    if (x.disabled) {
                        formControl.disable();
                    }
                    options[x.key] = formControl;
                    // x.setControl(formControl); // !!!
                });
                /** @type {?} */
                var group = new forms.FormGroup(options);
                // console.log(group);
                controls.forEach(function (x) {
                    /** @type {?} */
                    var validators = _this.getValidators(x, group);
                    // console.log(validators);
                    group.controls[x.key].setValidators(validators);
                });
                return group;
            };
        ControlService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ControlService.ngInjectableDef = i0.defineInjectable({ factory: function ControlService_Factory() { return new ControlService(); }, token: ControlService, providedIn: "root" });
        return ControlService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEBOUNCE_TIME = 250;
    var ExistsValidator = /** @class */ (function () {
        function ExistsValidator() {
            var _this = this;
            this.values = new rxjs.BehaviorSubject(null);
            this.debounced$ = this.values.pipe(operators.debounceTime(DEBOUNCE_TIME), operators.switchMap(function (value) {
                // console.log('ExistsValidator.debounced$', value);
                return _this.exists$(value);
            }), operators.catchError(function (response) {
                console.log('ExistsValidator.debounced$.catchError', response);
                return rxjs.of(null);
            }), operators.take(1));
        }
        Object.defineProperty(ExistsValidator.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value && value.trim() !== '') {
                    this.values.next(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        ExistsValidator.prototype.exists$ = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (typeof this.exists === 'function') {
                    // console.log('ExistsValidator.exists$', value);
                    return this.exists(value).pipe(operators.switchMap(function (exists) {
                        if (exists) {
                            return rxjs.of({
                                exists: true,
                            });
                        }
                        else {
                            return rxjs.of(null);
                        }
                    }));
                }
                else {
                    return rxjs.of(null);
                }
            };
        /**
         * @param {?} control
         * @return {?}
         */
        ExistsValidator.prototype.validate = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
                this.value = control.value;
                return this.debounced$;
            };
        ExistsValidator.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                        providers: [
                            { provide: forms.NG_ASYNC_VALIDATORS, useExisting: i0.forwardRef(function () { return ExistsValidator; }), multi: true },
                        ]
                    },] }
        ];
        ExistsValidator.propDecorators = {
            exists: [{ type: i0.Input }]
        };
        return ExistsValidator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ControlBaseOptions = /** @class */ (function () {
        function ControlBaseOptions() {
        }
        return ControlBaseOptions;
    }());
    /**
     * @template T
     */
    var ControlBase = /** @class */ (function () {
        function ControlBase(options) {
            if (options === void 0) {
                options = {};
            }
            this._originalValue = options.value;
            this.value = options.value;
            this.key = options.key;
            //
            /** @type {?} */
            var name = (options.key || 'Control') + " " + ++ControlBase.uid;
            this.label = options.label || name;
            this.placeholder = options.placeholder || name;
            // order
            this.order = options.order === undefined ? 1 : options.order;
            this.schema = options.schema || 'text';
            this.type = options.type || this.schema;
            // validators
            this.min = options.min || null;
            this.max = options.max || null;
            this.required = !!options.required;
            this.requiredTrue = !!options.requiredTrue;
            this.email = !!options.email;
            this.minLength = options.minLength || null;
            this.maxLength = options.maxLength || null;
            this.pattern = options.pattern || null;
            this.match = options.match || null;
            // options
            this.reverse = !!options.reverse;
            this.options = options.options || [];
            // state
            this.disabled = !!options.disabled;
            // formatters
            this.step = options.step || null;
            this.format = options.format || null;
        }
        // export class ControlBase<T> implements ControlValueAccessor {
        ControlBase.uid = 0;
        return ControlBase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlCheckbox = /** @class */ (function (_super) {
        __extends(ControlCheckbox, _super);
        function ControlCheckbox(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'checkbox';
            _this.type = options.type || _this.type;
            return _this;
        }
        return ControlCheckbox;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlEmail = /** @class */ (function (_super) {
        __extends(ControlEmail, _super);
        function ControlEmail(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'email';
            _this.type = options.type || _this.type;
            _this.email = true;
            _this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
            return _this;
        }
        return ControlEmail;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlMarkdown = /** @class */ (function (_super) {
        __extends(ControlMarkdown, _super);
        function ControlMarkdown(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'markdown';
            _this.type = options.type || _this.type;
            return _this;
        }
        return ControlMarkdown;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlNumber = /** @class */ (function (_super) {
        __extends(ControlNumber, _super);
        function ControlNumber(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'number';
            _this.type = options.type || _this.type;
            return _this;
        }
        return ControlNumber;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlPassword = /** @class */ (function (_super) {
        __extends(ControlPassword, _super);
        function ControlPassword(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'password';
            _this.type = options.type || _this.type;
            return _this;
        }
        return ControlPassword;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlRadio = /** @class */ (function (_super) {
        __extends(ControlRadio, _super);
        function ControlRadio(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'radio';
            _this.type = options.type || _this.type;
            return _this;
        }
        return ControlRadio;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlSelect = /** @class */ (function (_super) {
        __extends(ControlSelect, _super);
        function ControlSelect(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'select';
            _this.options = [];
            _this.options = options.options || [];
            return _this;
        }
        return ControlSelect;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ControlText = /** @class */ (function (_super) {
        __extends(ControlText, _super);
        function ControlText(options) {
            if (options === void 0) {
                options = {};
            }
            var _this = _super.call(this, options) || this;
            _this.schema = 'text';
            _this.type = options.type || _this.type;
            return _this;
        }
        return ControlText;
    }(ControlBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormService = /** @class */ (function () {
        function FormService(controlService) {
            this.controlService = controlService;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        FormService.prototype.getControlsFromOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                /** @type {?} */
                var controls = options.map(function (o) {
                    switch (o.schema) {
                        case 'checkbox':
                            return new ControlCheckbox(o);
                        case 'email':
                            return new ControlEmail(o);
                        case 'number':
                            return new ControlNumber(o);
                        case 'password':
                            return new ControlPassword(o);
                        case 'radio':
                            return new ControlRadio(o);
                        case 'select':
                            return new ControlSelect(o);
                        case 'markdown':
                            return new ControlMarkdown(o);
                        case 'text':
                            return new ControlText(o);
                        default:
                            return new ControlText(o);
                    }
                });
                controls.sort(function (a, b) { return a.order - b.order; });
                return controls;
            };
        /**
         * @param {?} options
         * @return {?}
         */
        FormService.prototype.getGroupFromOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                /** @type {?} */
                var controls = this.getControlsFromOptions(options);
                /** @type {?} */
                var group = this.controlService.toFormGroup(controls);
                return group;
            };
        /**
         * @param {?} controls
         * @return {?}
         */
        FormService.prototype.getGroupFromControls = /**
         * @param {?} controls
         * @return {?}
         */
            function (controls) {
                /** @type {?} */
                var group = this.controlService.toFormGroup(controls);
                return group;
            };
        FormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () {
            return [
                { type: ControlService }
            ];
        };
        /** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(ControlService)); }, token: FormService, providedIn: "root" });
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatchValidator = /** @class */ (function () {
        function MatchValidator(match, reverse) {
            this.match = match;
            this.reverse = reverse;
        }
        Object.defineProperty(MatchValidator.prototype, "isReverse", {
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (!this.reverse) {
                    return false;
                }
                return this.reverse === 'true' ? true : false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} control
         * @return {?}
         */
        MatchValidator.prototype.validate = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
                // self value
                /** @type {?} */
                var value = control.value;
                // control value
                /** @type {?} */
                var input = control.root.get(this.match);
                // value not equal
                if (input && value !== input.value && !this.isReverse) {
                    return {
                        match: true,
                    };
                }
                // value equal and reverse
                if (input && value === input.value && this.isReverse) {
                    delete input.errors['match'];
                    if (!Object.keys(input.errors).length) {
                        input.setErrors(null);
                    }
                }
                // value not equal and reverse
                if (input && value !== input.value && this.isReverse) {
                    input.setErrors({
                        match: true,
                    });
                }
                return null;
            };
        MatchValidator.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return MatchValidator; }), multi: true }
                        ]
                    },] }
        ];
        /** @nocollapse */
        MatchValidator.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['match',] }] },
                { type: String, decorators: [{ type: i0.Attribute, args: ['reverse',] }] }
            ];
        };
        return MatchValidator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UppercaseDirective = /** @class */ (function () {
        function UppercaseDirective() {
            this.ngModelChange = new i0.EventEmitter();
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        UppercaseDirective.prototype.onInputChange = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.value = $event.target.value.toUpperCase();
                this.ngModelChange.emit(this.value);
            };
        UppercaseDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngModel][uppercase]'
                    },] }
        ];
        UppercaseDirective.propDecorators = {
            ngModelChange: [{ type: i0.Output }],
            onInputChange: [{ type: i0.HostListener, args: ['input', ['$event'],] }]
        };
        return UppercaseDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        /**
         * @param {?} text
         * @param {?} query
         * @return {?}
         */
        HighlightPipe.prototype.transform = /**
         * @param {?} text
         * @param {?} query
         * @return {?}
         */
            function (text, query) {
                if (!query) {
                    return text;
                }
                text = this.encodeHTML(text);
                query = this.encodeHTML(query);
                /** @type {?} */
                var regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
                return text.replace(regExp, function (match) {
                    return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
                });
            };
        /**
         * @param {?} text
         * @return {?}
         */
        HighlightPipe.prototype.escapeRegexChars = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
            };
        /**
         * @param {?} text
         * @return {?}
         */
        HighlightPipe.prototype.safeToString = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return text === undefined || text === null ? '' : text.toString().trim();
            };
        /**
         * @param {?} text
         * @return {?}
         */
        HighlightPipe.prototype.encodeHTML = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return this.safeToString(text)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
            };
        HighlightPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'highlight',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ HighlightPipe.ngInjectableDef = i0.defineInjectable({ factory: function HighlightPipe_Factory() { return new HighlightPipe(); }, token: HighlightPipe, providedIn: "root" });
        return HighlightPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpResponseInterceptor = /** @class */ (function () {
        function HttpResponseInterceptor(injector, statusCodeService) {
            this.injector = injector;
            this.statusCodeService = statusCodeService;
        }
        Object.defineProperty(HttpResponseInterceptor.prototype, "logger", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._logger) {
                    this._logger = this.injector.get(Logger);
                }
                return this._logger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "router", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._router) {
                    this._router = this.injector.get(i4.Router);
                }
                return this._router;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "routeService", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._routeService) {
                    this._routeService = this.injector.get(RouteService);
                }
                return this.routeService;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        HttpResponseInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                // injecting request
                // parsing response
                return next.handle(request).pipe(operators.tap(function (event) {
                    // console.log('HttpResponseInterceptor', event);
                    _this.logger.httpError = null;
                    // this.logger.log(event);
                    /*
                    if (event instanceof HttpResponse) {
                        // console.log('event instanceof HttpResponse');
                        // do stuff with response if you want
                    }
                    */
                }), operators.catchError(function (error) {
                    // console.warn('HttpResponseInterceptor', error);
                    if (error instanceof http.HttpErrorResponse) {
                        // this.statusCodeService.setStatusCode(error.status);
                        switch (error.status) {
                            case 401:
                                // unauthorized
                                break;
                            case 404:
                                // not found
                                break;
                            case 409:
                                break;
                            case 410:
                                break;
                            default:
                                _this.logger.http(error);
                                break;
                        }
                    }
                    return rxjs.throwError(error);
                }));
            };
        HttpResponseInterceptor.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HttpResponseInterceptor.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: HttpStatusCodeService }
            ];
        };
        /** @nocollapse */ HttpResponseInterceptor.ngInjectableDef = i0.defineInjectable({ factory: function HttpResponseInterceptor_Factory() { return new HttpResponseInterceptor(i0.inject(i0.INJECTOR), i0.inject(HttpStatusCodeService)); }, token: HttpResponseInterceptor, providedIn: "root" });
        return HttpResponseInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import JSONFormatter from 'json-formatter-js';
    var JsonFormatterComponent = /** @class */ (function () {
        function JsonFormatterComponent(platformId) {
            this.platformId = platformId;
        }
        /**
         * @return {?}
         */
        JsonFormatterComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    if (!util.isObject(this.json) && !util.isArray(this.json)) {
                        return;
                    }
                    // console.log('JsonFormatterComponent', this.json);
                    if (this.elementRef) {
                        this.input.nativeElement.removeChild(this.elementRef.nativeElement);
                    }
                    /** @type {?} */
                    var JSONFormatter = require('json-formatter-js').default;
                    /** @type {?} */
                    var formatter = new JSONFormatter(this.json);
                    /** @type {?} */
                    var elementRef = formatter.render();
                    this.input.nativeElement.appendChild(elementRef);
                    this.elementRef = new i0.ElementRef(elementRef);
                }
            };
        JsonFormatterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'json-formatter',
                        template: "<div #jsonFormatter></div>",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        JsonFormatterComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        JsonFormatterComponent.propDecorators = {
            input: [{ type: i0.ViewChild, args: ["jsonFormatter",] }],
            json: [{ type: i0.Input }]
        };
        return JsonFormatterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomAsyncPipe = /** @class */ (function () {
        function CustomAsyncPipe(changeDetector) {
            this.changeDetector = changeDetector;
            this.subject = null;
            this.subscription = null;
            this.value = null;
            this.cachedValue = null;
        }
        /**
         * @param {?} subject
         * @return {?}
         */
        CustomAsyncPipe.prototype.transform = /**
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                return this.observableToValue(subject);
            };
        /**
         * @private
         * @param {?} subject
         * @return {?}
         */
        CustomAsyncPipe.prototype.observableToValue = /**
         * @private
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                var _this = this;
                if (subject !== this.subject) {
                    if (this.subject) {
                        this.dispose();
                    }
                    if (subject) {
                        this.subject = subject;
                        this.subscription = this.subject.subscribe(function (value) {
                            // console.log('CustomAsyncPipe.A', value);
                            _this.value = value;
                            _this.changeDetector.markForCheck(); // mark pipe as dirty
                        });
                        this.cachedValue = this.value; // ???
                        return this.value;
                    }
                }
                // console.log('CustomAsyncPipe.B', this.value);
                if (this.cachedValue !== this.value) {
                    this.cachedValue = this.value;
                    return i0.WrappedValue.wrap(this.value); // notify that value has changed
                }
                return this.cachedValue; // return cachedValue
            };
        /**
         * @return {?}
         */
        CustomAsyncPipe.prototype.dispose = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                this.value = null;
                this.cachedValue = null;
                this.subscription = null;
                this.subject = null;
            };
        /**
         * @return {?}
         */
        CustomAsyncPipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.dispose();
            };
        /**
         * @private
         * @param {?} subject
         * @return {?}
         */
        CustomAsyncPipe.prototype._observableToValue = /**
         * @private
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                var _this = this;
                if (!this.subject) {
                    if (subject) {
                        this.subject = subject;
                        this.subscription = this.subject.subscribe(function (value) {
                            _this.value = value;
                            _this.changeDetector.markForCheck(); // value has changed
                        });
                    }
                    this.cachedValue = this.value;
                    return this.value;
                }
                if (subject !== this.subject) {
                    this.dispose();
                    return this.transform(( /** @type {?} */(subject)));
                }
                if (this.value === this.cachedValue) {
                    return this.cachedValue;
                }
                this.cachedValue = this.value;
                return i0.WrappedValue.wrap(this.value); // value has changed
            };
        CustomAsyncPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'customAsync',
                        pure: false
                    },] }
        ];
        /** @nocollapse */
        CustomAsyncPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        return CustomAsyncPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var LabelService = /** @class */ (function (_super) {
        __extends(LabelService, _super);
        function LabelService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this._language = new rxjs.BehaviorSubject({});
            _this.language = _this._language.asObservable();
            _this._languages = new rxjs.BehaviorSubject([]);
            _this.languages = _this._languages.asObservable();
            _this.events = new i0.EventEmitter();
            _this.cache = {};
            // !!! new async pipe
            _this.collectedKeys = {};
            // private cache: { [key: string]: string; } = {};
            _this.labels$ = new rxjs.Subject();
            _this.emitter = new i0.EventEmitter();
            _this._languages.next(_this.config.languages);
            _this._lang = _this.config.defaultLanguage;
            _this.getTranslation(_this.lang).subscribe(function (x) {
                // console.log(x);
            });
            return _this;
        }
        Object.defineProperty(LabelService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/label';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LabelService.prototype, "lang", {
            get: /**
             * @return {?}
             */ function () {
                return this._lang;
            },
            set: /**
             * @param {?} lang
             * @return {?}
             */ function (lang) {
                if (lang !== this._lang) {
                    this._lang = lang;
                    /** @type {?} */
                    var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                    this._language.next(language);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        LabelService.prototype.getTranslation = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
                var _this = this;
                if (!lang || !lang.trim()) {
                    return rxjs.of(null);
                }
                this.lang = lang;
                if (this.cache[lang]) {
                    return rxjs.of(this.cache[lang]);
                }
                else {
                    return this.get({ lang: lang }).pipe(operators.take(1), operators.map(function (x) {
                        if (x[0]) {
                            /** @type {?} */
                            var labels = x[0].labels;
                            _this.cache[lang] = labels;
                            _this.events.emit(labels);
                            return labels;
                        }
                        else {
                            return rxjs.of(null);
                        }
                    }));
                }
            };
        /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        LabelService.prototype.getLabel = /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
            function (key, defaultValue, params) {
                /** @type {?} */
                var value = null;
                /** @type {?} */
                var labels = this.cache[this.lang];
                if (labels) {
                    /** @type {?} */
                    var keys = key.split('.');
                    /** @type {?} */
                    var k = keys.shift();
                    while (keys.length > 0 && labels[k]) {
                        labels = labels[k];
                        k = keys.shift();
                    }
                    value = labels[k] || "{" + k + "}";
                }
                return this.parseLabel(value, key, defaultValue, params);
            };
        /**
         * @private
         * @param {?} value
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        LabelService.prototype.parseLabel = /**
         * @private
         * @param {?} value
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
            function (value, key, defaultValue, params) {
                if (value == null) {
                    value = defaultValue;
                }
                if (value == null) {
                    return this.missingLabel(key);
                }
                else if (params) {
                    return this.parseParams(value, params);
                }
                return value;
            };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        LabelService.prototype.missingLabel = /**
         * @private
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (this.missingHandler) {
                    return typeof this.missingHandler === 'function' ?
                        this.missingHandler(key) :
                        this.missingHandler;
                }
                return key;
            };
        /**
         * @private
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
        LabelService.prototype.parseParams = /**
         * @private
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
            function (value, params) {
                /** @type {?} */
                var TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
                return value.replace(TEMPLATE_REGEXP, function (text, key) {
                    /** @type {?} */
                    var replacer = ( /** @type {?} */(params[key]));
                    return typeof replacer !== 'undefined' ? replacer : text;
                });
            };
        //
        //
        /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        LabelService.prototype.getKey =
            //
            /**
             * @param {?} key
             * @param {?=} defaultValue
             * @param {?=} params
             * @return {?}
             */
            function (key, defaultValue, params) {
                var _this = this;
                if (this.cache.hasOwnProperty(key)) {
                    return rxjs.of(this.cache[key]);
                }
                else {
                    Object.defineProperty(this.collectedKeys, key, {
                        value: { id: key, defaultValue: defaultValue },
                        enumerable: true,
                        writable: false,
                    });
                    this.cache[key] = null;
                }
                return this.labels$.pipe(operators.map(function (items) { return items[key] || null; }), operators.filter(function (label) { return label !== null; }), 
                // tap(label => console.log('getKey', key, label)),
                operators.map(function (label) { return _this.parseLabel(label, key, defaultValue, params); }));
            };
        /**
         * @return {?}
         */
        LabelService.prototype.register = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.emitter.pipe(
                // throttleTime(500),
                operators.tap(function () {
                    _this.collectKeys().pipe(operators.first()).subscribe(function (keys) {
                        // console.log('LabelService.collected', keys);
                    });
                }));
            };
        /**
         * @return {?}
         */
        LabelService.prototype.collect = /**
         * @return {?}
         */
            function () {
                if (Object.keys(this.collectedKeys).length) {
                    this.emitter.emit();
                }
            };
        /**
         * @private
         * @return {?}
         */
        LabelService.prototype.collectKeys = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var keys = Object.keys(this.collectedKeys).map(function (x) { return _this.collectedKeys[x]; });
                this.collectedKeys = {};
                if (keys.length) {
                    // console.log('LabelService.collectKeys', JSON.stringify(keys));
                    return this.statePost("/api/i18n/labels", keys).pipe(operators.map(function (keys) {
                        /** @type {?} */
                        var items = {};
                        keys.forEach(function (x) { return items[x.id] = x.value || x.defaultValue; });
                        return items;
                    }), operators.tap(function (items) {
                        Object.assign(_this.cache, items);
                        _this.labels$.next(_this.cache);
                        // console.log('collectKeys', this.cache);
                    }), operators.catchError(function (error) {
                        console.log('LabelService.collectKeys.error', error);
                        return rxjs.of({});
                    }));
                    /*
                    return this.post(`/api/i18n/labels`, keys).pipe(
                        map((keys: LabelKey[]) => {
                            const items = {};
                            keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                            return items;
                        }),
                        tap((items: { [key: string]: string; }) => {
                            Object.assign(this.cache, items);
                            this.labels$.next(this.cache);
                            // console.log('collectKeys', this.cache);
                        }),
                    );
                    */
                }
                else {
                    return rxjs.of({});
                }
            };
        LabelService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LabelService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ LabelService.ngInjectableDef = i0.defineInjectable({ factory: function LabelService_Factory() { return new LabelService(i0.inject(i0.INJECTOR)); }, token: LabelService, providedIn: "root" });
        return LabelService;
    }(ApiService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelAsyncPipe = /** @class */ (function () {
        function LabelAsyncPipe(changeDetector, labelService) {
            this.changeDetector = changeDetector;
            this.labelService = labelService;
            this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
        }
        /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
        LabelAsyncPipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
            function (key, text, params) {
                return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
            };
        /**
         * @return {?}
         */
        LabelAsyncPipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.asyncPipe.dispose();
            };
        LabelAsyncPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'labelAsync',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LabelAsyncPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: LabelService }
            ];
        };
        /** @nocollapse */ LabelAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelAsyncPipe_Factory() { return new LabelAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(LabelService)); }, token: LabelAsyncPipe, providedIn: "root" });
        return LabelAsyncPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelDirective = /** @class */ (function (_super) {
        __extends(LabelDirective, _super);
        function LabelDirective(element, labelService) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.labelService = labelService;
            return _this;
        }
        /**
         * @return {?}
         */
        LabelDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
                this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (label) {
                    _this.element.nativeElement.innerHTML = label;
                    // console.log('LabelDirective.ngOnInit', label);
                });
                // console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
            };
        LabelDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[label]'
                    },] }
        ];
        /** @nocollapse */
        LabelDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: LabelService }
            ];
        };
        LabelDirective.propDecorators = {
            label: [{ type: i0.Input }],
            labelParams: [{ type: i0.Input }]
        };
        return LabelDirective;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelPipe = /** @class */ (function () {
        function LabelPipe(ref, labelService) {
            var _this = this;
            this.ref = ref;
            this.labelService = labelService;
            this.labelService.events.subscribe(function (x) { return _this.ref.markForCheck(); });
        }
        /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
        LabelPipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
            function (key, text, params) {
                // console.log(key, params);
                // return WrappedValue.wrap(this.val);
                /** @type {?} */
                var label = this.labelService.getLabel(key, text, params);
                // console.log('label', label, this.labelService.cache);
                return label;
            };
        LabelPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'label',
                        pure: false,
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LabelPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: LabelService }
            ];
        };
        /** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(LabelService)); }, token: LabelPipe, providedIn: "root" });
        return LabelPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoggerComponent = /** @class */ (function () {
        function LoggerComponent(logger) {
            this.logger = logger;
        }
        /**
         * @return {?}
         */
        LoggerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoggerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-logger',
                        template: "<div class=\"error-http\" *ngIf=\"logger.httpError\">\n\t<span>error</span>&nbsp;\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\n</div>\n<!--\n<div *ngIf=\"logger.logs.length\">\n\t<ul class=\"list-group \">\n\t\t<li class=\"list-group-item\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\n\t\t</li>\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\n\t\t\t<span>{{log}}</span>\n\t\t</li>\n\t</ul>\n\t<br>\n</div>\n-->\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [".error-http{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"]
                    }] }
        ];
        /** @nocollapse */
        LoggerComponent.ctorParameters = function () {
            return [
                { type: Logger }
            ];
        };
        return LoggerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EventDispatcherService = /** @class */ (function () {
        function EventDispatcherService() {
            this.emitter = new i0.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        EventDispatcherService.prototype.emit = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this.emitter.emit(event);
            };
        /**
         * @return {?}
         */
        EventDispatcherService.prototype.observe = /**
         * @return {?}
         */
            function () {
                return this.emitter.pipe(operators.tap(function (event) { return console.log('EventDispatcherService', event); }));
            };
        EventDispatcherService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventDispatcherService.ctorParameters = function () { return []; };
        /** @nocollapse */ EventDispatcherService.ngInjectableDef = i0.defineInjectable({ factory: function EventDispatcherService_Factory() { return new EventDispatcherService(); }, token: EventDispatcherService, providedIn: "root" });
        return EventDispatcherService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuService = /** @class */ (function (_super) {
        __extends(MenuService, _super);
        function MenuService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(MenuService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/menu';
            },
            enumerable: true,
            configurable: true
        });
        MenuService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MenuService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i0.INJECTOR)); }, token: MenuService, providedIn: "root" });
        return MenuService;
    }(EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // export class OnceEvent extends Event { }
    var OnceService = /** @class */ (function () {
        function OnceService(platformId, zone) {
            this.platformId = platformId;
            this.zone = zone;
            this.uid = 0;
            this.paths = [];
        }
        /**
         * @param {?} url
         * @param {?=} callback
         * @return {?}
         */
        OnceService.prototype.script = /**
         * @param {?} url
         * @param {?=} callback
         * @return {?}
         */
            function (url, callback) {
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    // !!! this.zone.runOutsideAngular(() => {
                    if (this.paths.indexOf(url) === -1) {
                        this.paths.push(url);
                        /** @type {?} */
                        var callbackName_1;
                        if (callback === true) {
                            callbackName_1 = 'OnceCallback' + (++this.uid);
                            url = url.split('{{callback}}').join(callbackName_1);
                        }
                        else {
                            callbackName_1 = ( /** @type {?} */(callback));
                        }
                        /** @type {?} */
                        var callback$ = void 0;
                        /** @type {?} */
                        var element = document.createElement('script');
                        element.type = 'text/javascript';
                        if (callback) {
                            callback$ = rxjs.from(new Promise(function (resolve, reject) {
                                window[callbackName_1] = function (data) {
                                    resolve(data);
                                };
                            }));
                        }
                        else {
                            element.async = true;
                            callback$ = rxjs.fromEvent(element, 'load').pipe(operators.map(function (x) { return ( /** @type {?} */(x)); }));
                        }
                        /** @type {?} */
                        var scripts = document.getElementsByTagName('script');
                        if (scripts.length) {
                            /** @type {?} */
                            var script = scripts[scripts.length - 1];
                            script.parentNode.insertBefore(element, script.nextSibling);
                        }
                        element.src = url;
                        return callback$;
                    }
                    else {
                        return rxjs.of(new Event('loaded!'));
                    }
                    // });
                }
                else {
                    return rxjs.of(null);
                }
            };
        OnceService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OnceService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ OnceService.ngInjectableDef = i0.defineInjectable({ factory: function OnceService_Factory() { return new OnceService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.NgZone)); }, token: OnceService, providedIn: "root" });
        return OnceService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AssetPipe = /** @class */ (function () {
        function AssetPipe(configService, segment) {
            this.configService = configService;
            this.segment = segment;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        AssetPipe.prototype.transform = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
                    return data;
                }
                else {
                    /** @type {?} */
                    var segments = this.segment.transform(data);
                    segments.unshift(this.configService.options.assets);
                    return segments.join('/');
                }
            };
        AssetPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'asset',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AssetPipe.ctorParameters = function () {
            return [
                { type: ConfigService },
                { type: SegmentPipe }
            ];
        };
        /** @nocollapse */ AssetPipe.ngInjectableDef = i0.defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(i0.inject(ConfigService), i0.inject(SegmentPipe)); }, token: AssetPipe, providedIn: "root" });
        return AssetPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImagePipe = /** @class */ (function () {
        function ImagePipe() {
        }
        /**
         * @param {?} images
         * @param {?=} type
         * @param {?=} queryString
         * @return {?}
         */
        ImagePipe.prototype.transform = /**
         * @param {?} images
         * @param {?=} type
         * @param {?=} queryString
         * @return {?}
         */
            function (images, type, queryString) {
                type = type || 'Default';
                queryString = queryString ? "?" + queryString : '';
                /** @type {?} */
                var imageType = ImageType[type] || ImageType.Default;
                /** @type {?} */
                var image = null;
                if (images && images.length) {
                    image = images.find(function (i) { return i.type === imageType; }) || images[0];
                }
                return image ? (image.url + queryString).replace(/ /g, '%20') : null;
            };
        ImagePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'image',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ImagePipe.ngInjectableDef = i0.defineInjectable({ factory: function ImagePipe_Factory() { return new ImagePipe(); }, token: ImagePipe, providedIn: "root" });
        return ImagePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PublicPipe = /** @class */ (function () {
        function PublicPipe(configService, segment) {
            this.configService = configService;
            this.segment = segment;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        PublicPipe.prototype.transform = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var segments = this.segment.transform(data);
                segments.unshift(this.configService.options.public);
                return segments.join('/');
            };
        PublicPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'public',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PublicPipe.ctorParameters = function () {
            return [
                { type: ConfigService },
                { type: SegmentPipe }
            ];
        };
        /** @nocollapse */ PublicPipe.ngInjectableDef = i0.defineInjectable({ factory: function PublicPipe_Factory() { return new PublicPipe(i0.inject(ConfigService), i0.inject(SegmentPipe)); }, token: PublicPipe, providedIn: "root" });
        return PublicPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RoutePipe = /** @class */ (function () {
        function RoutePipe(routeService) {
            this.routeService = routeService;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        RoutePipe.prototype.transform = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return this.routeService.toRoute(data);
            };
        RoutePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'route',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        RoutePipe.ctorParameters = function () {
            return [
                { type: RouteService }
            ];
        };
        /** @nocollapse */ RoutePipe.ngInjectableDef = i0.defineInjectable({ factory: function RoutePipe_Factory() { return new RoutePipe(i0.inject(RouteService)); }, token: RoutePipe, providedIn: "root" });
        return RoutePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugService = /** @class */ (function (_super) {
        __extends(SlugService, _super);
        function SlugService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.collectedKeys = {};
            _this.cache = {};
            _this.slugs$ = new rxjs.Subject();
            _this.emitter = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(SlugService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return "/api/slug";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} key
         * @return {?}
         */
        SlugService.prototype.getKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (this.cache.hasOwnProperty(key)) {
                    return rxjs.of(this.cache[key]);
                }
                else {
                    // console.log('SlugService.getKey', key);
                    Object.defineProperty(this.collectedKeys, key, {
                        value: key,
                        enumerable: true,
                        writable: false,
                    });
                    this.cache[key] = null;
                }
                // return observable of key
                return this.slugs$.pipe(operators.map(function (items) { return items[key]; }), operators.filter(function (item) { return item !== null; }));
            };
        /**
         * @return {?}
         */
        SlugService.prototype.register = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.emitter.pipe(
                // throttleTime(500),
                operators.tap(function () {
                    _this.collectKeys().pipe(operators.first()).subscribe(function (keys) {
                        // console.log('SlugService.collected', keys);
                    });
                }));
            };
        /**
         * @return {?}
         */
        SlugService.prototype.collect = /**
         * @return {?}
         */
            function () {
                if (Object.keys(this.collectedKeys).length) {
                    this.emitter.emit();
                }
            };
        /**
         * @private
         * @param {?} keys
         * @return {?}
         */
        SlugService.prototype.getSlugs = /**
         * @private
         * @param {?} keys
         * @return {?}
         */
            function (keys) {
                keys = keys || [];
                return this.statePost(keys).pipe(
                // tap(items => console.log(items)),
                );
            };
        /**
         * @private
         * @return {?}
         */
        SlugService.prototype.collectKeys = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.slugs$.next(this.cache);
                /** @type {?} */
                var keys = Object.keys(this.collectedKeys);
                this.collectedKeys = {};
                return this.getSlugs(keys).pipe(operators.map(function (items) {
                    /** @type {?} */
                    var dictionary = {};
                    items.forEach(function (x) { return dictionary[x.mnemonic] = [x.slug]; });
                    return dictionary;
                }), operators.tap(function (dictionary) {
                    Object.assign(_this.cache, dictionary);
                    _this.slugs$.next(_this.cache);
                }));
            };
        SlugService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SlugService.ngInjectableDef = i0.defineInjectable({ factory: function SlugService_Factory() { return new SlugService(i0.inject(i0.INJECTOR)); }, token: SlugService, providedIn: "root" });
        return SlugService;
    }(EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugAsyncPipe = /** @class */ (function () {
        function SlugAsyncPipe(changeDetector, slugService, routePipe) {
            this.changeDetector = changeDetector;
            this.slugService = slugService;
            this.routePipe = routePipe;
            this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
        }
        /**
         * @param {?} key
         * @param {?=} segments
         * @return {?}
         */
        SlugAsyncPipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} segments
         * @return {?}
         */
            function (key, segments) {
                /** @type {?} */
                var slugs = this.routePipe.transform(this.asyncPipe.transform(this.slugService.getKey(key)));
                // console.log('SlugAsyncPipe.transform', key, slugs);
                if (slugs && segments) {
                    slugs = slugs.concat(segments);
                }
                return slugs;
            };
        /**
         * @return {?}
         */
        SlugAsyncPipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.asyncPipe.dispose();
            };
        SlugAsyncPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'slugAsync',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SlugAsyncPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: SlugService },
                { type: RoutePipe }
            ];
        };
        /** @nocollapse */ SlugAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugAsyncPipe_Factory() { return new SlugAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(SlugService), i0.inject(RoutePipe)); }, token: SlugAsyncPipe, providedIn: "root" });
        return SlugAsyncPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugPipe = /** @class */ (function () {
        function SlugPipe(slugService) {
            this.slugService = slugService;
        }
        /**
         * @param {?} key
         * @return {?}
         */
        SlugPipe.prototype.transform = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.slugService.getKey(key);
                // return this.async.transform<any>(this.slugService.getKey(key));
                // return this.routeService.toSlug(key);
            };
        SlugPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'slug',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SlugPipe.ctorParameters = function () {
            return [
                { type: SlugService }
            ];
        };
        /** @nocollapse */ SlugPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugPipe_Factory() { return new SlugPipe(i0.inject(SlugService)); }, token: SlugPipe, providedIn: "root" });
        return SlugPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe(ref, translateService) {
            this.ref = ref;
            this.translateService = translateService;
            // this.translateService.events.subscribe(
            // 	x => this.ref.markForCheck()
            // );
        }
        /**
         * @param {?} key
         * @param {?=} params
         * @return {?}
         */
        TranslatePipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} params
         * @return {?}
         */
            function (key, params) {
                // const label = this.translateService.getLabel(key, text, params);
                return key;
            };
        TranslatePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'translate',
                        pure: false,
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TranslatePipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: TranslateService }
            ];
        };
        /** @nocollapse */ TranslatePipe.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePipe_Factory() { return new TranslatePipe(i0.inject(i0.ChangeDetectorRef), i0.inject(TranslateService)); }, token: TranslatePipe, providedIn: "root" });
        return TranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeStylePipe = /** @class */ (function () {
        function SafeStylePipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} style
         * @return {?}
         */
        SafeStylePipe.prototype.transform = /**
         * @param {?} style
         * @return {?}
         */
            function (style) {
                return this.sanitizer.bypassSecurityTrustStyle(style);
            };
        SafeStylePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeStyle'
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SafeStylePipe.ctorParameters = function () {
            return [
                { type: i1.DomSanitizer }
            ];
        };
        /** @nocollapse */ SafeStylePipe.ngInjectableDef = i0.defineInjectable({ factory: function SafeStylePipe_Factory() { return new SafeStylePipe(i0.inject(i1.DomSanitizer)); }, token: SafeStylePipe, providedIn: "root" });
        return SafeStylePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        SafeUrlPipe.prototype.transform = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.sanitizer.bypassSecurityTrustResourceUrl(url);
            };
        SafeUrlPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeUrl'
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SafeUrlPipe.ctorParameters = function () {
            return [
                { type: i1.DomSanitizer }
            ];
        };
        /** @nocollapse */ SafeUrlPipe.ngInjectableDef = i0.defineInjectable({ factory: function SafeUrlPipe_Factory() { return new SafeUrlPipe(i0.inject(i1.DomSanitizer)); }, token: SafeUrlPipe, providedIn: "root" });
        return SafeUrlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TrustPipe = /** @class */ (function () {
        function TrustPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} text
         * @return {?}
         */
        TrustPipe.prototype.transform = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return this.sanitizer.bypassSecurityTrustHtml(text);
                // return this.sanitizer.bypassSecurityTrustStyle(text);
                // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
            };
        TrustPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeHtml'
                    },] }
        ];
        /** @nocollapse */
        TrustPipe.ctorParameters = function () {
            return [
                { type: i1.DomSanitizer }
            ];
        };
        return TrustPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ClickOutsideDirective = /** @class */ (function () {
        function ClickOutsideDirective(element) {
            this.element = element;
            this.clickOutside = new i0.EventEmitter();
        }
        /**
         * @param {?} e
         * @return {?}
         */
        ClickOutsideDirective.prototype.onClick = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var targetElement = ( /** @type {?} */(e.target));
                // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
                // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
                // console.log(targetElement, documentContained);
                /** @type {?} */
                var clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
                if (!clickedInside) {
                    this.clickOutside.emit(null);
                }
            };
        ClickOutsideDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[clickOutside]'
                    },] }
        ];
        /** @nocollapse */
        ClickOutsideDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        ClickOutsideDirective.propDecorators = {
            clickOutside: [{ type: i0.Output }],
            onClick: [{ type: i0.HostListener, args: ['document:click', ['$event'],] }]
        };
        return ClickOutsideDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // use $ for jquery // !!! rimuovere
    var FancyboxDirective = /** @class */ (function () {
        function FancyboxDirective(platformId, zone, element) {
            this.platformId = platformId;
            this.zone = zone;
            this.element = element;
        }
        /**
         * @return {?}
         */
        FancyboxDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    this.zone.runOutsideAngular(function () {
                        $(function () {
                            // $(this.element.nativeElement).fancybox(this.fancybox);
                            /** @type {?} */
                            var group = Array.from($(_this.element.nativeElement).find(_this.target));
                            group.forEach(function (item, i) {
                                return item.addEventListener('click', function (e) {
                                    $.fancybox.open(group, _this.fancybox, i);
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                });
                            });
                            // console.log(group);
                        });
                    });
                }
            };
        FancyboxDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[fancybox]',
                    },] }
        ];
        /** @nocollapse */
        FancyboxDirective.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.NgZone },
                { type: i0.ElementRef }
            ];
        };
        FancyboxDirective.propDecorators = {
            fancybox: [{ type: i0.Input }],
            target: [{ type: i0.Input }]
        };
        return FancyboxDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // use require for polyfill
    var LazyImagesDirective = /** @class */ (function () {
        function LazyImagesDirective(platformId, element, renderer, zone) {
            this.platformId = platformId;
            this.renderer = renderer;
            this.zone = zone;
            this.nativeElement = element.nativeElement;
        }
        /**
         * @return {?}
         */
        LazyImagesDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!i1$1.isPlatformBrowser(this.platformId)) {
                    return;
                }
                this.zone.runOutsideAngular(function () {
                    require('intersection-observer'); // use require for polyfill
                    _this.onRegister();
                });
            };
        /**
         * @return {?}
         */
        LazyImagesDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.observer) {
                    this.observer.disconnect();
                }
            };
        /**
         * @return {?}
         */
        LazyImagesDirective.prototype.onRegister = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.newIntersectionObserver();
                /** @type {?} */
                var observer = new MutationObserver(function (mutations) { return _this.onChange(mutations); });
                /** @type {?} */
                var config = {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true
                };
                observer.observe(this.nativeElement, config);
                this.onChange();
                // this.observeDOMChanges(this.nativeElement, () => this.onChange);
            };
        /**
         * @param {...?} data
         * @return {?}
         */
        LazyImagesDirective.prototype.onChange = /**
         * @param {...?} data
         * @return {?}
         */
            function () {
                var _this = this;
                var data = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    data[_i] = arguments[_i];
                }
                /** @type {?} */
                var images = Array.from(this.nativeElement.querySelectorAll('img[data-src], [data-srcset], [data-background-src]'));
                images.forEach(function (image) { return _this.observer.observe(image); });
            };
        /**
         * @return {?}
         */
        LazyImagesDirective.prototype.newIntersectionObserver = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var config = this.lazyImages instanceof Object ? this.lazyImages : undefined;
                this.observer = new IntersectionObserver(function (images) {
                    return images.forEach(function (image) {
                        if (!image.isIntersecting) {
                            return;
                        }
                        _this.onAppearsInViewport(image.target);
                    });
                }, config);
                return this.observer;
            };
        /**
         * @param {?} image
         * @return {?}
         */
        LazyImagesDirective.prototype.onAppearsInViewport = /**
         * @param {?} image
         * @return {?}
         */
            function (image) {
                var _this = this;
                if (image.dataset.src) {
                    /** @type {?} */
                    var input = image.dataset.src;
                    this.onImagePreload(input, function (output) {
                        _this.renderer.setAttribute(image, 'src', output);
                        _this.renderer.removeAttribute(image, 'data-src');
                        _this.zone.runOutsideAngular(function () {
                            setTimeout(function () {
                                _this.renderer.addClass(image, 'ready');
                            }, 1);
                        });
                    });
                }
                if (image.dataset.srcset) {
                    this.renderer.setAttribute(image, 'srcset', image.dataset.srcset);
                    this.renderer.removeAttribute(image, 'data-srcset');
                }
                if (image.dataset.backgroundSrc) {
                    this.renderer.setStyle(image, 'background-image', "url(" + image.dataset.backgroundSrc + ")");
                    this.renderer.removeAttribute(image, 'data-background-src');
                }
                if (this.observer) {
                    this.observer.unobserve(image);
                }
            };
        /**
         * @param {?} src
         * @param {?} callback
         * @return {?}
         */
        LazyImagesDirective.prototype.onImagePreload = /**
         * @param {?} src
         * @param {?} callback
         * @return {?}
         */
            function (src, callback) {
                /** @type {?} */
                var img = new Image();
                img.onload = function () {
                    if (typeof callback === 'function') {
                        callback(img.src);
                    }
                };
                img.onerror = function (e) {
                    img.onerror = null;
                    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAATlBMVEX////MzMyZmZn39/fHx8fPz8+Ojo7FxcXDw8Pn5+fS0tLq6url5eX8/PyUlJTi4uLX19fv7++JiYm9vb3d3d2FhYWtra2qqqqAgICdnZ2sCR5lAAAJUElEQVR4nO2d6YKzKgyGa7VaN1zqdL7e/42eigERkGobrM7J+2umM3V5DEkICKeQxHUKT6SnCASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgE6NsgynFcvvzqhXwNRBk2RVdnQRBEXM8fsrormm/x+AqIsqnqAO5+Iv5ZXTVfgLE9iLDoIegIpjiCutj8srYFUaaZG8III0s3tYtNQTT1MgqCRd1sd20bgkiDZDmFQUmQbnV1m4Go5owhimTYsP612ub6NgKRWm60v/lL1nVF+lQfSi+BjUcUbWIVm4BogshkUKdmlCybtL4YNKJgA1+xAYiwjjQKQZc78qYw7/T4GtX+r9I7CK1VPCm8zpfKppsakf/24RtEmUWT+8nyhdlBmU9jbZT5TSs8g2jUm4lWWnhYT7/t1VP4BVFdlRtJ1jf0sEsUFFefkdQriFrJoK7v+btQPUZSY1+hciJ/IErF30XR26cJlfYRBd4chT8QoWLUyUdGXSlG8T7QF/IGIlSf44fnCFXb8nW9nkAoHJLuY3suu8Q3CU8gVA45xgFz3zbhB0Sp+Aek4yvNI/LhMf2AUJwbij30Ki8jXaxjKvIC4qIGDDQS42GjC9oxpXyA6Cb9pSseCdlviTq0Ywp5AJFqFTkfJBL0zig+iMaoTCKSkK0jwe6BoYMoFUcp/QTa81PSduTQgQ5ClqOiskjwScgEJULugGGDaFTbTT2QkCdALk8ggyind17IegReFB3pojYOZBAicgrDHUngeUzR+HBjKC6IUDwtmQWPfgKNhMzfE9RLRwWRiZse22+FT6IRZpYhHbAXKgiRQkw8ugcSonFgJhOoIKRnnLgxfD8xdm5xjtcLE4Q0CC1WpmPsQIqiInIgmgQmiMvcczJINGnuUPr6ksTx8LqhiCCkQZgNQCdR/cQOtffF58IzCUQQtcOX6ySK+OxQ/NqXiH4oWqKNB0LkEPbUN9VyTCcJ9tokRA0TLZfAA1FFzmarZ1ZOEgtMAhwS2oQaPBCBPWRIGSTaj0wiFSEU6fLRQMh6zGxXSM+sUgeJ9qUTFN07LHeJBgK6W66ekG4T+c/w+PtIwTQSr01iwQnXCAuEeECW0Zfq9tTQGrQcM29Zy36vWV1n19/nj2rjuE1lugJZosHpjWOBEJd1MS8raBlj7dAa9HzipnjFJmBKY2ETtRZXcJlF/9YNIIGAmGFz4hceH+wkNNVsJpbElljkOOUbwgKRzYf1AQSExFf9juvUg8Zs8B42ECJxwemMI4EIHcEMQJxjfuc2EmpzStnoKtj5kha3dgaEDNg4d4ADonG4cAHizHQS3EbK2/33936TE9CbhyTx4J9l8QwIETdQAigSiAKuyZYRShBAQqny83/vemf6jKD3Yvj/5gwkYsD6y+wgIM2OCow7QAIBNSNr5j+CMEkMNjL4Bdbeh6/n8AUGR8tmQICTwBnhQAIhQpn1b0okGDymkllxEpBZnSHInmrwmHBpdWwHcXL3btYJB4RIp6wOXAUBUVTJrCYkzv8GM7+z0bvy3+wgRK0YI6XCARG60t0JCCOfuPJbz8EGHj/c8zX8V/bg36/nnKX0lii3gAJCBA1rajAFYWZWnEQqQwt/vDc2hM+6aa6z4VP0QFHCBg4IuCJ7T1ADcW75GedIxNzPCAsR3TE7COjxoszcxwFROYKGAWIweINEMYkVj+l37CBE2MBIsnFAQGNNrF5LA8Gu8HmqeUwgEfPsNGELQJSJwzWtFA6I2hE9DR8hn1+a2Eiw3/7nql0A4oRYwf0CiP6EIaeh5xODn+BtIzwmCBHQrX/UQMT9Z+mPlmNCPsEjBA8r8RIQrvRlpbYHwfrPungmx2xFF2OJj/gTIMzMSpD4v4GYyazy+P8CgvsI3sGcyTEH93FMH7E+aii9Kp1EdeCosT6P+B1IDDZgqd4dNI9YlVkm/YcBpJEaiasgcT1mZrm+rxGKctzQz0h0Egfta6zrfXIfGU1q2zoJzUUcpve5ph5xZrf+01LYvp1EvsRH7K8esaJCdRZD3c3PQ7UQo3rXvgaxvwrV8polN4lhqLv4B7//OKt3DhD7q1kurmJzPdoh3uVi/FsnIXLMVyD2V8VeOq4h72so24d3QNEOmVUyJZEyN4g9jmssG+kaG8cZ/Ftx76uSjLXcu+SzJA4z0rVo7FMl8ZBDnfUw9snbea5XapgLxB7HPpeMhk9JMGuo1at3srZ9lNHwBfMjdLVX819NEuAxDzM/4vWMGVMxs3k5g0Q7B2KfM2bC+VA2B+JpFExdaisfZoxZSVhAlPucQ+WYVTcPoh//VmfVDTmm4jF5POgHQi0gdjqrzjHt0QWCwxjnWQ6ZVa5lVo11WsBO51k6Zt5e9MmkDg2ZlUKCt5aGmSB2O/N2fi524Hw5Q9O/IbPSs21znuVu52LPz87PL9kKDRZlkDDw7nd2vnxfA2dNGaNmNZV4M3qH72vICi5OgqNHUU2iB77DN3iw37NykpAv8Ozxna75t/zek4uE+Msu3/IbTQL57U6TRIpuEH7eBMZaKCrXqndCpSSEc55e/t8N/0R6ZgXa/bvhttUCPpOVxP5XC7CsH/Gp9MzqdIz1I4wVRT6X6SeOsKKIvsYMhoyK7iHWmPGxKNB07SLZy933qkPqOlRoB1bHO6SD2Ps6VGPjQFyodyShLAe495XJFNvFy39HjyltY/dr1SnPD6kf2ksncYTVC5X1LL2ROMZ6ln6WIh2j6HFWOFXWvI0s74q/KWUd5MOseassFPXx4uBCoWIQx1kFebJOOnIN81DrYtNK6cqBae18cWTaTQFE+2tITXdLeetEYX1Vj4F9hcqJfILQ9uDpVp8qrP/GHjy0K9MofZ+uevk+Xdlf2qfrRDu3Kaew7uU3++/lX93L72Tf3fEyt7ujudflX9ndsdf8fp+12O+z+x/s99mLdoCVoj2BpWiXaCnaN1w5I+0kL1U2FY+SBg7+WV29zrjw9RUQvcqw6bfIDkTYeP7Qh9LGsWuyV30NBKgMpb5EAPRtELsRgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAPUGQuP4DT2RwhyUkgc4AAAAASUVORK5CYII=';
                };
                img.src = src;
            };
        LazyImagesDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lazy-images]'
                    },] }
        ];
        /** @nocollapse */
        LazyImagesDirective.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.NgZone }
            ];
        };
        LazyImagesDirective.propDecorators = {
            lazyImages: [{ type: i0.Input }]
        };
        return LazyImagesDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ModalEventType = {
        Complete: 0,
        Close: 1,
    };
    ModalEventType[ModalEventType.Complete] = 'Complete';
    ModalEventType[ModalEventType.Close] = 'Close';
    var ModalCompleteEvent = /** @class */ (function () {
        function ModalCompleteEvent(options) {
            this.type = ModalEventType.Complete;
            // console.log('ModalCompleteEvent', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return ModalCompleteEvent;
    }());
    var ModalCloseEvent = /** @class */ (function () {
        function ModalCloseEvent(options) {
            this.type = ModalEventType.Close;
            if (options) {
                Object.assign(this, options);
            }
        }
        return ModalCloseEvent;
    }());
    var Modal = /** @class */ (function () {
        function Modal(options) {
            this.providers = [];
            this.emitter = new i0.EventEmitter();
            if (options) {
                Object.assign(this, options);
            }
        }
        Modal.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: Modal }
            ];
        };
        /** @nocollapse */ Modal.ngInjectableDef = i0.defineInjectable({ factory: function Modal_Factory() { return new Modal(i0.inject(Modal)); }, token: Modal, providedIn: "root" });
        return Modal;
    }());
    var ModalData = /** @class */ (function (_super) {
        __extends(ModalData, _super);
        function ModalData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ModalData.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ModalData.ngInjectableDef = i0.defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });
        return ModalData;
    }(Object));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalService = /** @class */ (function () {
        function ModalService(platformId) {
            this.platformId = platformId;
            this.modals$ = new rxjs.BehaviorSubject([]);
        }
        /**
         * @return {?}
         */
        ModalService.prototype.getInfos = /**
         * @return {?}
         */
            function () {
                return this.modals$.pipe(operators.map(function (modals) {
                    return modals.length ? modals[modals.length - 1] : null;
                }));
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ModalService.prototype.addClass = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    /** @type {?} */
                    var body = ( /** @type {?} */(document.querySelector('body')));
                    body.classList.add(name);
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ModalService.prototype.removeClass = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (i1$1.isPlatformBrowser(this.platformId)) {
                    /** @type {?} */
                    var body = ( /** @type {?} */(document.querySelector('body')));
                    body.classList.remove(name);
                }
            };
        /**
         * @param {?} modal
         * @return {?}
         */
        ModalService.prototype.open = /**
         * @param {?} modal
         * @return {?}
         */
            function (modal) {
                this.addClass('modal-active');
                modal = new Modal(modal);
                /** @type {?} */
                var modals = this.modals$.getValue();
                modals.push(modal);
                this.modals$.next(modals);
                return modal.emitter;
                // event emitter bound to modals$
            };
        /**
         * @param {?=} modal
         * @param {?=} data
         * @return {?}
         */
        ModalService.prototype.complete = /**
         * @param {?=} modal
         * @param {?=} data
         * @return {?}
         */
            function (modal, data) {
                modal = modal ? this.remove(modal) : this.pop();
                if (modal) {
                    modal.emitter.emit(new ModalCompleteEvent({ modal: modal, data: data }));
                }
            };
        /**
         * @param {?=} modal
         * @param {?=} data
         * @return {?}
         */
        ModalService.prototype.close = /**
         * @param {?=} modal
         * @param {?=} data
         * @return {?}
         */
            function (modal, data) {
                modal = this.removeAll();
                if (modal) {
                    modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
                }
            };
        /**
         * @param {?=} modal
         * @param {?=} data
         * @return {?}
         */
        ModalService.prototype.prev = /**
         * @param {?=} modal
         * @param {?=} data
         * @return {?}
         */
            function (modal, data) {
                modal = modal ? this.remove(modal) : this.pop();
                if (modal) {
                    modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
                }
            };
        /**
         * @private
         * @return {?}
         */
        ModalService.prototype.pop = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var modals = this.modals$.getValue();
                if (modals.length) {
                    /** @type {?} */
                    var modal = modals.pop();
                    if (!modals.length) {
                        this.removeClass('modal-active');
                    }
                    this.modals$.next(modals);
                    return modal;
                }
                else {
                    return null;
                }
            };
        /**
         * @private
         * @param {?} modal
         * @return {?}
         */
        ModalService.prototype.remove = /**
         * @private
         * @param {?} modal
         * @return {?}
         */
            function (modal) {
                /** @type {?} */
                var modals = this.modals$.getValue();
                if (modals.length && modals[modals.length - 1] === modal) {
                    modals.pop();
                    if (!modals.length) {
                        this.removeClass('modal-active');
                    }
                    this.modals$.next(modals);
                    return modal;
                }
                else {
                    return null;
                }
            };
        /**
         * @private
         * @return {?}
         */
        ModalService.prototype.removeAll = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var modals = this.modals$.getValue();
                if (modals.length) {
                    /** @type {?} */
                    var modal = modals.pop();
                    this.removeClass('modal-active');
                    this.modals$.next([]);
                    return modal;
                }
                else {
                    return null;
                }
            };
        ModalService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModalService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        /** @nocollapse */ ModalService.ngInjectableDef = i0.defineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.inject(i0.PLATFORM_ID)); }, token: ModalService, providedIn: "root" });
        return ModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalContainerComponent = /** @class */ (function (_super) {
        __extends(ModalContainerComponent, _super);
        function ModalContainerComponent(modalService) {
            var _this = _super.call(this) || this;
            _this.modalService = modalService;
            _this.modalCount = 0;
            return _this;
        }
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.modalService.modals$.pipe(operators.takeUntil(this.unsubscribe), operators.map(function (modals) {
                    _this.modalCount = modals.length;
                    /** @type {?} */
                    var modal = modals.length ? modals[modals.length - 1] : null;
                    return modal;
                })).subscribe(function (modal) {
                    _this.className = modal ? modal.className : null;
                });
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.doClose = /**
         * @return {?}
         */
            function () {
                this.modalService.close();
            };
        /**
         * @return {?}
         */
        ModalContainerComponent.prototype.doPrev = /**
         * @return {?}
         */
            function () {
                this.modalService.prev();
            };
        ModalContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-modal-container-component',
                        template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal-bg\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal-page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" class=\"modal-prev\" (click)=\"doPrev()\" title=\"Indietro\" *ngIf=\"modalCount > 1\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-prev\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t\tindietro\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"modal-close\" (click)=\"doClose()\" title=\"Chiudi finestra\">\r\n\t\t\t\t<svg class=\"ico\">\r\n\t\t\t\t\t<use xlink:href=\"#ico-close\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [".modal{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;width:100%;height:100%;z-index:10000;margin:0;padding:0;overflow:hidden;pointer-events:none;opacity:0;transition:opacity 250ms ease-in-out}.modal.active{opacity:1;pointer-events:all}.modal-bg{position:fixed;z-index:0;background:#1e1e1e;opacity:.87;top:0;left:0;bottom:0;right:0}.modal-page{position:relative;z-index:1;background:#fff;max-height:90vh;max-width:90vw;box-shadow:0 10px 40px -5px rgba(0,0,0,.5);overflow-y:auto}@media (max-width:500px){.modal-page{max-height:calc(100% - 80px);margin-top:40px;width:90%;max-width:none}}.modal-page .modal-header .modal-prev{padding:10px;z-index:1;color:#5f5d63;display:flex;font-size:11px;align-items:center;text-transform:uppercase;margin-left:4px}.modal-page .modal-header .modal-prev .ico{width:12px;height:12px;fill:#5f5d63;margin-right:4px}.modal-page .modal-header .modal-close{position:fixed;z-index:1;right:10px;top:10px}.modal-page .modal-header .modal-close .ico{fill:#fff;width:32px;height:32px}"]
                    }] }
        ];
        /** @nocollapse */
        ModalContainerComponent.ctorParameters = function () {
            return [
                { type: ModalService }
            ];
        };
        return ModalContainerComponent;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalViewComponent = /** @class */ (function (_super) {
        __extends(ModalViewComponent, _super);
        function ModalViewComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        Object.defineProperty(ModalViewComponent.prototype, "modal", {
            set: /**
             * @param {?} modal
             * @return {?}
             */ function (modal) {
                if (this.component) {
                    this.component.destroy();
                }
                if (!modal) {
                    this.component = null;
                    return;
                }
                /** @type {?} */
                var providers = Object.keys(modal.providers).map(function (key) {
                    return { provide: key, useValue: modal.providers[key] };
                });
                providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
                /** @type {?} */
                var resolvedInputs = i0.ReflectiveInjector.resolve(providers);
                /** @type {?} */
                var injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(modal.component);
                /** @type {?} */
                var component = factory.create(injector);
                this.modalContainer.insert(component.hostView);
                this.component = component;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ModalViewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.component) {
                    this.component.destroy();
                    this.component = null;
                }
            };
        ModalViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-modal-view-component',
                        template: "<ng-container #modalContainer></ng-container>\r\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ModalViewComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        ModalViewComponent.propDecorators = {
            modalContainer: [{ type: i0.ViewChild, args: ['modalContainer', { read: i0.ViewContainerRef },] }],
            modal: [{ type: i0.Input }]
        };
        return ModalViewComponent;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            }
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        CoreModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: CoreModule,
                    providers: [{
                            provide: CORE_CONFIG, useValue: config
                        }]
                };
            };
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1$1.CommonModule,
                            http.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            CoreRouting,
                        ],
                        declarations: [
                            AssetPipe,
                            ClickOutsideDirective,
                            ControlComponent,
                            CoreModuleComponent,
                            CustomAsyncPipe,
                            DefaultContentDirective,
                            DisposableComponent,
                            ExistsValidator,
                            FancyboxDirective,
                            HighlightPipe,
                            ImagePipe,
                            JsonFormatterComponent,
                            LabelAsyncPipe,
                            LabelDirective,
                            LabelPipe,
                            LazyImagesDirective,
                            LoggerComponent,
                            MatchValidator,
                            ModalContainerComponent,
                            ModalViewComponent,
                            PageComponent,
                            PageNotFoundComponent,
                            PageOutletComponent,
                            PublicPipe,
                            RoutePipe,
                            SafeStylePipe,
                            SafeUrlPipe,
                            SegmentPipe,
                            SlugAsyncPipe,
                            SlugPipe,
                            TranslatePipe,
                            TrustPipe,
                            UppercaseDirective,
                        ],
                        exports: [
                            AssetPipe,
                            ClickOutsideDirective,
                            ControlComponent,
                            CoreModuleComponent,
                            CustomAsyncPipe,
                            DefaultContentDirective,
                            ExistsValidator,
                            FancyboxDirective,
                            HighlightPipe,
                            ImagePipe,
                            JsonFormatterComponent,
                            LabelAsyncPipe,
                            LabelDirective,
                            LabelPipe,
                            LazyImagesDirective,
                            LoggerComponent,
                            MatchValidator,
                            ModalContainerComponent,
                            ModalViewComponent,
                            PageComponent,
                            PublicPipe,
                            RoutePipe,
                            SafeStylePipe,
                            SafeUrlPipe,
                            SegmentPipe,
                            SlugAsyncPipe,
                            SlugPipe,
                            TranslatePipe,
                            TrustPipe,
                            UppercaseDirective,
                        ],
                        providers: [
                            { provide: http.HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                            AssetPipe,
                            AuthService,
                            ConfigService,
                            ControlService,
                            CookieStorageService,
                            CustomAsyncPipe,
                            EventDispatcherService,
                            ExistsValidator,
                            FormService,
                            HighlightPipe,
                            HttpStatusCodeService,
                            ImagePipe,
                            LabelPipe,
                            LabelService,
                            LocalStorageService,
                            Logger,
                            MatchValidator,
                            MenuService,
                            ModalService,
                            OnceService,
                            PageGuard, StaticGuard,
                            PageService,
                            PublicPipe,
                            RoutePipe,
                            SafeUrlPipe,
                            SegmentPipe,
                            SessionStorageService,
                            SlugAsyncPipe,
                            SlugPipe,
                            StorageService,
                            TranslatePipe,
                            TrustPipe,
                        ],
                    },] }
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () {
            return [
                { type: CoreModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        CoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ CoreService.ngInjectableDef = i0.defineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
        return CoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Label = /** @class */ (function () {
        function Label() {
        }
        return Label;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Document = /** @class */ (function () {
        function Document() {
        }
        return Document;
    }());
    var DocumentIndex = /** @class */ (function () {
        function DocumentIndex() {
        }
        return DocumentIndex;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuItem = /** @class */ (function () {
        function MenuItem(options) {
            if (options) {
                Object.assign(this, options);
                if (options.items) {
                    this.items = options.items.map(function (item) { return new MenuItem(item); });
                }
            }
        }
        return MenuItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FormsModule = forms.FormsModule;
    exports.ReactiveFormsModule = forms.ReactiveFormsModule;
    exports.HTTP_INTERCEPTORS = http.HTTP_INTERCEPTORS;
    exports.CommonModule = i1$1.CommonModule;
    exports.NgModule = i0.NgModule;
    exports.Optional = i0.Optional;
    exports.SkipSelf = i0.SkipSelf;
    exports.Type = i0.Type;
    exports.AuthService = AuthService;
    exports.ConfigService = ConfigService;
    exports.CoreConfig = CoreConfig;
    exports.CORE_CONFIG = CORE_CONFIG;
    exports.DefaultContentDirective = DefaultContentDirective;
    exports.CoreModuleComponent = CoreModuleComponent;
    exports.CoreModule = CoreModule;
    exports.CoreRouting = CoreRouting;
    exports.CoreService = CoreService;
    exports.DisposableComponent = DisposableComponent;
    exports.ControlBase = ControlBase;
    exports.ControlBaseOptions = ControlBaseOptions;
    exports.ControlComponent = ControlComponent;
    exports.ControlService = ControlService;
    exports.ExistsValidator = ExistsValidator;
    exports.FormService = FormService;
    exports.MatchValidator = MatchValidator;
    exports.UppercaseDirective = UppercaseDirective;
    exports.HighlightPipe = HighlightPipe;
    exports.HttpResponseInterceptor = HttpResponseInterceptor;
    exports.HttpStatusCodeService = HttpStatusCodeService;
    exports.JsonFormatterComponent = JsonFormatterComponent;
    exports.Label = Label;
    exports.LabelAsyncPipe = LabelAsyncPipe;
    exports.LabelDirective = LabelDirective;
    exports.LabelPipe = LabelPipe;
    exports.LabelService = LabelService;
    exports.Logger = Logger;
    exports.LoggerComponent = LoggerComponent;
    exports.Document = Document;
    exports.DocumentIndex = DocumentIndex;
    exports.EventDispatcherService = EventDispatcherService;
    exports.MenuItem = MenuItem;
    exports.MenuService = MenuService;
    exports.OnceService = OnceService;
    exports.Page = Page;
    exports.PageIndex = PageIndex;
    exports.PageMeta = PageMeta;
    exports.PageRelation = PageRelation;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.PageOutletComponent = PageOutletComponent;
    exports.PageResolver = PageResolver;
    exports.PageResolverService = PageResolverService;
    exports.PageComponent = PageComponent;
    exports.PageGuard = PageGuard;
    exports.PageService = PageService;
    exports.StaticGuard = StaticGuard;
    exports.AssetPipe = AssetPipe;
    exports.CustomAsyncPipe = CustomAsyncPipe;
    exports.ImagePipe = ImagePipe;
    exports.PublicPipe = PublicPipe;
    exports.SegmentPipe = SegmentPipe;
    exports.RoutePipe = RoutePipe;
    exports.RouteService = RouteService;
    exports.SlugAsyncPipe = SlugAsyncPipe;
    exports.SlugPipe = SlugPipe;
    exports.SlugService = SlugService;
    exports.CookieStorageService = CookieStorageService;
    exports.LocalStorageService = LocalStorageService;
    exports.SessionStorageService = SessionStorageService;
    exports.StorageService = StorageService;
    exports.TranslatePipe = TranslatePipe;
    exports.SafeStylePipe = SafeStylePipe;
    exports.SafeUrlPipe = SafeUrlPipe;
    exports.TrustPipe = TrustPipe;
    exports.ClickOutsideDirective = ClickOutsideDirective;
    exports.FancyboxDirective = FancyboxDirective;
    exports.LazyImagesDirective = LazyImagesDirective;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalViewComponent = ModalViewComponent;
    exports.ModalService = ModalService;
    exports.ɵb = ApiService;
    exports.ɵc = EntityService;
    exports.ɵd = IdentityService;
    exports.ɵe = LinkService;
    exports.ɵa = TranslateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=artisan-core.umd.js.map