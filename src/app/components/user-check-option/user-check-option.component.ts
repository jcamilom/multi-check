import { Component, Input } from '@angular/core';
import { MultiCheckOption } from '../../classes/multi-check-option';

@Component({
  selector: 'app-user-check-option',
  templateUrl: './user-check-option.component.html',
  styleUrls: ['./user-check-option.component.scss'],
  providers: [
    {
      provide: MultiCheckOption,
      useExisting: UserCheckOptionComponent
    }
  ]
})
export class UserCheckOptionComponent extends MultiCheckOption {

  @Input() value: any;

}
