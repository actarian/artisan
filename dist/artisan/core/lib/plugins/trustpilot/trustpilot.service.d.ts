import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
export declare class TrustPilotConfig {
    businessunitId: string;
    businessunitName: string;
}
export declare class TrustPilotService {
    private platformId;
    private configService;
    private onceService;
    options: TrustPilotConfig;
    private Trustpilot;
    private Trustpilot$;
    constructor(platformId: string, configService: ConfigService, onceService: OnceService);
    private init;
    once(): Observable<any>;
}
