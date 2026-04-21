import { Injectable } from '@angular/core';
import { Fruit } from '../models/fruit.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  getFruits(): Observable<Fruit[]>{
    return of(this.items)
  }

  getFruit(index: number): Observable<Fruit>{
    return of(this.items[index])
  }

  items: Fruit[] = [
    {price:400 ,name: 'apple', imageURL:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {price:500 ,name: 'pear', imageURL:'https://images.unsplash.com/photo-1601876814226-443511d81ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {price:600 ,name: 'banana', imageURL:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'},
    {price:300 ,name: 'grapes', imageURL:'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'},
    {price:550 ,name: 'peach', imageURL:'https://images.unsplash.com/photo-1595124245030-41448b199d6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    {price:720 ,name: 'melon', imageURL:'https://images.unsplash.com/photo-1563288525-8f1ee0f874a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
  ]
}
