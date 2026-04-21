import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ItemList } from './components/item-list/item-list';
import { ItemDetails } from './components/item-details/item-details';
import { PageNotFound } from './components/page-not-found/page-not-found';

const routes: Routes = [
  { path: "", component: Home },
  { path: "items", component: ItemList },
  { path: "details", component: ItemDetails},
  { path: "**", component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
