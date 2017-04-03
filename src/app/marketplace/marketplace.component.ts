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

  products: Product[];

  goToDetailPage(clickedProduct: Product) {
    this.router.navigate(['products', clickedProduct.id]);
  };
}
