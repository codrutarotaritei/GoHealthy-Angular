import { ReviewService } from './../../../services/review/review.service';
import { AddReview } from './../../models/add-review';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  formGroup: FormGroup;
  review: AddReview;
  response: any;
  

  constructor(
    public reviewService: ReviewService,
    private router: Router) {
      this.review = new AddReview;
     }

  ngOnInit(): void { 
  }

  onSubmit() {
    this.reviewService.createReview(this.review).subscribe(data => {
      this.response = data;
    });

    this.router.navigate(['/reviews']);
  }

}
