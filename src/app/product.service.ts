import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    return PRODUCTS;
  }

  getProductById(productId: number) {
    for (var i = 0; i <= PRODUCTS.length - 1; i ++) {
      if (PRODUCTS[i].id === productId) {
        return PRODUCTS[i];
      }
    }
  }
}
