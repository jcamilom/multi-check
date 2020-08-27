import { Component, Input, forwardRef } from '@angular/core';
import { MultiCheckOption } from '../../classes/multi-check-option';

@Component({
  selector: 'app-simple-check-option',
  templateUrl: './simple-check-option.component.html',
  styleUrls: ['./simple-check-option.component.scss'],
  providers: [
    {
      provide: MultiCheckOption,
      useExisting: forwardRef(() => SimpleCheckOptionComponent)
    }
  ]
})
export class SimpleCheckOptionComponent extends MultiCheckOption {

  @Input() value: any;
  @Input() label: string;

}
