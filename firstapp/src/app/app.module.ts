import {NgModule} from '@angular/core';
// to display app on browser
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/notFound.Component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { MusicModule } from './movies/music.module';

@NgModule({
    // All Modules go here
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ProductModule,
        MusicModule
    ],

    // All components & pipes
    declarations: [
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
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
