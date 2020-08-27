import { Directive } from '@angular/core';
import { MultiCheckOption } from '../classes/multi-check-option';

@Directive({
  selector: '[appMultiCheckOption]'
})
export class MultiCheckOptionDirective {

  constructor(public component: MultiCheckOption) { }

}
