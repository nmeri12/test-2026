import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { SortArrayPipe } from './sort-array.pipe';
import { SortDropdownMenuComponent } from './task-list/sort-dropdown-menu/sort-dropdown-menu.component';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse, NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {path:'',component:TaskListComponent}
]

@NgModule({
  declarations: [
    TaskListComponent,
    SortArrayPipe,
    SortDropdownMenuComponent
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
    NgbAccordionDirective
  ]
})
export class TaskModule { }
