import {NgModule} from '@angular/core';
// to display app on browser
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All Modules go here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All components & pipes
    declarations: [
        AppComponent,
        MoviesComponent,
        ProductComponent
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
