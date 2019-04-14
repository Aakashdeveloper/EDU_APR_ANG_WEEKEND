import {NgModule} from '@angular/core';
// to display app on browser
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
    // All Modules go here
    imports: [
        BrowserModule
    ],

    // All components & pipes
    declarations: [
        AppComponent,
        MoviesComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All service declare here
    providers: []
})

export class AppModule {

}
