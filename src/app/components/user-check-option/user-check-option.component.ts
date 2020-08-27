import { Component, Input, forwardRef } from '@angular/core';
import { MultiCheckOption } from '../../classes/multi-check-option';

@Component({
  selector: 'app-user-check-option',
  templateUrl: './user-check-option.component.html',
  styleUrls: ['./user-check-option.component.scss'],
  providers: [
    {
      provide: MultiCheckOption,
      useExisting: forwardRef(() => UserCheckOptionComponent)
    }
  ]
})
export class UserCheckOptionComponent extends MultiCheckOption {

  @Input() value: any;
  @Input() label: string;

}
