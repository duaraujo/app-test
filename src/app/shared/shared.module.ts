import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LimitToPipe } from './pipes/limit-to.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LimitToPipe,
        YesNoPipe,
        LayoutComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        LimitToPipe,
        YesNoPipe
    ]
})
export class SharedModule { }
