import { Component, Injector } from '@angular/core';
import { PageComponent } from '@artisan/core';

@Component({
	selector: 'contact-component',
	templateUrl: '../default/default.component.html',
})
export class ContactComponent extends PageComponent {

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

}
