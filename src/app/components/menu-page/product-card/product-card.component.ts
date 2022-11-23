 import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddProduct } from './../../models/add-product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../_modal';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() products: AddProduct[];

  term: string;

  formGroup: FormGroup;
  product: AddProduct;

  myForm = this.formBuilder.group({
    name: '',
    pictureUrl: '',
    ingredients: '',
    price: null
  });
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: ModalService) { }

  ngOnInit(): void {
     this.productService.getAllProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.products=response;
  }

  deleteProduct(id: number) {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      this.httpClient.delete("http://localhost:8080/menu/delete?id=" + id).subscribe(response => {
        console.log("deleted");
        this.productService.getAllProducts().subscribe(response => {
          this.products = response;
        });
      });
    }
  }

  update() {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.httpClient.put<AddProduct>('http://localhost:8080/menu/update/' + id, this.myForm.value).subscribe(response => {
      console.log(response);
      this.productService.getAllProducts().subscribe(response => {
          this.products = response;
        });
    });
    this.router.navigate(['/menu']);
  }

  openModal(id: string) {

    const productId = this.activatedRoute.snapshot.params.id;
    this.httpClient.get<AddProduct>('http://localhost:8080/menu/findById?id=' + id).subscribe(response => {
      console.log(response);
      this.myForm.patchValue(response);
    });
    
    
        this.modalService.open(id);
        


    }

    closeModal(id: string) {
        this.modalService.close(id);

    }


    

}
