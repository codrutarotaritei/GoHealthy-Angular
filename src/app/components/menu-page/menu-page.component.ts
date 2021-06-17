import { AddProductComponent } from './add-product/add-product.component';
import { ProductServiceService } from './../../services/product/product-service.service';
import { AddProduct } from './../models/add-product';
import { Component, ElementRef, Inject, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  products: AddProduct[];
  public cart: boolean = false;
  public filter: boolean = false;
  

  constructor(
    private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.products=response;
  }

  toggleCart() {
    this.cart = !this.cart;
  }

  toggleFilter() {
    this.filter = !this.filter;
  }
}
