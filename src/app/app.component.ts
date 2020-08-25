import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public values = [
    { code: '001', label: 'Math' },
    { code: '002', label: 'Science' },
    { code: '003', label: 'History' },
  ];

}
