import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Tariff} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tariffs';

  constructor(private http: HttpClient) {}

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.apiUrl);
  }
}
