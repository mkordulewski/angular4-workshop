import {Component, Input} from '@angular/core';
import { Product } from './types/product';

@Component({
  selector: 'my-tile',
  template: `
    <div class="tile">
      <div class="col image"><img [src]="tile.image"></div>
      <div class="col content">
        <h3>{{ tile.name }} ({{ tile.price }} zł)</h3>
        <p>{{ tile.description }}</p>
      </div>
    </div>
  `,
  styles: [`.tile {
    padding: 10px;
    background: #eee;
    margin: 20px;
    display: flex;
  }
  
  img {
    width: 100px;
  }
    .image {
      width: 120px;
    }
    
  `]
})
export class Tile {
  @Input() public tile: Product;
}
