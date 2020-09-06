import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiCheckFieldComponent } from './components/multi-check-field/multi-check-field.component';
import { SimpleCheckOptionComponent } from './components/simple-check-option/simple-check-option.component';
import { UserCheckOptionComponent } from './components/user-check-option/user-check-option.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiCheckFieldComponent,
    SimpleCheckOptionComponent,
    UserCheckOptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
