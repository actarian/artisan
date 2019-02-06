import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@artisan/core';

@Component({
	selector: 'footer-component',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class FooterComponent extends DisposableComponent implements OnInit {

	ngOnInit() {

	}

}
