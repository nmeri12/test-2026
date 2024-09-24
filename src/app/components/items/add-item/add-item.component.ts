import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../../services/items.service";
import {FormBuilder,  FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private _itemService: ItemsService, private formBuilder: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this._itemService.addItem(this.form.value).subscribe((res) => {
      console.log('Item was added!');
      setTimeout(() => {
        this._router.navigate([''])
      }, 1500)
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1)]]
    });
  }

}
