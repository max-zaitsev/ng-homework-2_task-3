import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FlipCardsModule} from "./flip-cards/flip-cards.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FlipCardsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
