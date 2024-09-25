import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { SortArrayPipe } from './sort-array.pipe';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse, NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {TariffCardComponent} from "./task-list/tariff-card/tariff-card.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path:'',component:TaskListComponent}
]

@NgModule({
  declarations: [
    TaskListComponent,
    SortArrayPipe,
    TariffCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionBody,
    NgbAccordionDirective,
    SharedModule
  ]
})
export class TaskModule { }
