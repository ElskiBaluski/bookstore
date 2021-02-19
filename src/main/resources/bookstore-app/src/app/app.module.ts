import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AddBookComponent} from "./book/add-book/add-book.component";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteBookComponent } from './book/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}