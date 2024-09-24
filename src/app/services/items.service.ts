import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../models/item.model";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  _api: string = 'https://dummyjson.com';

  constructor(private _http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this._http.get<Item[]>(`${this._api}/products`)
  }

  getItems2(): Observable<Item[]> {
    return this._http.get<Item[]>(`${this._api}/products`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(() => new Error('Something went wrong; please try again later.'));
      })
    );
  }

  getItemById(id: number) {
    return this._http.get<Item>(`${this._api}/products/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error)); // Throw a user-friendly error message
  }

  updateItemById(item: Item) {
    return this._http.put<string>(`${this._api}/products/${item.id}`, item)
  }

  deleteItemById(id: number) {
    return this._http.delete<string>(`${this._api}/products/${id}`)
  }

  addItem(item: Item) {
    return this._http.post<string>(`${this._api}/products`, item)
  }

}
