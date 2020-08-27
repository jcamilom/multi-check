import { Component, QueryList, ContentChildren, AfterContentInit, OnDestroy } from '@angular/core';
import { SimpleCheckOptionComponent } from 'src/app/components/simple-check-option/simple-check-option.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multi-check-field',
  templateUrl: './multi-check-field.component.html',
  styleUrls: ['./multi-check-field.component.scss']
})
export class MultiCheckFieldComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(SimpleCheckOptionComponent) options!: QueryList<SimpleCheckOptionComponent>;

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
