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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ComformAddressComponent } from './comform-address/comform-address.component';



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
    LoginComponent,
    RegisterComponent,
    PrivacyPolicyComponent,
    MyProfileComponent,
    ComformAddressComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
