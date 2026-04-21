import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fruit } from '../../models/fruit.model';
import { Router } from '@angular/router';
import { FruitService } from '../../services/fruit-service';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList implements OnInit, OnDestroy {

  subFruit?: Subscription;

  fruitList: Fruit[] = [];

  index: number = 0;

  constructor(private fruitService: FruitService, private router: Router) {

  }

  ngOnInit(): void {
    this.subFruit = this.fruitService.getFruits().subscribe({
      next: (fruits: Fruit[]) => {this.fruitList = fruits},
      error: (error) => {console.log(error)},
      complete: () => {console.log('Fruits loaded')} //mindenképpen lefut, akár sikeres, akár hibát dob
    });
  }

  goToItemDetail(index: number): void {
    this.router.navigate(["items", index]);
  }

  ngOnDestroy(): void {
    this.subFruit?.unsubscribe();
  }
  

}
