import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
export declare class PayPalConfigStyle {
    label?: string;
    size?: string;
    shape?: string;
    color?: string;
}
export declare class PayPalConfigClient {
    sandbox: string;
    production: string;
}
export declare class PayPalConfig {
    env: string;
    style?: PayPalConfigStyle;
    client: PayPalConfigClient;
    commit?: boolean;
    sandboxFacilitator?: string;
    payment?: Function;
    onAuthorize?: Function;
}
export declare class PayPalService {
    private platformId;
    private configService;
    private onceService;
    options: PayPalConfig;
    private paypal;
    private paypal$;
    constructor(platformId: string, configService: ConfigService, onceService: OnceService);
    private init;
    once(): Observable<any>;
    render(options: any, selector?: string): Observable<any[]>;
    private getOptions;
}
