import { ProductServiceService } from 'src/app/services/product/product-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProduct } from '../../models/add-product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm = this.formBuilder.group({
    name: '',
    pictureUrl: '',
    ingredients: '',
    price: null
  });

  products: AddProduct[];
  formGroup: FormGroup;
  product: AddProduct;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductServiceService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);

    const id = this.activatedRoute.snapshot.params.id;
    this.httpClient.get<AddProduct>('http://localhost:8080/menu/findById?id=' + id).subscribe(response => {
      console.log(response);
      this.myForm.patchValue(response);
    });
  }

  update() {
    const id = this.activatedRoute.snapshot.params.id;
    this.httpClient.put<AddProduct>('http://localhost:8080/menu/update/' + id, this.myForm.value).subscribe(response => {
      console.log(response);
      this.productService.getAllProducts().subscribe(response => {
          this.products = response;
        });
    });
    this.router.navigate(['/menu']);
  }

  

}
