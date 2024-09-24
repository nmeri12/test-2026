import {Component} from '@angular/core';
import {Item} from "../../../models/item.model";
import {ItemsService} from "../../../services/items.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-list-2',
  templateUrl: './item-list-2.component.html',
  styleUrl: './item-list-2.component.scss'
})
export class ItemList2Component {

  data$!: Observable<Item[] | any>;

  constructor(private _itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  private fetchItems() {
    this.data$ = this._itemsService.getItems();
  }

  onBtnClicked(value: boolean) {
    console.log(value)
  }
}

