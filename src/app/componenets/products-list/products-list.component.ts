import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];

  constructor() { 
    this.products.push( new Product("Duona", 3))
    this.products.push( new Product("Pienas", 1))
    this.products.push( new Product("Sviestas", 2))
    this.products.push( new Product("Alus", 4))
  }

  ngOnInit(): void {
  }

}
