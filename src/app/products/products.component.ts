import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IData } from '../types/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsRequestsService } from '../services/products-requests.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, ProductCardComponent, ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  productList: IData[] = [];

  constructor(private productsAPIrequest: ProductsRequestsService) { }

  ngOnInit() {
    this.productsAPIrequest.getProducts().subscribe((data: any) => { this.productList = data.products })
  }

}








