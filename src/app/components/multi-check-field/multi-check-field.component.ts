import { Component, QueryList, ContentChildren, AfterContentInit, OnDestroy, forwardRef } from '@angular/core';
import { MultiCheckOption } from '../../classes/multi-check-option';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-check-field',
  templateUrl: './multi-check-field.component.html',
  styleUrls: ['./multi-check-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiCheckFieldComponent),
      multi: true
    }
  ]
})
export class MultiCheckFieldComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(MultiCheckOption) options!: QueryList<MultiCheckOption>;

  private subscriptions = new Subscription();
  public selectedValues: any[] = [];

  ngAfterContentInit(): void {
    this.options.forEach(option => {
      this.subscriptions.add(
        option.valueChanges$.subscribe(
          optionChecked => {
            if (optionChecked) {
              this.add(option.value);
            } else {
              this.remove(option.value);
            }
          }
        )
      );
    });
  }

  private add(value: any): void {
    this.selectedValues.push(value);
  }

  private remove(value: any): void {
    const idx = this.selectedValues.findIndex(v => v === value);
    if (idx >= 0) {
      this.selectedValues.splice(idx, 1);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
