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
var ɵ0 = {
// gfm: true,
// tables: true,
// breaks: true,
// pedantic: true,
// sanitize: true,
// smartLists: true,
// smartypants: true,
};
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: CORE_CONFIG, useValue: config },
            ]
        };
    };
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
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxF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QkFDYixRQUFRO3dCQUNSLGFBQWE7d0JBQ2IseUJBQXlCO3dCQUN6QixTQUFTO3dCQUNULGtCQUFrQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUM5RSxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLHFCQUFxQjt3QkFDckIsU0FBUzt3QkFDVCxTQUFTO3dCQUNULFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixNQUFNO3dCQUNOLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxTQUFTLEVBQUUsV0FBVzt3QkFDdEIsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLFVBQVU7d0JBQ1YsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLFFBQVE7d0JBQ1IsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsU0FBUztxQkFDVDtpQkFDRDs7OztnQkFLdUMsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVE7O0lBa0J2QixpQkFBQztDQUFBLEFBaktELElBaUtDO1NBckJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWFya2Rvd25Nb2R1bGUsIE1hcmtlZE9wdGlvbnMgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3JlQ29uZmlnLCBDT1JFX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL2NvcmUuY29uZmlnJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQvZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29yZVJvdXRpbmcgfSBmcm9tICcuL2NvcmUucm91dGluZyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci9lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vZm9ybXMvY29udHJvbHMvY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhpc3RzVmFsaWRhdG9yIH0gZnJvbSAnLi9mb3Jtcy9leGlzdHMudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm1zL2Zvcm0uc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi9mb3Jtcy9tYXRjaC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBVcHBlcmNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm1zL3VwcGVyY2FzZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZm9ybWF0dGVyL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhYmVsQXN5bmNQaXBlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwtYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGFiZWxQaXBlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vbW9kZWxzL2V2ZW50LWRpc3BhdGNoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuL29uY2Uvb25jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vcGFnZXMvcGFnZS5ndWFyZCc7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlcy9wYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0aWNHdWFyZCB9IGZyb20gJy4vcGFnZXMvc3RhdGljLmd1YXJkJztcclxuaW1wb3J0IHsgQXNzZXRQaXBlIH0gZnJvbSAnLi9waXBlcy9hc3NldC5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IFB1YmxpY1BpcGUgfSBmcm9tICcuL3BpcGVzL3B1YmxpYy5waXBlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlZ21lbnQucGlwZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwYm94U2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9tYXBib3gvbWFwYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXlQYWxXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5UGFsU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9wYXlwYWwvcGF5cGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuL3JvdXRlcy9yb3V0ZS5waXBlJztcclxuaW1wb3J0IHsgU2x1Z0FzeW5jUGlwZSB9IGZyb20gJy4vc2x1Z3Mvc2x1Zy1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1BpcGUgfSBmcm9tICcuL3NsdWdzL3NsdWcucGlwZSc7XHJcbmltcG9ydCB7IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZVBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtc3R5bGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXVybC5waXBlJztcclxuaW1wb3J0IHsgVHJ1c3RQaXBlIH0gZnJvbSAnLi90cnVzdC90cnVzdC5waXBlJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmFuY3lib3hEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2ZhbmN5Ym94L2ZhbmN5Ym94LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhenlJbWFnZXNEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2xhenktaW1hZ2VzL2xhenktaW1hZ2VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRDb3JlUm91dGluZyxcclxuXHRcdE1hcmtkb3duTW9kdWxlLmZvclJvb3Qoe1xyXG5cdFx0XHRtYXJrZWRPcHRpb25zOiB7XHJcblx0XHRcdFx0cHJvdmlkZTogTWFya2VkT3B0aW9ucyxcclxuXHRcdFx0XHR1c2VWYWx1ZToge1xyXG5cdFx0XHRcdFx0Ly8gZ2ZtOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gdGFibGVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gYnJlYWtzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gcGVkYW50aWM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzYW5pdGl6ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0TGlzdHM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydHlwYW50czogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuXHRcdENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRDb3JlQ29tcG9uZW50LFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0XHREaXNwb3NhYmxlQ29tcG9uZW50LFxyXG5cdFx0RWRpdG9yQ29tcG9uZW50LFxyXG5cdFx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdFx0RmFuY3lib3hEaXJlY3RpdmUsXHJcblx0XHRHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50LFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0XHRMYWJlbEFzeW5jUGlwZSxcclxuXHRcdExhYmVsRGlyZWN0aXZlLFxyXG5cdFx0TGFiZWxQaXBlLFxyXG5cdFx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXHRcdExvZ2dlckNvbXBvbmVudCxcclxuXHRcdE1hdGNoVmFsaWRhdG9yLFxyXG5cdFx0TW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRNb2RhbFZpZXdDb21wb25lbnQsXHJcblx0XHRQYWdlQ29tcG9uZW50LFxyXG5cdFx0UGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG5cdFx0UGFnZU91dGxldENvbXBvbmVudCxcclxuXHRcdFBheVBhbFdpZGdldENvbXBvbmVudCxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlU3R5bGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdFx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0Q2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxyXG5cdFx0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdENvcmVDb21wb25lbnQsXHJcblx0XHRDdXN0b21Bc3luY1BpcGUsXHJcblx0XHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRcdEVkaXRvckNvbXBvbmVudCxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZhbmN5Ym94RGlyZWN0aXZlLFxyXG5cdFx0R29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxyXG5cdFx0TGFiZWxBc3luY1BpcGUsXHJcblx0XHRMYWJlbERpcmVjdGl2ZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhenlJbWFnZXNEaXJlY3RpdmUsXHJcblx0XHRMb2dnZXJDb21wb25lbnQsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5cdFx0UGFnZUNvbXBvbmVudCxcclxuXHRcdFBheVBhbFdpZGdldENvbXBvbmVudCxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlU3R5bGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdFx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRBdXRoU2VydmljZSxcclxuXHRcdENvbmZpZ1NlcnZpY2UsXHJcblx0XHRDb250cm9sU2VydmljZSxcclxuXHRcdENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RXZlbnREaXNwYXRjaGVyU2VydmljZSxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZhY2Vib29rU2VydmljZSxcclxuXHRcdEZvcm1TZXJ2aWNlLFxyXG5cdFx0R29vZ2xlU2VydmljZSxcclxuXHRcdEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEh0dHBTdGF0dXNDb2RlU2VydmljZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhYmVsU2VydmljZSxcclxuXHRcdExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcblx0XHRMb2dnZXIsXHJcblx0XHRNYXBib3hTZXJ2aWNlLFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRNZW51U2VydmljZSxcclxuXHRcdE1vZGFsU2VydmljZSxcclxuXHRcdE9uY2VTZXJ2aWNlLFxyXG5cdFx0UGFnZUd1YXJkLCBTdGF0aWNHdWFyZCxcclxuXHRcdFBhZ2VTZXJ2aWNlLFxyXG5cdFx0UGF5UGFsU2VydmljZSxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlVXJsUGlwZSxcclxuXHRcdFNlZ21lbnRQaXBlLFxyXG5cdFx0U2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0U2x1Z0FzeW5jUGlwZSxcclxuXHRcdFNsdWdQaXBlLFxyXG5cdFx0U3RvcmFnZVNlcnZpY2UsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaWxvdFNlcnZpY2UsXHJcblx0XHRUcnVzdFBpcGUsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09SRV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==