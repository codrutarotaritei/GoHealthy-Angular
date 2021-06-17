import { HttpClient } from '@angular/common/http';
import { AddProduct } from './../../models/add-product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() products: AddProduct[];

  term: string;
  

  constructor(
    private productService: ProductServiceService,
    private http: HttpClient) { }

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
      this.http.delete("http://localhost:8080/menu/delete?id=" + id).subscribe(response => {
        console.log("deleted");
        this.productService.getAllProducts().subscribe(response => {
          this.products = response;
        });
      });
    }
  }

}
