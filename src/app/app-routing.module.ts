import { AddReview } from './components/models/add-review';
import { EditProductComponent } from './components/menu-page/edit-product/edit-product.component';
import { AddProductComponent } from './components/menu-page/add-product/add-product.component';
import { AddProduct } from './components/models/add-product';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { ReviewsPageComponent } from './components/reviews-page/reviews-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OurStoryPageComponent } from './components/our-story-page/our-story-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LogInAfterRegisterComponent } from './components/log-in-after-register/log-in-after-register.component';
import { AddReviewComponent } from './components/reviews-page/add-review/add-review.component';

const routes: Routes = [
{
  path: '',
  component: HomePageComponent,
  pathMatch: 'full'
},
{
  path: 'menu',
  component: MenuPageComponent
},
{
  path: 'our-story',
  component: OurStoryPageComponent
},
{
  path: 'reviews',
  component: ReviewsPageComponent
},
{
  path: 'contact',
  component: ContactPageComponent
},
{
  path: 'log-in',
  component: LogInPageComponent
},
{
  path: 'sign-in',
  component: SignInPageComponent
},
{
  path: 'cart',
  component: CartPageComponent
},
{
  path: 'log-in-after-register',
  component: LogInAfterRegisterComponent
},
{
  path: 'add-product',
  component: AddProductComponent
},
{
  path: 'products/:id',
  component: EditProductComponent
},
{
  path: 'add-review',
  component: AddReviewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
