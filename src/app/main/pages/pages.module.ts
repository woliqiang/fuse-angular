import { NgModule } from '@angular/core';

import { LoginModule } from 'app/main/pages/authentication/login/login.module';
import { ForgotPasswordModule } from 'app/main/pages/authentication/forgot-password/forgot-password.module';
import { ProfileModule } from 'app/main/pages/profile/profile.module';
import { AuthService } from './authentication/auth/auth-service.service';
import { AuthGuard } from './authentication/auth/auth-guard.service';

@NgModule({
    imports: [
        // Authentication
        LoginModule,
        ForgotPasswordModule,

        // Profile
        ProfileModule,


    ],
    providers: [
        AuthGuard, AuthService
    ]
})
export class PagesModule
{

}
