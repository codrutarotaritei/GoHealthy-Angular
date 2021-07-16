import { AddReview } from './../models/add-review';
import { ReviewService } from './../../services/review/review.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit {

  reviews: AddReview[];
  review: AddReview;
  response: any;

  constructor(
    private reviewService: ReviewService,
    private modalService: ModalService,
    private router: Router
  ) {
    this.review = new AddReview;
   }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }

  onSubmit() {

    if (this.reviewNameIsValid() == true) {
    this.reviewService.createReview(this.review).subscribe(data => {
      this.response = data;
    });
    this.reviewService.getAllReviews().subscribe(response => {
          this.reviews = response;
        });
        this.router.navigate(['/reviews']);
  }

    
  }

  handleSuccessfulResponse(response) {
    this.reviews=response;
  }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    public reviewNameIsValid() {
    let name = this.review.name;

    if (name != null) {
      return true;


    } else {
      alert("Please insert all the values");
      // console.log("Bad");
      return false;
    } 
  }

}
