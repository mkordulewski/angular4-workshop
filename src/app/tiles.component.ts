import {Component, Input} from '@angular/core';
import { Tile } from "./tile.component";

@Component({
  selector: 'tiles',
  template: `
  <div>
      <div>
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
       </div>

    <div *ngFor="let item of filteredTiles">
      <div class="view">
        <my-tile [tile]="item"></my-tile>
      </div>
    </div>
     </div>
  `,
  styles: [`:host {
    
  }`]
})
export class Tiles {
  @Input() public tiles: Tile[];
  filteredTiles = this.tiles;

  onKey(event: any) { // without type info
    this.filteredTiles = this.tiles.filter(filterByName);
    function filterByName(value) {
      return  value.name.indexOf(event.target.value) !== -1

    }
  }
}
