import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemListComponent} from './item-list/item-list.component';
import {ListExtendComponent} from './item-list/list-extend/list-extend.component';
import {AddItemComponent} from './add-item/add-item.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ItemList2Component } from './item-list-2/item-list-2.component';

const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'list-2', component: ItemList2Component},
  {path: 'edit/:id', component: EditItemComponent},
  {path: 'add', component: AddItemComponent},
];

@NgModule({
  declarations: [
    ItemListComponent,
    ListExtendComponent,
    AddItemComponent,
    EditItemComponent,
    ItemList2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ItemsModule {
}
