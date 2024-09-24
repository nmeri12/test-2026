import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../../models/item.model";

@Component({
  selector: 'app-list-extend',
  templateUrl: './list-extend.component.html',
  styleUrl: './list-extend.component.scss'
})
export class ListExtendComponent {

  @Input() item!: Item;
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  onClick(item: Item) {
     this.btnClicked.emit(true);
  }

}
