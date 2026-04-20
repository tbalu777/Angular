import { Component, signal } from '@angular/core';

interface User{
  name: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('travel-blog');

  // users: User[] | undefined;

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  users: User[] = [
    { name: 'Alice', age: 30, isActive: true },
    { name: 'Bob', age: 25, isActive: false },
    { name: 'Charlie', age: 35, isActive: true }
  ];
}
