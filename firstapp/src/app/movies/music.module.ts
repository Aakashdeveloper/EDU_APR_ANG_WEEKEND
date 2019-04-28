import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MusicComponent } from './music.component';
import { AppRoutingModule } from '../app-routing.module';
import { MusicService } from './music.service';


@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        MusicComponent
    ],
    providers: [
        MusicService
    ]
})

export class MusicModule {

}
