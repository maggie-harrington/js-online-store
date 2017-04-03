import { Component } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  constructor(private router: Router) {}

  products: Product[] = [
    new Product("Product1", "Manufacturer1", "Description for Product 1, this is a really great item.", 1),
    new Product("Product2", "Manufacturer2", "Description for Product 2, this is a really great item.", 2),
    new Product("Product3", "Manufacturer3", "Description for Product 3, this is a really great item.", 3),
    new Product("Product4", "Manufacturer4", "Description for Product 4, this is a really great item.", 4),
    new Product("Product5", "Manufacturer5", "Description for Product 5, this is a really great item.", 5),
    new Product("Product6", "Manufacturer6", "Description for Product 6, this is a really great item.", 6)
  ];

  goToDetailPage(clickedProduct: Product) {
    this.router.navigate(['products', clickedProduct.id]);
  };
}
