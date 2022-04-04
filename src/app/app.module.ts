import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FruitListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
