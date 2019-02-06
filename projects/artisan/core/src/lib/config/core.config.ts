import { InjectionToken, Type } from '@angular/core';
import { PageComponent } from '../pages/page.component';
import { Pages } from '../pages/pages';
import { FacebookConfig } from '../plugins/facebook/facebook.service';
import { GoogleTagManagerConfig } from '../plugins/google/google-tag-manager.service';
import { GoogleConfig } from '../plugins/google/google.service';
import { MapboxConfig } from '../plugins/mapbox/mapbox.service';
import { PayPalConfig } from '../plugins/paypal/paypal.service';
import { TrustPilotConfig } from '../plugins/trustpilot/trustpilot.service';

export enum AuthStrategy {
	Bearer = 0,
	Cookie = 1,
}

export class Language {
	id?: number;
	name?: string;
	lang?: string;
}

export class CoreConfigPlugins {
	facebook?: FacebookConfig;
	google?: GoogleConfig;
	googleTagManager?: GoogleTagManagerConfig;
	mapbox?: MapboxConfig;
	paypal?: PayPalConfig;
	trustPilot?: TrustPilotConfig;

	constructor(options?: CoreConfigPlugins) {
		console.log('CoreConfigPlugins', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export class CoreTransitionConfig {
	appId?: string;

	constructor(options?: CoreTransitionConfig) {
		console.log('CoreTransitionConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export class CorePrebootConfig {
	appRoot?: string;

	constructor(options?: CorePrebootConfig) {
		console.log('CorePrebootConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export class CoreConfig {
	assets?: string = '';
	authStrategy?: AuthStrategy = AuthStrategy.Cookie;
	defaultLanguage?: string = 'it';
	defaultMarket?: string = 'it';
	defaultPage?: Type<PageComponent>;
	editor?: boolean;
	enableTracing?: boolean;
	languages?: Language[] = [{ id: 1, name: 'Italiano', lang: 'it' }];
	notFoundPage?: Type<PageComponent>;
	origin?: string = '';
	pages?: Pages = {};
	plugins?: CoreConfigPlugins;
	preboot?: CorePrebootConfig;
	production?: boolean = false;
	public?: string = '';
	transition?: CoreTransitionConfig;
	urlStrategy?: string = '';
	useHash?: boolean = true;
	useLang?: boolean = false;
	useMarket?: boolean = false;
	useServiceWorker?: boolean;

	constructor(options?: CoreConfig) {
		console.log('CoreConfig', options);
		if (options) {
			this.pages = options.pages || {};
			this.plugins = new CoreConfigPlugins(options.plugins);
			this.preboot = new CorePrebootConfig(options.preboot);
			this.transition = new CoreTransitionConfig(options.transition);
			this.defaultPage = options.defaultPage;
			this.notFoundPage = options.notFoundPage;
		} else {
			this.plugins = new CoreConfigPlugins();
			this.preboot = new CorePrebootConfig();
			this.transition = new CoreTransitionConfig();
		}
	}
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('core.config');
