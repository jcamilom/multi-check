import { Component, QueryList, ContentChildren, AfterContentInit, OnDestroy, forwardRef } from '@angular/core';
import { MultiCheckOption } from '../../classes/multi-check-option';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
export class MultiCheckFieldComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {

  @ContentChildren(MultiCheckOption, { descendants: true }) options!: QueryList<MultiCheckOption>;

  private subscriptions = new Subscription();
  private selectedValues: any[] = [];
  private temporalValue: any[];

  _onChange: (_: any) => void;

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
    if (this.temporalValue) {
      this.setSelectedValues(this.temporalValue);
      this.temporalValue = null;
    }
  }

  private add(value: any, emitModelChange = true): void {
    this.selectedValues.push(value);
    if (emitModelChange) {
      this._onChange(this.selectedValues);
    }
  }

  private remove(value: any): void {
    const idx = this.selectedValues.findIndex(v => v === value);
    if (idx >= 0) {
      this.selectedValues.splice(idx, 1);
      this._onChange(this.selectedValues);
    }
  }

  private setSelectedValues(values: any[]): void {
    this.selectedValues = [];
    values.forEach(selectedValue => {
      const selectedOption = this.options.find(v => v.value === selectedValue);
      selectedOption.control.setValue(true, { emitEvent: false });
      this.add(selectedValue, false);
    });
  }

  writeValue(values: any[]): void {
    values = values || [];
    if (this.options) {
      this.setSelectedValues(values);
    } else {
      this.temporalValue = values;
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
