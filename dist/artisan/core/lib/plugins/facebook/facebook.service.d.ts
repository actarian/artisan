import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config.service';
import { OnceService } from '../../once/once.service';
import { RouteService } from '../../routes/route.service';
import { LocalStorageService, StorageService } from '../../storage/storage.service';
export declare class FacebookConfig {
    appId: number;
    fields: string;
    scope: string;
    tokenClient: string;
    version: string;
}
export declare class FacebookAuthResponse {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
}
export declare class FacebookPictureData {
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
}
export declare class FacebookPicture {
    data: FacebookPictureData;
}
export declare class FacebookUser {
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    name: string;
    picture: FacebookPicture;
    authResponse?: FacebookAuthResponse;
    facebookToken?: string;
}
export declare class FacebookService {
    private platformId;
    private configService;
    private storageService;
    private onceService;
    private routeService;
    authResponse: FacebookAuthResponse;
    storage: StorageService;
    private options;
    private FB;
    constructor(platformId: string, configService: ConfigService, storageService: LocalStorageService, onceService: OnceService, routeService: RouteService);
    init(): void;
    facebook(): Observable<any>;
    status(): Observable<never>;
    login(): Observable<never>;
    logout(): Observable<any>;
    getMe(fields?: string): Observable<FacebookUser>;
}
