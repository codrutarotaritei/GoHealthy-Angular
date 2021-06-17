import { AddProduct } from './../../components/models/add-product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public productName: string;

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    console.log("test call products");
    return this.http.get<AddProduct[]>('http://localhost:8080/menu/');
  }

  public createProduct(product: any) {
    return this.http.post<AddProduct>("http://localhost:8080/menu/create", product);
  }

  public findById(id: any) {
    return this.http.get<AddProduct>("http://localhost:8080/menu/findById");
  }

  public delete(id: number) {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      this.http.delete("http://localhost:8080/menu/delete/{id}");
    }
  }

  public findByNameContaining(name: string) {
    return this.http.get<AddProduct[]>("http://localhost:8080/menu/findByNameContaining?name=" + name);
  }
}
