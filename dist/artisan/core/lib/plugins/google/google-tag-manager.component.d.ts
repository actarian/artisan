import { AfterViewInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../config/config.service';
import { DisposableComponent } from '../../disposable/disposable.component';
import { GoogleTagManagerService } from './google-tag-manager.service';
export declare class GoogleTagManagerComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private configService;
    private router;
    private googleTagManager;
    useIframe: boolean;
    id: string;
    iframeUrl: string;
    dataLayer: any[];
    pageView: EventEmitter<{}>;
    constructor(platformId: string, configService: ConfigService, router: Router, googleTagManager: GoogleTagManagerService);
    ngAfterViewInit(): void;
}
