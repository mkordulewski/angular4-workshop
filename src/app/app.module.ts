import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Tile } from "./tile.component";
import { Tiles } from "./tiles.component";
import {TilesPromo} from "./tiles-promo.component";

@NgModule({
  declarations: [
    AppComponent, Tile, Tiles, TilesPromo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
