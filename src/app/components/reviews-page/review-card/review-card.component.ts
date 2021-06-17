import { HttpClient } from '@angular/common/http';
import { ReviewService } from './../../../services/review/review.service';
import { AddReview } from './../../models/add-review';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input() reviews: AddReview;

  constructor(
    private reviewService: ReviewService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.reviews = response;
  } 

}
