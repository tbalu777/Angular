import { Component } from '@angular/core';
import { Counter } from '../../services/counter';

@Component({
  selector: 'app-left-counter',
  standalone: false,
  templateUrl: './left-counter.html',
  styleUrl: './left-counter.css',
})
export class LeftCounter {
  leftCounter: number = 0;

  constructor(private counterService: Counter) {
    this.leftCounter = this.counterService.counter;
  }

  addOneToCounter(): void {
    this.counterService.addCounter();
    this.leftCounter = this.counterService.counter;  
  }


}
