import { Component } from '@angular/core';
import boutOrdersCsv from 'raw-loader!./bout-orders-data.csv';

@Component({
  selector: 'app-bout-orders',
  templateUrl: './bout-orders.component.html',
  styleUrls: ['./bout-orders.component.less']
})

// const boutOrders = {
//   boundOrders: boutOrders
// }
export class BoutOrdersComponent {
  boutOrders = boutOrders

}
