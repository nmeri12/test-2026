import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuroCurrencyPipe } from './euro-currency.pipe';



@NgModule({
    declarations: [
        EuroCurrencyPipe
    ],
    exports: [
        EuroCurrencyPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
