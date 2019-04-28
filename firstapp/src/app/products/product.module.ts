import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearch } from './productSearch.pipe';
import { ProductDetailComponent } from './product-detail.component';

import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        ProductDetailComponent,
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
