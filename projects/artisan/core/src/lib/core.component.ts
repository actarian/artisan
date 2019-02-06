import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ws-core',
	template: `
    <span class="core__version">core version 0.1.0</span>
  `,
	styles: []
})
export class CoreComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
