import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@artisan/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { label } from './data/label';
import { MemoryService, MEMORY_DATA } from './data/memory.service';
import { menu } from './data/menu';
import { page } from './data/page';
import { slug } from './data/slug';

export const DATA: { [key: string]: any[] } = {
	label: label,
	menu: menu,
	page: page,
	slug: slug,
};

@NgModule({
	imports: [
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			MemoryService, {
				apiBase: 'api/',
				passThruUnknownUrl: true,
				dataEncapsulation: false,
				delay: 0,
			}
		),
	],
	providers: [{
		provide: MEMORY_DATA, useValue: DATA
	}],
	exports: [HttpClientInMemoryWebApiModule]
})

export class AppDatas { }
