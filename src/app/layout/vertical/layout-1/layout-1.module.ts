import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';
import { VerticalLayout1Component } from './layout-1.component';


@NgModule({
    declarations: [
        VerticalLayout1Component
    ],
    imports: [
        RouterModule,
        FuseSharedModule,
        FuseSidebarModule,
        ContentModule,
        NavbarModule,
        ToolbarModule
    ],
    exports: [
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module {
}
