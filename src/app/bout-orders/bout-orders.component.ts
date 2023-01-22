import { Component } from '@angular/core';
import boutOrdersCsv from 'raw-loader!./bout-orders-data.csv';


let rawRows: string[][] = boutOrdersCsv.split("\n").map(row=>row.split(',').map(s=>s.trim()));
let headers = rawRows[0];
let data = rawRows.slice(1);

const orderIndex: Record<string, number> = Object.fromEntries(headers.map((s,i)=>[s,i]));
const displayColumns: string[][] =
  headers.map(name=>
      data.map(r => r[orderIndex[name]]).filter(s=>s)
  );

let boutOrders = Object.fromEntries(
  headers.map((s,i)=>
    [
      s,
      {
        name: s,
        colIdx: i,
        bouts: data.map(row=>row[i])
      }
    ]
  ));

var combinedColumns = [
  ['8'].concat(boutOrders['standard8'].bouts),
  ['6'].concat(boutOrders['standard6'].bouts, '\xa0', 'alt6', boutOrders['alt6'].bouts),
  ['7'].concat(boutOrders['standard7'].bouts, '\xa0', 'alt7', boutOrders['alt7'].bouts),

];


@Component({
  selector: 'bout-orders',
  templateUrl: './bout-orders.component.html',
  styleUrls: ['./bout-orders.component.less']
})


export class BoutOrdersComponent {
  boutOrders: string[][] = combinedColumns
  orderIndex: any = orderIndex


}
