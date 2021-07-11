import { JwtClientService } from './services/jwt/jwt-client.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomFooterComponent } from './components/bottom-footer/bottom-footer.component';
import { OurStoryPageComponent } from './components/our-story-page/our-story-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { ReviewsPageComponent } from './components/reviews-page/reviews-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInAfterRegisterComponent } from './components/log-in-after-register/log-in-after-register.component';
import { AlwaysAuthGuard } from './components/guards/always-auth.guard';
import { ProductCardComponent } from './components/menu-page/product-card/product-card.component';
import { AddProductComponent } from './components/menu-page/add-product/add-product.component';
import { ReviewCardComponent } from './components/reviews-page/review-card/review-card.component';
import { EditProductComponent } from './components/menu-page/edit-product/edit-product.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AddReviewComponent } from './components/reviews-page/add-review/add-review.component';
import { ModalModule } from './components/_modal/';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    BottomFooterComponent,
    OurStoryPageComponent,
    MenuPageComponent,
    ReviewsPageComponent,
    ContactPageComponent,
    LogInPageComponent,
    SignInPageComponent,
    NavbarComponent,
    HomePageComponent,
    CartPageComponent,
    LogInAfterRegisterComponent,
    ProductCardComponent,
    AddProductComponent,
    ReviewCardComponent,
    EditProductComponent,
    SearchFilterPipe,
    AddReviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    RouterModule.forRoot([
      {path: '', component: MenuPageComponent},
      {path: 'products/:id', component: EditProductComponent}
    ]),
    BrowserAnimationsModule,
    
    
  ],
  providers: [
    JwtClientService,
    AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
