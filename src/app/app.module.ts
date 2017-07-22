import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Tile } from "./tile.component";
import { Tiles } from "./tiles.component";

@NgModule({
  declarations: [
    AppComponent, Tile, Tiles
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
