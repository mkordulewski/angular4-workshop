import { Component} from '@angular/core';
import { Product } from './types/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Product[] = [
    {name: 'Product 1', promoted: true, price: 2.34},
    {name: 'Product 2', promoted: false, price: 11.30},
    {name: 'Product 3', promoted: true, price: 312.99},
    {name: 'Product 4', promoted: false, price: 30}
  ]
}
