import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        HeroComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeroComponent,
        ContentComponent
    ]
})
export class HomeModule { }