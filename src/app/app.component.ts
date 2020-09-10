import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public users = [
    { name: 'Andrea Abad', location: 'Medellín, Colombia', avatar: 'https://raw.githubusercontent.com/jcamilom/multi-check/master/src/assets/images/andrea.jpg?raw=true' },
    { name: 'Anna Uhlíková', location: 'Prag, Czechia', avatar: 'https://github.com/jcamilom/multi-check/blob/master/src/assets/images/anna.jpg?raw=true' },
    { name: 'Juan Paez', location: 'Puebla, México', avatar: 'https://github.com/jcamilom/multi-check/blob/master/src/assets/images/juan.jpg?raw=true' },
    { name: 'Stjepan Jurić', location: 'Zagreb, Croatia', avatar: 'https://github.com/jcamilom/multi-check/blob/master/src/assets/images/stjepan.jpg?raw=true' },
  ];

  public languages = [
    { id: '1', name: 'C++' },
    { id: '2', name: 'HTML' },
    { id: '3', name: 'Javascript' },
    { id: '4', name: 'Go' },
    { id: '5', name: 'Java' },
    { id: '6', name: 'Typescript' },
    { id: '7', name: 'CSS' },
    { id: '8', name: 'C' },
  ];

  public form = new FormGroup({
    name: new FormControl(''),
    languages: new FormControl(null),
    members: new FormControl(null),
  });

}
