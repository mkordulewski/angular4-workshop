import { Component} from '@angular/core';
import { Product } from './types/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Product[] = [
    {
      name: 'Logan',
      promoted: true,
      price: 2.34,
      description: 'Polecamy zakup',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41K154iAmLL._SL150_.jpg',
      tags: ['logan', 'film']
    },
    {
      name: 'Kong Skull Island',
      promoted: false,
      price: 11.30,
      description: 'Kup to',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51KSVHO3h1L._SL150_.jpg',
      tags: ['king', 'kong']
    },
    {
      name: 'F8',
      promoted: true,
      price: 312.99,
      description: 'Vin Diesel, Dwayne \'The Rock\' Johnson',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51HowSWOpHL._SL150_.jpg',
      tags: ['furious', 'fast']
    },
    {
      name: 'John Wick 2',
      promoted: false,
      price: 30,
      description: 'Zajefajny produkt',
      image: 'https://images-na.ssl-images-amazon.com/images/I/514y53H8YqL._SL150_.jpg',
      tags: ['keanu', 'reeves']
    }
  ];

  promotedItems = this.items.filter(item => item.promoted == true);
}
