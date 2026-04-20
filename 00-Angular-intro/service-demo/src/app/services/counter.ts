import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  private _counter = 10;
  addCounter(): void{
    this._counter++;
  }
  get counter(): number {
    return this._counter;
  }
}
