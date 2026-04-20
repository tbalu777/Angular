import { Component } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-right-counter',
  standalone: false,
  templateUrl: './right-counter.html',
  styleUrl: './right-counter.css',
})
export class RightCounter {
  rightCounter: number = 0;

  constructor (private counterService: Counter) {
    this.rightCounter = this.counterService.counter;
  }

  addOneToCounter(): void {
    this.counterService.addCounter();
    this.rightCounter = this.counterService.counter;
  }
}
