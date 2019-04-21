import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number, pname: string) {
        value = value - 5;
        return value;
    }
}
