import {Component, Input} from '@angular/core';
import { Product } from './types/product';
import { Tile } from "./tile.component";

@Component({
  selector: 'tiles',
  template: `
    <div *ngFor="let item of tiles">
      <div class="view">
        <my-tile [tile]="item"></my-tile>
      </div>
    </div>
  `,
  styles: [`:host {
    
  }`]
})
export class Tiles {
  @Input() public tiles: Tile[];
}
