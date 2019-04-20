import { Component } from '@angular/core';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html'
})

export class ProductComponent {
  title: string = '*****Product App*****';
  showTable: boolean = true;
  showImage: boolean = false;
  userInput: string = 'Leaf';
  products: any[] = [
    {
        _id: '5a05dacc734d1d68d42d31f3',
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.5,
        imageUrl: 'https://i.ibb.co/TrR7jkM/hammer.png'
      },
      {
        _id: '5a05daec734d1d68d42d32ca',
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2016',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'https://i.ibb.co/HD3RHMW/videogame.jpg'
      },
      {
        _id: '5a05db08734d1d68d42d3300',
        productId: 3,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2016',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'https://i.ibb.co/TrR7jkM/hammer.png'
      }
  ];

  onImageChange(): void {
    this.showImage = !this.showImage;
  }
}
