import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Tariff} from "../../models/task.model";
import {sortingOptions, SortOption} from "../../models/sorting-options";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tariffs: Tariff[] = []; // the original data array
  filteredTariffs: Tariff[] = []; // filtered array
  sortOrder: 'asc' | 'desc' = 'asc'; // default sort order
  sortField: keyof Omit<Tariff, 'benefits'> = 'price'; // default sort field
  searchQuery: string = ''; // default search query
  SortOptions: SortOption[] = sortingOptions;

  constructor(private tariffService: TaskService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  /**
   * fetch Data
   * @private
   */
  private fetchData() {
    this.tariffService.getTariffs().subscribe(data => {
      this.tariffs = data;
      this.filteredTariffs = data; // Initialize filteredTariffs with the full tariff list
    });
  }

  /**
   * handle the custom sort
   * updates the sortField and sortOrder variables based on the desired sort choice.
   * @param event
   */
  onSortChange(event: Event) {
    const [field, order] = (event.target as HTMLSelectElement).value?.split('-');  // Split value into field and order
    this.sortField = field as keyof Omit<Tariff, 'benefits'>;
    this.sortOrder = order as 'asc' | 'desc';
  }

  /**
   * Filters the tariffs based on the search query.
   */
  filterTariffs() {
    this.filteredTariffs = this.tariffs.filter(tariff =>
      tariff.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      tariff.id.toString().includes(this.searchQuery)
    );
  }
}
