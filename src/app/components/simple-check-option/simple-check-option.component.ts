import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-check-option',
  templateUrl: './simple-check-option.component.html',
  styleUrls: ['./simple-check-option.component.scss']
})
export class SimpleCheckOptionComponent {

  @Input() value: any;
  @Input() label: string;

  public control = new FormControl(false);

  get valueChanges$(): Observable<boolean> {
    return this.control.valueChanges;
  }

}
