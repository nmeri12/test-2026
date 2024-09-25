import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency'
})
export class EuroCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';

    // Format the price to DE currency
    const formattedValue = value.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Return the formatted value
    return formattedValue.replace('€', '€ ');
  }
}
