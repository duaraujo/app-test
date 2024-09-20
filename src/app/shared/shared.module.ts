import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LimitToPipe } from './pipes/limit-to.pipe';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { LayoutComponent } from './layout/layout.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
    imports: [
        RouterModule,
        CustomMaterialModule,
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
        CustomMaterialModule,
        LimitToPipe,
        YesNoPipe
    ]
})
export class SharedModule { }
