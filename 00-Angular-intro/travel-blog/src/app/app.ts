import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('travel-blog');

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
