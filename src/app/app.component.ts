import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { imgs } from './imgs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public users = [
    { name: 'Andrea Abad', location: 'Medellín, Colombia', avatar: imgs.andrea },
    { name: 'Anna Uhlíková', location: 'Prag, Czechia', avatar: imgs.anna },
    { name: 'Juan Paez', location: 'Puebla, México', avatar: imgs.juan },
    { name: 'Stjepan Jurić', location: 'Zagreb, Croatia', avatar: imgs.stjepan },
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
