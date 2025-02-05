import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0)
  constructor() { }
  getCounter() {
    return this.counter.asObservable();
  }

  setCounter(newCounter: number) {
    // this.counter = newCounter XXXX
    this.counter.next(newCounter);
  }

}
