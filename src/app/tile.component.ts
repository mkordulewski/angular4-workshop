import {Component, Input} from '@angular/core';
import { Product } from './types/product';

@Component({
  selector: 'my-tile',
  template: `
    <div class="tile">
      <p><em>{{ tile.name }}</em></p>
      <p>Cena:  {{ tile.price }}</p>
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
  }
  p {
    margin-top: 2px;
    margin-bottom: 2px;
  }
  `]
})
export class Tile {
  @Input() public tile: Product;
}
