import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../../services/items.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../../models/item.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss'
})
export class EditItemComponent implements OnInit {

  id!: number;
  form!: FormGroup;
  submitted = false;
  loading = true;

  constructor(private _itemService: ItemsService, private _route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.fetchItem();
  }

  fetchItem() {
    if (this.id && !isNaN(this.id)) {
      this._itemService.getItemById(Number(this.id)).subscribe((item) => {
        console.log(item)
        this.createForm(item);
        this.loading = false;
      })
    } else {
      alert('Not valid ID!')
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this._itemService.updateItemById(this.form.value).subscribe((res) => {
      console.log('Item was updated!');
    })
  }

  createForm(item: Item) {
    this.form = this.formBuilder.group({
      title: [item.title || '', [Validators.required, Validators.minLength(3)]],
      price: [item.price || '', [Validators.required, Validators.min(1)]]
    });
  }

}

