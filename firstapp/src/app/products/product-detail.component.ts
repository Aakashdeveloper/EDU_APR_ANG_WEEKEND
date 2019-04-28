import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {

    id: number;
   details: IProduct[];

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private router: Router) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.productService.getDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}


/*
 name: string;
    imageUrl: string;
    desc: string;

this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.imageUrl = data['img'];
                this.desc = data['desc'];
            });
*/
