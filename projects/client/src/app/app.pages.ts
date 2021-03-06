import { CoreModule, NgModule, Pages } from '@artisan/core';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const PAGES: Pages = {
	'HomeComponent': HomeComponent,
	'ContactComponent': ContactComponent,
};

@NgModule({
	imports: [
		CoreModule.forRoot({
			pages: PAGES,
			defaultPage: DefaultComponent,
			notFoundPage: NotFoundComponent,
		}),
	],
	exports: [CoreModule]
})

export class AppPages { }
