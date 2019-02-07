/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';
import { CORE_CONFIG } from './config/core.config';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { CoreRouting } from './core.routing';
import { DisposableComponent } from './disposable/disposable.component';
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
                ],
                declarations: [
                    AssetPipe,
                    ClickOutsideDirective,
                    ControlComponent,
                    CoreModuleComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    DisposableComponent,
                    ExistsValidator,
                    FancyboxDirective,
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
                    PublicPipe,
                    RoutePipe,
                    SafeStylePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SlugAsyncPipe,
                    SlugPipe,
                    TranslatePipe,
                    TrustPipe,
                    UppercaseDirective,
                ],
                exports: [
                    AssetPipe,
                    ClickOutsideDirective,
                    ControlComponent,
                    CoreModuleComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    ExistsValidator,
                    FancyboxDirective,
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
                    PublicPipe,
                    RoutePipe,
                    SafeStylePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SlugAsyncPipe,
                    SlugPipe,
                    TranslatePipe,
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
                    FormService,
                    HighlightPipe,
                    HttpStatusCodeService,
                    ImagePipe,
                    LabelPipe,
                    LabelService,
                    LocalStorageService,
                    Logger,
                    MatchValidator,
                    MenuService,
                    ModalService,
                    OnceService,
                    PageGuard, StaticGuard,
                    PageService,
                    PublicPipe,
                    RoutePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SessionStorageService,
                    SlugAsyncPipe,
                    SlugPipe,
                    StorageService,
                    TranslatePipe,
                    TrustPipe,
                ],
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYXJ0aXNhbi9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUs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U0FBUztvQkFDVCxtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCx1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixVQUFVO29CQUNWLFNBQVM7b0JBQ1QsYUFBYTtvQkFDYixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixRQUFRO29CQUNSLGFBQWE7b0JBQ2IsU0FBUztvQkFDVCxrQkFBa0I7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDOUUsU0FBUztvQkFDVCxXQUFXO29CQUNYLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2Ysc0JBQXNCO29CQUN0QixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLFNBQVM7b0JBQ1QsU0FBUztvQkFDVCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsTUFBTTtvQkFDTixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixXQUFXO29CQUNYLFNBQVMsRUFBRSxXQUFXO29CQUN0QixXQUFXO29CQUNYLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxhQUFhO29CQUNiLFNBQVM7aUJBQ1Q7YUFDRDs7OztZQUt1QyxVQUFVLHVCQUEvQyxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3JlQ29uZmlnLCBDT1JFX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL2NvcmUuY29uZmlnJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQvZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvcmVSb3V0aW5nIH0gZnJvbSAnLi9jb3JlLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vZm9ybXMvY29udHJvbHMvY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhpc3RzVmFsaWRhdG9yIH0gZnJvbSAnLi9mb3Jtcy9leGlzdHMudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm1zL2Zvcm0uc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi9mb3Jtcy9tYXRjaC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBVcHBlcmNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm1zL3VwcGVyY2FzZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZm9ybWF0dGVyL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhYmVsQXN5bmNQaXBlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwtYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGFiZWxQaXBlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vbW9kZWxzL2V2ZW50LWRpc3BhdGNoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuL29uY2Uvb25jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vcGFnZXMvcGFnZS5ndWFyZCc7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlcy9wYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0aWNHdWFyZCB9IGZyb20gJy4vcGFnZXMvc3RhdGljLmd1YXJkJztcclxuaW1wb3J0IHsgQXNzZXRQaXBlIH0gZnJvbSAnLi9waXBlcy9hc3NldC5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IFB1YmxpY1BpcGUgfSBmcm9tICcuL3BpcGVzL3B1YmxpYy5waXBlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlZ21lbnQucGlwZSc7XHJcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4vcm91dGVzL3JvdXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBTbHVnQXN5bmNQaXBlIH0gZnJvbSAnLi9zbHVncy9zbHVnLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBTbHVnUGlwZSB9IGZyb20gJy4vc2x1Z3Mvc2x1Zy5waXBlJztcclxuaW1wb3J0IHsgQ29va2llU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS1zdHlsZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVVybFBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBUcnVzdFBpcGUgfSBmcm9tICcuL3RydXN0L3RydXN0LnBpcGUnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2NsaWNrLW91dHNpZGUvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGYW5jeWJveERpcmVjdGl2ZSB9IGZyb20gJy4vdWkvZmFuY3lib3gvZmFuY3lib3guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGF6eUltYWdlc0RpcmVjdGl2ZSB9IGZyb20gJy4vdWkvbGF6eS1pbWFnZXMvbGF6eS1pbWFnZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdENvcmVSb3V0aW5nLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0XHRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0Q29yZU1vZHVsZUNvbXBvbmVudCxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdERlZmF1bHRDb250ZW50RGlyZWN0aXZlLFxyXG5cdFx0RGlzcG9zYWJsZUNvbXBvbmVudCxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZhbmN5Ym94RGlyZWN0aXZlLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0XHRMYWJlbEFzeW5jUGlwZSxcclxuXHRcdExhYmVsRGlyZWN0aXZlLFxyXG5cdFx0TGFiZWxQaXBlLFxyXG5cdFx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXHRcdExvZ2dlckNvbXBvbmVudCxcclxuXHRcdE1hdGNoVmFsaWRhdG9yLFxyXG5cdFx0TW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRNb2RhbFZpZXdDb21wb25lbnQsXHJcblx0XHRQYWdlQ29tcG9uZW50LFxyXG5cdFx0UGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG5cdFx0UGFnZU91dGxldENvbXBvbmVudCxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlU3R5bGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpcGUsXHJcblx0XHRVcHBlcmNhc2VEaXJlY3RpdmUsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0XHRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0Q29yZU1vZHVsZUNvbXBvbmVudCxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdERlZmF1bHRDb250ZW50RGlyZWN0aXZlLFxyXG5cdFx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdFx0RmFuY3lib3hEaXJlY3RpdmUsXHJcblx0XHRIaWdobGlnaHRQaXBlLFxyXG5cdFx0SW1hZ2VQaXBlLFxyXG5cdFx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRcdExhYmVsQXN5bmNQaXBlLFxyXG5cdFx0TGFiZWxEaXJlY3RpdmUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMYXp5SW1hZ2VzRGlyZWN0aXZlLFxyXG5cdFx0TG9nZ2VyQ29tcG9uZW50LFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdE1vZGFsVmlld0NvbXBvbmVudCxcclxuXHRcdFBhZ2VDb21wb25lbnQsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVN0eWxlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdFx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRBdXRoU2VydmljZSxcclxuXHRcdENvbmZpZ1NlcnZpY2UsXHJcblx0XHRDb250cm9sU2VydmljZSxcclxuXHRcdENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RXZlbnREaXNwYXRjaGVyU2VydmljZSxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZvcm1TZXJ2aWNlLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEh0dHBTdGF0dXNDb2RlU2VydmljZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhYmVsU2VydmljZSxcclxuXHRcdExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcblx0XHRMb2dnZXIsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdE1lbnVTZXJ2aWNlLFxyXG5cdFx0TW9kYWxTZXJ2aWNlLFxyXG5cdFx0T25jZVNlcnZpY2UsXHJcblx0XHRQYWdlR3VhcmQsIFN0YXRpY0d1YXJkLFxyXG5cdFx0UGFnZVNlcnZpY2UsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IENvcmVDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19