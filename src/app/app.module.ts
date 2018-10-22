import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

// Firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { APP_BASE_HREF } from '@angular/common';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from 'app/fuse-config';

import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { FuseProgressBarModule, FuseSidebarModule } from '@fuse/components';
import { CONFIG } from 'environments/environment';
import { AuthGuard } from './main/pages/authentication/auth/auth-guard.service';
import { AuthService } from './main/pages/authentication/auth/auth-service.service';
import { UrlRoute } from '@fuse/common/Routes';

const appRoutes: Routes = [
    {
        path: UrlRoute.apps,
        canActivate: [AuthGuard],
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path: UrlRoute.pages,
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    {
        path: '**',
        redirectTo: 'pages/auth/login'
        // redirectTo: 'apps/dashboards/analytics'
    }
];


export const firebaseConfig: FirebaseAppConfig = CONFIG.firebaseConfig;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // firebase

        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,


        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthGuard, AuthService
    ]
})
export class AppModule {
}
