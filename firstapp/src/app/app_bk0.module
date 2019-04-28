import {NgModule} from '@angular/core';
// to display app on browser
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// For Routing
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearch } from './products/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/notFound.Component';

@NgModule({
    // All Modules go here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
         {path: 'products', component: ProductComponent},
         {path: 'products/:id', component: ProductDetailComponent},
         {path: 'orders', component: OrderComponent},
         {path: 'movies', component: MoviesComponent},
         {path: 'home', component: HomeComponent},
         {path: '', redirectTo: 'home', pathMatch: 'full'},
         {path: '**', component: NotFoundComponent},
        ])
    ],

    // All components & pipes
    declarations: [
        AppComponent,
        MoviesComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        StarComponent,
        HomeComponent,
        OrderComponent,
        ProductDetailComponent,
        NotFoundComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All service declare here
    providers: [
        ProductService
    ]
})

export class AppModule {

}
