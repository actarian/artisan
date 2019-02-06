/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';
import { CORE_CONFIG } from './config/core.config';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreComponent } from './core.component';
import { CoreRouting } from './core.routing';
import { DisposableComponent } from './disposable/disposable.component';
import { EditorComponent } from './editor/editor.component';
import { ControlComponent } from './forms/controls/control.component';
import { ControlService } from './forms/controls/control.service';
import { ExistsValidator } from './forms/exists.validator';
import { FormService } from './forms/form.service';
import { MatchValidator } from './forms/match.validator';
import { UppercaseDirective } from './forms/uppercase.directive';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { HttpStatusCodeService } from './http/http-status-code.service';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelAsyncPipe } from './labels/label-async.pipe';
import { LabelDirective } from './labels/label.directive';
import { LabelPipe } from './labels/label.pipe';
import { LabelService } from './labels/label.service';
import { Logger } from './logger/logger';
import { LoggerComponent } from './logger/logger.component';
import { EventDispatcherService } from './models/event-dispatcher.service';
import { MenuService } from './models/menu.service';
import { OnceService } from './once/once.service';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageComponent } from './pages/page.component';
import { PageGuard } from './pages/page.guard';
import { PageService } from './pages/page.service';
import { StaticGuard } from './pages/static.guard';
import { AssetPipe } from './pipes/asset.pipe';
import { CustomAsyncPipe } from './pipes/custom-async.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { PublicPipe } from './pipes/public.pipe';
import { SegmentPipe } from './pipes/segment.pipe';
import { FacebookService } from './plugins/facebook/facebook.service';
import { GoogleTagManagerComponent } from './plugins/google/google-tag-manager.component';
import { GoogleTagManagerService } from './plugins/google/google-tag-manager.service';
import { GoogleService } from './plugins/google/google.service';
import { MapboxService } from './plugins/mapbox/mapbox.service';
import { PayPalWidgetComponent } from './plugins/paypal/paypal-widget.component';
import { PayPalService } from './plugins/paypal/paypal.service';
import { TrustPilotWidgetComponent } from './plugins/trustpilot/trustpilot-widget.component';
import { TrustPilotService } from './plugins/trustpilot/trustpilot.service';
import { RoutePipe } from './routes/route.pipe';
import { SlugAsyncPipe } from './slugs/slug-async.pipe';
import { SlugPipe } from './slugs/slug.pipe';
import { CookieStorageService, LocalStorageService, SessionStorageService, StorageService } from './storage/storage.service';
import { TranslatePipe } from './translate/translate.pipe';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { FancyboxDirective } from './ui/fancybox/fancybox.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';
const ɵ0 = {
// gfm: true,
// tables: true,
// breaks: true,
// pedantic: true,
// sanitize: true,
// smartLists: true,
// smartypants: true,
};
export class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: CORE_CONFIG, useValue: config },
            ]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CoreRouting,
                    MarkdownModule.forRoot({
                        markedOptions: {
                            provide: MarkedOptions,
                            useValue: ɵ0,
                        },
                    }),
                ],
                declarations: [
                    AssetPipe,
                    ClickOutsideDirective,
                    ControlComponent,
                    CoreComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    DisposableComponent,
                    EditorComponent,
                    ExistsValidator,
                    FancyboxDirective,
                    GoogleTagManagerComponent,
                    HighlightPipe,
                    ImagePipe,
                    JsonFormatterComponent,
                    LabelAsyncPipe,
                    LabelDirective,
                    LabelPipe,
                    LazyImagesDirective,
                    LoggerComponent,
                    MatchValidator,
                    ModalContainerComponent,
                    ModalViewComponent,
                    PageComponent,
                    PageNotFoundComponent,
                    PageOutletComponent,
                    PayPalWidgetComponent,
                    PublicPipe,
                    RoutePipe,
                    SafeStylePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SlugAsyncPipe,
                    SlugPipe,
                    TranslatePipe,
                    TrustPilotWidgetComponent,
                    TrustPipe,
                    UppercaseDirective,
                ],
                exports: [
                    AssetPipe,
                    ClickOutsideDirective,
                    ControlComponent,
                    CoreComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    EditorComponent,
                    ExistsValidator,
                    FancyboxDirective,
                    GoogleTagManagerComponent,
                    HighlightPipe,
                    ImagePipe,
                    JsonFormatterComponent,
                    LabelAsyncPipe,
                    LabelDirective,
                    LabelPipe,
                    LazyImagesDirective,
                    LoggerComponent,
                    MatchValidator,
                    ModalContainerComponent,
                    ModalViewComponent,
                    PageComponent,
                    PayPalWidgetComponent,
                    PublicPipe,
                    RoutePipe,
                    SafeStylePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SlugAsyncPipe,
                    SlugPipe,
                    TranslatePipe,
                    TrustPilotWidgetComponent,
                    TrustPipe,
                    UppercaseDirective,
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    AssetPipe,
                    AuthService,
                    ConfigService,
                    ControlService,
                    CookieStorageService,
                    CustomAsyncPipe,
                    EventDispatcherService,
                    ExistsValidator,
                    FacebookService,
                    FormService,
                    GoogleService,
                    GoogleTagManagerService,
                    HighlightPipe,
                    HttpStatusCodeService,
                    ImagePipe,
                    LabelPipe,
                    LabelService,
                    LocalStorageService,
                    Logger,
                    MapboxService,
                    MatchValidator,
                    MenuService,
                    ModalService,
                    OnceService,
                    PageGuard, StaticGuard,
                    PageService,
                    PayPalService,
                    PublicPipe,
                    RoutePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SessionStorageService,
                    SlugAsyncPipe,
                    SlugPipe,
                    StorageService,
                    TranslatePipe,
                    TrustPilotService,
                    TrustPipe,
                ],
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxF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LFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixRQUFRO29CQUNSLGFBQWE7b0JBQ2IseUJBQXlCO29CQUN6QixTQUFTO29CQUNULGtCQUFrQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO29CQUM5RSxTQUFTO29CQUNULFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsZUFBZTtvQkFDZixzQkFBc0I7b0JBQ3RCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixXQUFXO29CQUNYLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIsU0FBUztvQkFDVCxTQUFTO29CQUNULFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixNQUFNO29CQUNOLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxTQUFTLEVBQUUsV0FBVztvQkFDdEIsV0FBVztvQkFDWCxhQUFhO29CQUNiLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsU0FBUztpQkFDVDthQUNEOzs7O1lBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb3JlLmNvbmZpZyc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2RlZmF1bHQtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvcmVSb3V0aW5nIH0gZnJvbSAnLi9jb3JlLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4aXN0c1ZhbGlkYXRvciB9IGZyb20gJy4vZm9ybXMvZXhpc3RzLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9mb3Jtcy9mb3JtLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vZm9ybXMvbWF0Y2gudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgVXBwZXJjYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jtcy91cHBlcmNhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2hpZ2hsaWdodC5waXBlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAvaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbEFzeW5jUGlwZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhYmVsUGlwZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9ldmVudC1kaXNwYXRjaGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbW9kZWxzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi9vbmNlL29uY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZU91dGxldENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlR3VhcmQgfSBmcm9tICcuL3BhZ2VzL3BhZ2UuZ3VhcmQnO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZXMvcGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhdGljR3VhcmQgfSBmcm9tICcuL3BhZ2VzL3N0YXRpYy5ndWFyZCc7XHJcbmltcG9ydCB7IEFzc2V0UGlwZSB9IGZyb20gJy4vcGlwZXMvYXNzZXQucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZVBpcGUgfSBmcm9tICcuL3BpcGVzL2ltYWdlLnBpcGUnO1xyXG5pbXBvcnQgeyBQdWJsaWNQaXBlIH0gZnJvbSAnLi9waXBlcy9wdWJsaWMucGlwZSc7XHJcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi9waXBlcy9zZWdtZW50LnBpcGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZmFjZWJvb2svZmFjZWJvb2suc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcGJveFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5UGFsV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3BheXBhbC9wYXlwYWwtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy90cnVzdHBpbG90L3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi9yb3V0ZXMvcm91dGUucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdBc3luY1BpcGUgfSBmcm9tICcuL3NsdWdzL3NsdWctYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdQaXBlIH0gZnJvbSAnLi9zbHVncy9zbHVnLnBpcGUnO1xyXG5pbXBvcnQgeyBDb29raWVTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlU3R5bGVQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXN0eWxlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlVXJsUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IFRydXN0UGlwZSB9IGZyb20gJy4vdHJ1c3QvdHJ1c3QucGlwZSc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vdWkvY2xpY2stb3V0c2lkZS9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZhbmN5Ym94RGlyZWN0aXZlIH0gZnJvbSAnLi91aS9mYW5jeWJveC9mYW5jeWJveC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9sYXp5LWltYWdlcy9sYXp5LWltYWdlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Q29yZVJvdXRpbmcsXHJcblx0XHRNYXJrZG93bk1vZHVsZS5mb3JSb290KHtcclxuXHRcdFx0bWFya2VkT3B0aW9uczoge1xyXG5cdFx0XHRcdHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXHJcblx0XHRcdFx0dXNlVmFsdWU6IHtcclxuXHRcdFx0XHRcdC8vIGdmbTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHRhYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIGJyZWFrczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHBlZGFudGljOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc2FuaXRpemU6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydExpc3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnR5cGFudHM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0XHRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0Q29yZUNvbXBvbmVudCxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdERlZmF1bHRDb250ZW50RGlyZWN0aXZlLFxyXG5cdFx0RGlzcG9zYWJsZUNvbXBvbmVudCxcclxuXHRcdEVkaXRvckNvbXBvbmVudCxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZhbmN5Ym94RGlyZWN0aXZlLFxyXG5cdFx0R29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxyXG5cdFx0TGFiZWxBc3luY1BpcGUsXHJcblx0XHRMYWJlbERpcmVjdGl2ZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhenlJbWFnZXNEaXJlY3RpdmUsXHJcblx0XHRMb2dnZXJDb21wb25lbnQsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5cdFx0UGFnZUNvbXBvbmVudCxcclxuXHRcdFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcclxuXHRcdFBhZ2VPdXRsZXRDb21wb25lbnQsXHJcblx0XHRQYXlQYWxXaWRnZXRDb21wb25lbnQsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVN0eWxlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRcdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuXHRcdENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRDb3JlQ29tcG9uZW50LFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0XHRFZGl0b3JDb21wb25lbnQsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRGYW5jeWJveERpcmVjdGl2ZSxcclxuXHRcdEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQsXHJcblx0XHRIaWdobGlnaHRQaXBlLFxyXG5cdFx0SW1hZ2VQaXBlLFxyXG5cdFx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRcdExhYmVsQXN5bmNQaXBlLFxyXG5cdFx0TGFiZWxEaXJlY3RpdmUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMYXp5SW1hZ2VzRGlyZWN0aXZlLFxyXG5cdFx0TG9nZ2VyQ29tcG9uZW50LFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdE1vZGFsVmlld0NvbXBvbmVudCxcclxuXHRcdFBhZ2VDb21wb25lbnQsXHJcblx0XHRQYXlQYWxXaWRnZXRDb21wb25lbnQsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVN0eWxlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRcdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0QXV0aFNlcnZpY2UsXHJcblx0XHRDb25maWdTZXJ2aWNlLFxyXG5cdFx0Q29udHJvbFNlcnZpY2UsXHJcblx0XHRDb29raWVTdG9yYWdlU2VydmljZSxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRGYWNlYm9va1NlcnZpY2UsXHJcblx0XHRGb3JtU2VydmljZSxcclxuXHRcdEdvb2dsZVNlcnZpY2UsXHJcblx0XHRHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMYWJlbFNlcnZpY2UsXHJcblx0XHRMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0TG9nZ2VyLFxyXG5cdFx0TWFwYm94U2VydmljZSxcclxuXHRcdE1hdGNoVmFsaWRhdG9yLFxyXG5cdFx0TWVudVNlcnZpY2UsXHJcblx0XHRNb2RhbFNlcnZpY2UsXHJcblx0XHRPbmNlU2VydmljZSxcclxuXHRcdFBhZ2VHdWFyZCwgU3RhdGljR3VhcmQsXHJcblx0XHRQYWdlU2VydmljZSxcclxuXHRcdFBheVBhbFNlcnZpY2UsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlsb3RTZXJ2aWNlLFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogQ29yZUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IENPUkVfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=