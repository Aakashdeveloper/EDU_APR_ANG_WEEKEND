import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { MusicComponent } from './movies/music.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.Component';
import { RouterGaurds } from './products/product-routergaurd';


const routes: Routes = [
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', canActivate: [RouterGaurds],  component: ProductDetailComponent},
    {path: 'orders', component: OrderComponent},
    {path: 'movies', component: MusicComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [RouterGaurds],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
