import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Countermodule } from './counter/counter.module';
import { HeroesModules } from './heroes/components/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeroesModules, Countermodule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
