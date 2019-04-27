import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal}', 'h4{color:tomato}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  title: string = '*****Product App*****';
  showTable: boolean = true;
  showImage: boolean = false;
  userInput: string ;
  imageWidth: number = 100;
  products: IProduct[];

  constructor(private produtService: ProductService) {

  }

  ngOnInit(): void {
    this.produtService.getProducts()
      .subscribe((data) => this.products = data);
  }

  onImageChange(): void {
    this.showImage = !this.showImage;
  }

  onMessageRecive(message: string): void {
    this.title = '*****Product  list >>>>>>>' + message;
  }
}


// this.products = this.produtService.getProducts()
