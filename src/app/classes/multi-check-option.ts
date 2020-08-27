import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export abstract class MultiCheckOption {

  abstract value: any;

  public control = new FormControl(false);

  get valueChanges$(): Observable<boolean> {
    return this.control.valueChanges;
  }

}
