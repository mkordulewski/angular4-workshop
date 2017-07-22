import {Component, Input} from '@angular/core';
import { Product } from './types/product';

@Component({
  selector: 'my-tile',
  template: `
    <div class="tile">Product: <em>{{ tile.name }} - {{ tile.price }}</em>
      <img [src]="tile.image">
      <p>{{ tile.description }}</p>
    </div>
  `,
  styles: [`:host {
    display: block;
    padding: 10px;
    background: #eee;
    margin: 5px;
    float: left;
    width: 180px;
  }`]
})
export class Tile {
  @Input() public tile: Product;
}
