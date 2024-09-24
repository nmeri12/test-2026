import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../../services/items.service";
import {Item} from "../../../models/item.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {

  loading = true;
  items!: Item[];

  constructor(private _itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  private fetchItems() {
    this._itemsService.getItems().subscribe((res: any) => {
      console.log(res)
      this.items = res.products;
      this.loading = false;
    })
  }

  onBtnClicked(value: boolean) {
    console.log(value)
  }
}
