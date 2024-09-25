import {Component, Input} from '@angular/core';
import {Tariff} from "../../../models/task.model";

@Component({
  selector: 'app-tariff-card',
  templateUrl: './tariff-card.component.html',
  styleUrl: './tariff-card.component.scss'
})
export class TariffCardComponent {
  @Input() tariff!: Tariff;
}
