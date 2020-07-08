import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { Demo1Component } from './demo1/demo1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ComformAddressComponent } from './comform-address/comform-address.component';


const routes: Routes = [
  {
    path:"index",component:IndexComponent
  },
  {path:'demo',component:DemoComponent},
  {path:'header',component:UserheaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'shop',component:ShopComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'single',component:SingleProductComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'blogdetails',component:BlogDetailsComponent},
  {path:'demo1',component:Demo1Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'privary-policy',component:PrivacyPolicyComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'confirm-address',component:ComformAddressComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
