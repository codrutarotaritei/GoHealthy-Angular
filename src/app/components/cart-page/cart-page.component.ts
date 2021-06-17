import { ProductServiceService } from 'src/app/services/product/product-service.service';
import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../models/add-product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products: AddProduct[];
  term: string;

  constructor(
    private productService: ProductServiceService,
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.products=response;
  }

}
