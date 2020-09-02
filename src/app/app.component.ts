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

  public users = [
    { name: 'Andrea Abad', location: 'Medellín, Colombia', avatar: 'andrea.jpg' },
    { name: 'Stjepan Jurić', location: 'Zagreb, Croatia', avatar: 'stjepan.jpg' },
    { name: 'Anna Uhlíková', location: 'Prag, Czech Republic', avatar: 'anna.jpg' },
    { name: 'Juan Paez', location: 'Puebla, México', avatar: 'juan.jpg' },
  ];

}
