import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { IData } from '../types/product';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductsComponent, NgClass, RouterLink, ProductDetailsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem !: IData;

  constructor(private route: Router, private counterService: CounterService) {

  }

  counterCart = 0
  // constructor(private counterService: CounterService) { }



  // handleRedirect(idVal: number) {
  //   this.route.navigate(['/product-details', idVal])
  // }
  ngOnInit() {
    this.counterService.getCounter().subscribe((data) => this.counterCart = data)
  }
  addItem() {
    // console.log("ADDED")
    this.counterService.setCounter(this.counterCart + 1)
  }
}
