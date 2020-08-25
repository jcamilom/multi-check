import { Component, OnInit, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { SimpleCheckOptionComponent } from 'src/app/components/simple-check-option/simple-check-option.component';

@Component({
  selector: 'app-multi-check-field',
  templateUrl: './multi-check-field.component.html',
  styleUrls: ['./multi-check-field.component.scss']
})
export class MultiCheckFieldComponent implements OnInit, AfterContentInit {

  @ContentChildren(SimpleCheckOptionComponent) options!: QueryList<SimpleCheckOptionComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.options);
  }

}
