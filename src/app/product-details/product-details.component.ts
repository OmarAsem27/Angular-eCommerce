import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IData } from '../types/product';
import { ProductsComponent } from '../products/products.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsRequestsService } from '../services/products-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ProductsComponent, ProductCardComponent, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  // productList: IData[] = [];
  @Input() id !: string;
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private productsAPIrequest: ProductsRequestsService, private route: Router) { }


  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productsAPIrequest.getProductDetails(id).subscribe((data) => {
      this.productDetails = data
    }, (error) => {
      if (error.status === 404) {
        this.route.navigate(['/'])
      }
    });
  }
}
