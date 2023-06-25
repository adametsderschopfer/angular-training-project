import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], searchQuery: string): IProduct[] {
    if (!searchQuery.length) {
      return products;
    }

    return products.filter(product =>
      new RegExp(searchQuery.toLowerCase()).test(product.title.toLowerCase()));
  }
}
