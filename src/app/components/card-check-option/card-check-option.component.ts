import { Component, Input } from '@angular/core';
import { MultiCheckOption } from '../../classes/multi-check-option';

@Component({
  selector: 'app-card-check-option',
  templateUrl: './card-check-option.component.html',
  styleUrls: ['./card-check-option.component.scss'],
  providers: [
    {
      provide: MultiCheckOption,
      useExisting: CardCheckOptionComponent
    }
  ]
})
export class CardCheckOptionComponent extends MultiCheckOption {

  @Input() value: any;
  @Input() label: string;

}
