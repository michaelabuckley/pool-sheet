import {Component, Input} from '@angular/core';

@Component({
  selector: 'bout-block',
  templateUrl: './bout-block.component.html',
  styleUrls: ['./bout-block.component.less']
})
export class BoutBlockComponent {
  @Input() index!: number;

}
