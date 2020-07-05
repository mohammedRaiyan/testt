import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DemoComponent } from './demo/demo.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CountdownModule } from 'ngx-countdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Demo1Component } from './demo1/demo1.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DemoComponent,
    UserheaderComponent,
    FooterComponent,
    ShopComponent,
    WishlistComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    BlogDetailsComponent,
    Demo1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
