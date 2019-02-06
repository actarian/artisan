import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config.service';
import { Logger } from '../../logger/logger';
import { OnceService } from '../../once/once.service';
export declare class GoogleTagManagerPageViewEvent {
    dataLayer: any[];
    url: string;
}
export declare class GoogleTagManagerConfig {
    id: string;
}
export declare class GoogleTagManagerService {
    private platformId;
    private configService;
    private zone;
    private onceService;
    private logger;
    options: GoogleTagManagerConfig;
    private dataLayer;
    private dataLayer$;
    constructor(platformId: string, configService: ConfigService, zone: NgZone, onceService: OnceService, logger: Logger);
    private init;
    once(): Observable<any[]>;
    push(payload: any): void;
}
