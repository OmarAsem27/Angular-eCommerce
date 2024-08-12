import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'OAstore';
}
