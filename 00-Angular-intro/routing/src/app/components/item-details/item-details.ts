import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FruitService } from '../../services/fruit-service';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-item-details',
  standalone: false,
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetails {
  fruit?: Fruit;

  constructor(private router: Router, private fruitService: FruitService) {

  }

  navigateBackToItems(): void{
    this.router.navigate(['items']);
}

}


