import { ProductServiceService } from 'src/app/services/product/product-service.service';
import { AddProduct } from './../../models/add-product';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formGroup: FormGroup;
  product: AddProduct;
  response: any;
  bodyText: string;

  constructor(
    public productService: ProductServiceService, 
    private router: Router) {
    this.product = new AddProduct;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.createProduct(this.product).subscribe(data => {
      this.response = data;
    });

    this.router.navigate(['/menu']);
  }

}
