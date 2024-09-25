import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder, Tariff} from "../models/task.model";

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  /**
   * Sorts Tariff array based on the desired field and order.
   *
   * @param arr - Tariff array
   * @param sortField - price,name,
   * @param sortOrder - asc for ascending or esc for descending
   * @returns The sorted array
   */
  transform(arr: Tariff[], sortField: keyof Omit<Tariff, 'benefits'>, sortOrder: SortOrder): Tariff[] {
    // Return arr in case of empty array , sortField or sortOrder are not provided
    if (!arr || arr.length === 0 || !sortField || !sortOrder) {
      return arr;
    }

    // otherwise=> define the sort direction: 1 for ascending, -1 for descending
    const direction = sortOrder === 'asc' ? 1 : -1;

    //return sorted array
    return arr.sort((a, b) => this.compareValues(a[sortField], b[sortField]) * direction);
  }

  /**
   * Compares two values for sorting.
   *
   * @param a - first value.
   * @param b - second value.
   * @returns - number(0, 1 or -1) => 0 a=b, 1 if a > b or -1 if a < b
   */
  private compareValues(a: string | number, b: string | number): number {
    // handle numeric comparison
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }

    // handle string comparison
    return ('' + a).localeCompare('' + b);
  }
}
