import { Component } from '@angular/core';

@Component({
  selector: 'hit-grid',
  templateUrl: './hit-grid.component.html',
  styleUrls: ['./hit-grid.component.less']
})
export class HitGridComponent {
  cells = new Array(9);

}
