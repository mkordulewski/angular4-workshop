import {Component, Input} from '@angular/core';
import { Tile } from "./tile.component";

@Component({
  selector: 'tiles-promo',
  template: `
    <div class="tiles-promo">
      <h2>Promowane produkty:</h2>
      <tiles [tiles]="tiles"></tiles>  
    </div>
  `,
  styles: [`.tiles-promo {
    border-bottom: 1px solid #000;
    margin-bottom: 15px;
  }`]
})
export class TilesPromo {
  @Input() public tiles: Tile[];
}
