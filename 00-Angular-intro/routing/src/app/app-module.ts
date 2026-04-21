import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { ItemList } from './components/item-list/item-list';
import { ItemDetails } from './components/item-details/item-details';
import { PageNotFound } from './components/page-not-found/page-not-found';

@NgModule({
  declarations: [App, Home, Footer, Navbar, ItemList, ItemDetails, PageNotFound],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
