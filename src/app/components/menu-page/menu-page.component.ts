import { AddProductComponent } from './add-product/add-product.component';
import { ProductServiceService } from './../../services/product/product-service.service';
import { AddProduct } from './../models/add-product';
import { Component, ElementRef, Inject, OnInit, ViewChild, Input } from '@angular/core';
import { ModalService } from '../_modal/';
import { FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  products: AddProduct[];
  public cart: boolean = false;
  public filter: boolean = false;

  formGroup: FormGroup;
  product: AddProduct;
  response: any;
  bodyText: string;
  

  constructor(
    private productService: ProductServiceService,
    private modalService: ModalService,
    private router: Router) {
      this.product = new AddProduct;
     }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  onSubmit() {

    if (this.nameIsValid() == true) {
    this.productService.createProduct(this.product).subscribe(data => {
      this.response = data;
    });
    // this.productService.getAllProducts().subscribe(response => {
    //       this.products = response;
    //     });
    this.router.navigate(['/menu']);
  }

    
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

  openModal(id: string) {
        this.modalService.open(id);
        


    }

    closeModal(id: string) {
        this.modalService.close(id);

    }

    public nameIsValid() {
    let name = this.product.name;

    if (name != null) {
      return true;


    } else {
      alert("Please insert all the values");
      // console.log("Bad");
      return false;
    } 
  }
}
