import { AfterViewInit, ElementRef } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { DisposableComponent } from '../../disposable/disposable.component';
import { TrustPilotConfig, TrustPilotService } from './trustpilot.service';
export declare class TrustPilotWidgetOptions {
    templateId?: string;
    businessunitId?: string;
    businessunitName?: string;
    locale?: string;
    sku?: string;
    styleHeight?: string;
    styleWidth?: string;
    theme?: string;
    group?: string;
    stars?: string;
    constructor(options?: TrustPilotWidgetOptions);
    static newFromConfig(options?: TrustPilotConfig): TrustPilotWidgetOptions;
    set?(options?: TrustPilotWidgetOptions): TrustPilotWidgetOptions;
}
export declare class TrustPilotWidgetComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private configService;
    private elementRef;
    private trustPilot;
    loaded: boolean;
    trustPilotOptions: TrustPilotConfig;
    options?: TrustPilotWidgetOptions;
    sku?: string;
    constructor(platformId: string, configService: ConfigService, elementRef: ElementRef, trustPilot: TrustPilotService);
    private init;
    ngAfterViewInit(): void;
}
