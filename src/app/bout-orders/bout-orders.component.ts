import { Component } from '@angular/core';
import boutOrdersCsv from 'raw-loader!./bout-orders-data.csv';


let rawRows: string[][] = boutOrdersCsv.split("\n").map(row=>row.split(',').map(s=>s.trim()));
let headers = rawRows[0];
let data = rawRows.slice(1);

const orderIndex: Record<string, number> = Object.fromEntries(headers.map((s,i)=>[s,i]));

const boutOrders: string[][] =
  headers.map(n=>
      data.map(r => r[orderIndex[n]]).filter(s=>s)
  );

@Component({
  selector: 'bout-orders',
  templateUrl: './bout-orders.component.html',
  styleUrls: ['./bout-orders.component.less']
})


export class BoutOrdersComponent {
  boutOrders: string[][] = boutOrders
  orderIndex: any = orderIndex


}
