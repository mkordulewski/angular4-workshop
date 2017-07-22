import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = [
    {name: 'Product 1', promoted: true},
    {name: 'Product 2', promoted: false},
    {name: 'Product 3', promoted: true},
    {name: 'Product 4', promoted: false}
  ]
}
