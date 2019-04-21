import {PipeTransform, Pipe} from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'productSearch'
})

export class ProductSearch implements PipeTransform {
    transform(value: IProduct[], userSearch: string ) {
        userSearch = userSearch ? userSearch.toLowerCase() : null;
        return userSearch ? value.filter((product) =>
        ((product.productName.toLowerCase().indexOf(userSearch) !== -1) ||
         (product.productCode.toLowerCase().indexOf(userSearch) !== -1)
         )) : value;
    }
}
