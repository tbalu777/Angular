import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LeftCounter } from './components/left-counter/left-counter';
import { RightCounter } from './components/right-counter/right-counter';

@NgModule({
  declarations: [App, LeftCounter, RightCounter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
