import { AddReview } from './../../components/models/add-review';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  public getAllReviews() {
    console.log("test call reviews");
    return this.http.get<AddReview[]>("http://localhost:8080/reviews/getAllReviews");
  }

  public createReview(review: any) {
    return this.http.post<AddReview>("http://localhost:8080/reviews/create", review);
  }
}
