import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IData } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private myCart = new BehaviorSubject<IData>()

  constructor() { }
  setMyCart(newItem: []) {
    this.myCart.next(newItem)
  }
}
